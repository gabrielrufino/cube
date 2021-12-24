import HashTableSeparateChainingElement from './HashTableSeparateChainingElement';
import IHashTableSeparateChaining from './IHashTableSeparateChaining';
import IHashTableSeparateChainingData from './IHashTableSeparateChainingData';
import IHashTableSeparateChainingInputs from './IHashTableSeparateChainingInputs';
import LinkedList from '../LinkedList';

export default class HashTableSeparateChaining<T = number> implements IHashTableSeparateChaining<T> {
	private _maxSize: number;
	private _data: LinkedList<HashTableSeparateChainingElement<T>>[];

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
		const linkedList = this._getLinkedListByKey(key);
		const element = new HashTableSeparateChainingElement(key, value);

		if (linkedList) {
			linkedList.push(element);
		} else {
			const position = this._hashCode(key);
			this._data[position] = new LinkedList(element);
		}

		return value;
	}

	public get(key: string): HashTableSeparateChainingElement<T> | null {
		const linkedList = this._getLinkedListByKey(key);

		if (linkedList) {
			const element = linkedList.data.find(element => element.value.key === key);
			return element?.value || null;
		}

		return null;
	}

	public remove(key: string): HashTableSeparateChainingElement<T> | null {
		const linkedList = this._getLinkedListByKey(key);

		if (linkedList) {
			const index = linkedList.data.findIndex(element => element.value.key === key);
			const element = linkedList.removeFromPosition(index);

			if (linkedList.isEmpty) {
				const position = this._hashCode(key);
				Reflect.deleteProperty(this._data, position);
			}

			return element || null;
		}

		return null;
	}

	private _getLinkedListByKey(key: string): LinkedList<HashTableSeparateChainingElement<T>> | null {
		const position = this._hashCode(key);
		return Reflect.get(this.data, position) || null;
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
