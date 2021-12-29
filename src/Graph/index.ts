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
			this._data.set(node, new Set<string>());

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
}
