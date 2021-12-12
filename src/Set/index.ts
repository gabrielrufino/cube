import ISet from './ISet';

export default class Set<T = number> implements ISet<T> {
	private _data: Map<T, T> = new Map<T, T>();

	constructor(...inputs: T[]) {
		for (const input of inputs) {
			this._data.set(input, input);
		}
	}

	public get data(): T[] {
		return Array.from(this._data.values());
	}

	public get size(): number {
		return this._data.size;
	}
}
