import HashTableLinearProbingElement from './HashTableLinearProbingElement';
import IHashTableLinearProbing from './IHashTableLinearProbing';
import IHashTableLinearProbingInputs from './IHashTableLinearProbingInputs';
import IHashTableLinearProbingOptions from './IHashTableLinearProbingOptions';

export default class HashTableLinearProbing<T = number> implements IHashTableLinearProbing<T> {
	private _maxSize: number = 0;
	private _data: HashTableLinearProbingElement<T>[] = [];

	constructor(
		inputs: IHashTableLinearProbingInputs<T> = {},
		{maxSize = 100}: IHashTableLinearProbingOptions = {maxSize: 100},
	) {
		this._maxSize = maxSize;

		for (const [key, value] of Object.entries(inputs)) {
			this.put(key, value);
		}
	}

	get data(): { [index: number]: HashTableLinearProbingElement<T>; } {
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

	public put(key: string, value: T): T | null {
		if (this.size === this._maxSize) {
			return null;
		}

		const element = new HashTableLinearProbingElement(key, value);
		let position = this._hashCode(key);

		if (this._data[position]) {
			do {
				position = (position + 1) % this._maxSize;
			} while (this._data[position]);
		}

		this._data[position] = element;

		return value;
	}

	public get(key: string): T | null {
		const position = this._hashCode(key);
		let i = position;

		do {
			if (this._data[i]?.key === key) {
				return this._data[i].value;
			}

			i = (i + 1) % this._maxSize;
		} while (this._data[i] && i !== position);

		return null;
	}

	private _hashCode(key: string): number {
		const code = key
			.split('')
			.map(character => character.charCodeAt(0))
			.reduce((previous, current) => previous + current, 0);

		return code % this._maxSize;
	}
}
