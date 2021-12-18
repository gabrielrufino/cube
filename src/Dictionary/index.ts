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
		return Reflect.ownKeys(this.data).length;
	}

	public set(key: string, value: T): [string, T] {
		Reflect.set(this._data, key, value);
		return [key, value];
	}

	public remove(key: string): [string, T] | null {
		if (this.hasKey(key)) {
			const value = Reflect.get(this.data, key);
			Reflect.deleteProperty(this._data, key);

			return [key, value];
		}

		return null;
	}

	public hasKey(key: string): boolean {
		return Reflect.has(this.data, key);
	}

	public get(key: string): T | null {
		if (this.hasKey(key)) {
			return Reflect.get(this.data, key);
		}

		return null;
	}

	public clear(): IDictionaryData<T> {
		const dictionary = {...this.data};
		this._data = {};
		return dictionary;
	}
}
