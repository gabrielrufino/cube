import IDictionary from './IDictionary';
import IDictionaryData from './IDictionaryData';

export default class Dictionary<T = number> implements IDictionary<T> {
	private _data: IDictionaryData<T> = {};

	constructor(inputs: { [key: string]: T } = {}) {
		this._data = inputs;
	}

	get data(): IDictionaryData<T> {
		return this._data;
	}

	get size(): number {
		return Object.keys(this.data).length;
	}

	public set(key: string, value: T): [string, T] {
		Reflect.set(this._data, key, value);
		return [key, value];
	}

	public remove(key: string): [string, T] | null {
		if (Reflect.has(this.data, key)) {
			const value = Reflect.get(this.data, key);
			Reflect.deleteProperty(this._data, key);

			return [key, value];
		}

		return null;
	}
}
