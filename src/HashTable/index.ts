import IHashTable from './IHashTable';
import IHashTableData from './IHashTableData';
import IHashTableInputs from './IHashTableInputs';
import IHashTableOptions from './IHashTableOptions';

export default class HashTable<T = number> implements IHashTable<T> {
	private _data: T[];

	constructor(
		inputs: Readonly<IHashTableInputs<T>> = {},
		{maxSize = 100}: IHashTableOptions = {},
	) {
		this._data = new Array(maxSize);

		for (const [key, value] of Object.entries(inputs)) {
			this.put(key, value);
		}
	}

	get data(): IHashTableData<T> {
		return this._data
			.map((value, index) => ({index, value}))
			.reduce((accumulator, current) => ({
				...accumulator,
				[current.index]: current.value,
			}), {});
	}

	get size(): number {
		return Reflect.ownKeys(this.data).length;
	}

	get maxSize(): number {
		return this._data.length;
	}

	public put(key: string, value: T): T {
		const position = this._hashCode(key);
		this._data[position] = value;
		return value;
	}

	public get(key: string): T | null {
		const position = this._hashCode(key);
		return this.data[position] || null;
	}

	public remove(key: string): T | null {
		const value = this.get(key);
		const position = this._hashCode(key);
		Reflect.deleteProperty(this._data, position);
		return value;
	}

	private _hashCode(key: string): number {
		const code = key
			.split('')
			.map(character => character.charCodeAt(0))
			.reduce((previous, current) => previous + current, 0);

		return code % this.maxSize;
	}

	private [Symbol.toPrimitive](type: 'default' | 'number' | 'string'): boolean | string | number {
		const primitives = {
			default: true,
			number: this.size,
			string: `[ ${Object.entries(this.data).map(([key, value]) => `${key} => ${value}`).join(', ')} ]`,
		};

		return primitives[type];
	}
}
