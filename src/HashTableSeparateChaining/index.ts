import LinkedList from '../LinkedList';
import IHashTableSeparateChaining from './IHashTableSeparateChaining';
import IHashTableSeparateChainingData from './IHashTableSeparateChainingData';
import IHashTableSeparateChainingInputs from './IHashTableSeparateChainingInputs';

export default class HashTableSeparateChaining<T = number> implements IHashTableSeparateChaining<T> {
	private _maxSize: number;
	private _data: LinkedList<T>[];

	constructor(
		inputs: IHashTableSeparateChainingInputs<T> = {},
		{maxSize} = {maxSize: 100},
	) {
		this._maxSize = maxSize;
		this._data = new Array(this._maxSize);

		for (const [key, value] of Object.entries(inputs)) {
			this.put(key, value);
		}
	}

	get data(): IHashTableSeparateChainingData<T> {
		return this._data
			.map((value, key) => ({key, value}))
			.reduce((accumulator, current) => ({
				...accumulator,
				[current.key]: current.value,
			}), {});
	}

	get size(): number {
		return Reflect.ownKeys(this.data).length;
	}

	public put(key: string, value: T): T {
		const linkedList = this.get(key);

		if (linkedList) {
			linkedList.push(value);
		} else {
			const position = this._hashCode(key);
			this._data[position] = new LinkedList<T>(value);
		}

		return value;
	}

	public get(key: string): LinkedList<T> | null {
		const position = this._hashCode(key);
		return Reflect.get(this.data, position) || null;
	}

	public remove(key: string): LinkedList<T> | null {
		const linkedList = this.get(key);

		if (linkedList) {
			const position = this._hashCode(key);
			Reflect.deleteProperty(this._data, position);
			return linkedList;
		}

		return null;
	}

	private _hashCode(key: string): number {
		const code = key
			.split('')
			.map(character => character.charCodeAt(0))
			.reduce((previous, current) => previous + current, 0);

		return code % this._maxSize;
	}

	private [Symbol.toPrimitive](type: string): string | number | null {
		if (type === 'string') {
			return `[ ${Object.values(this.data).map(String).join(', ')} ]`;
		}

		if (type === 'number') {
			return this.size;
		}

		return null;
	}
}
