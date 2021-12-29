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

			for (const value of inputs[node]) {
				if (!nodes.includes(value)) {
					throw new GraphNodeNotFoundError(value);
				}

				this._data.get(node)?.add(value);
			}
		}
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
