import IGraph from './IGraph';
import IGraphOptions from './IGraphOptions';

import Dictionary from '../Dictionary';
import Set from '../Set';
import GraphNodeNotFoundError from './GraphNodeNotFoundError';

export default class Graph implements IGraph {
	private _isDirected: boolean;
	private _data: Dictionary<Set<string>>;

	constructor({inputs = {}, isDirected = false}: IGraphOptions = {inputs: {}, isDirected: false}) {
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

	get edges(): [string, string][] {
		if (this.isDirected) {
			return Object.entries(this.data)
				.flatMap((
					[node, links]) => links.map<[string, string]>(link => [node, link]),
				);
		}

		return Object.entries(this.data)
			.reduce<[string, string][]>((accumulator, [node, links]) => {
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

	public connect(node1: string, node2: string): [string, string] {
		if (!this._data.hasKey(node1)) {
			throw new GraphNodeNotFoundError(node1);
		}

		if (!this._data.hasKey(node2)) {
			throw new GraphNodeNotFoundError(node2);
		}

		this._data.get(node1)?.add(node2);

		if (!this._isDirected) {
			this._data.get(node2)?.add(node1);
		}

		return [node1, node2];
	}
}
