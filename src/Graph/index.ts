import GraphNodeNotFoundError from './GraphNodeNotFoundError';
import GraphSearchNodeStates from './GraphSearchNodeStates';
import IGraph from './IGraph';
import IGraphOptions from './IGraphOptions';

import Dictionary from '../Dictionary';
import Queue from '../Queue';
import Set from '../Set';
import {Edge} from './Edge';

export default class Graph implements IGraph {
	private readonly _isDirected: boolean;
	private readonly _data: Dictionary<Set<string>>;

	constructor({inputs = {}, isDirected = false}: Readonly<IGraphOptions> = {}) {
		this._isDirected = isDirected;
		this._data = new Dictionary<Set<string>>();

		const nodes = Object.keys(inputs);
		for (const node of nodes) {
			this.insert(node);
		}

		for (const node of nodes) {
			for (const value of inputs[node]) {
				this.connect(node, value);
			}
		}
	}

	get isDirected(): boolean {
		return this._isDirected;
	}

	get data(): { [key: string]: string[]; } {
		return Object.entries(this._data.data)
			.reduce((accumulator, [key, value]) => ({
				...accumulator,
				[key]: value.data,
			}), {});
	}

	get size(): number {
		return this._data.size;
	}

	get nodes(): string[] {
		return [...this._data.keys];
	}

	get edges(): Edge[] {
		if (this.isDirected) {
			return Object.entries(this.data)
				.flatMap((
					[node, links]) => links.map<Edge>(link => [node, link]),
				);
		}

		return Object.entries(this.data)
			.reduce<Edge[]>((accumulator, [node, links]) => {
				const edges = links
					.map<[string, string]>(link => [node, link])
					.filter(edge => !accumulator.find(item => item.includes(edge[0]) && item.includes(edge[1])));

				return [
					...accumulator,
					...edges,
				];
			}, []);
	}

	public insert(node: string): string | null {
		if (this._data.hasKey(node)) {
			return null;
		}

		this._data.set(node, new Set<string>());

		return node;
	}

	public connect(node1: string, node2: string): Edge {
		if (!this._data.hasKey(node1)) {
			throw new GraphNodeNotFoundError(node1);
		}

		if (!this._data.hasKey(node2)) {
			throw new GraphNodeNotFoundError(node2);
		}

		this._data.get(node1)!.add(node2);

		if (!this._isDirected) {
			this._data.get(node2)!.add(node1);
		}

		return [node1, node2];
	}

	public breadthFirstSearch(startNode: string, callback: (_node: string) => void): void {
		if (!this._data.hasKey(startNode)) {
			throw new GraphNodeNotFoundError(startNode);
		}

		const {nodes} = this;
		const states: { [key: string]: GraphSearchNodeStates } = nodes.reduce((accumulator, node) => ({
			...accumulator,
			[node]: GraphSearchNodeStates.UNEXPLORED,
		}), {});

		const queue = new Queue<string>();
		queue.enqueue(startNode);

		while (!queue.isEmpty) {
			const current = queue.dequeue() as string;

			states[current] = GraphSearchNodeStates.DISCOVERED;
			const neighbors = this._data.get(current)?.data as string[];
			const unexploredNeighbors = neighbors.filter(neighbor => states[neighbor] === GraphSearchNodeStates.UNEXPLORED);

			for (const neighbor of unexploredNeighbors) {
				states[neighbor] = GraphSearchNodeStates.DISCOVERED;
				queue.enqueue(neighbor);
			}

			states[current] = GraphSearchNodeStates.EXPLORED;
			callback(current);
		}
	}

	public getDistancesFrom(node: string): { [key: string]: number; } {
		if (!this._data.hasKey(node)) {
			throw new GraphNodeNotFoundError(node);
		}

		const {nodes} = this;
		const states: { [key: string]: GraphSearchNodeStates } = nodes.reduce((accumulator, node) => ({
			...accumulator,
			[node]: GraphSearchNodeStates.UNEXPLORED,
		}), {});
		const distances: { [key: string]: number } = nodes.reduce((accumulator, node) => ({
			...accumulator,
			[node]: 0,
		}), {});

		const queue = new Queue<string>();
		queue.enqueue(node);

		while (!queue.isEmpty) {
			const current = queue.dequeue() as string;

			states[current] = GraphSearchNodeStates.DISCOVERED;
			const neighbors = this._data.get(current)?.data as string[];
			const unexploredNeighbors = neighbors.filter(neighbor => states[neighbor] === GraphSearchNodeStates.UNEXPLORED);

			for (const neighbor of unexploredNeighbors) {
				states[neighbor] = GraphSearchNodeStates.DISCOVERED;
				distances[neighbor] = distances[current] + 1;
				queue.enqueue(neighbor);
			}

			states[current] = GraphSearchNodeStates.EXPLORED;
		}

		return distances;
	}
}
