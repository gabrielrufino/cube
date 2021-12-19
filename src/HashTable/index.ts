import IHashTable from './IHashTable';

export default class HashTable<T = number> implements IHashTable<T> {
	private _data: T[] = [];

	constructor() {
		this._data = [];
	}

	get data(): T[] {
		return this._data;
	}

	get size(): number {
		return this.data
			.filter(element => element)
			.length;
	}
}
