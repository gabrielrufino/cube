import IMaxHeap from './IMaxHeap';

export default class MaxHeap<T = number> implements IMaxHeap<T> {
	private _data: T[] = [];

	get data(): T[] {
		return [...this._data];
	}

	get size(): number {
		return this.data.length;
	}
}
