import IHashTable from './IHashTable';
import IHashTableData from './IHashTableData';
import IHashTableInputs from './IHashTableInputs';
import IHashTableOptions from './IHashTableOptions';

export default class HashTable<T = number> implements IHashTable<T> {
	private _maxSize: number;
	private _data: T[];

	constructor(
		inputs: IHashTableInputs<T> = {},
		{maxSize = 100}: IHashTableOptions = {maxSize: 100},
	) {
		this._maxSize = maxSize;
		this._data = new Array(this._maxSize);

		for (const [key, value] of Object.entries(inputs)) {
			this._data[this._hashCode(key)] = value;
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

	private _hashCode(key: string): number {
		const code = key
			.split('')
			.map(character => character.charCodeAt(0))
			.reduce((previous, current) => previous + current, 0);

		return code % this._maxSize;
	}
}
