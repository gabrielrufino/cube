import IMaxHeap from './IMaxHeap';
import IMaxHeapOptions from './IMaxHeapOptions';

export default class MaxHeap<T = number> implements IMaxHeap<T> {
	private _data: T[] = [];

	constructor({greaterThanOrEqualTo, inputs = []}: IMaxHeapOptions<T> = {inputs: []}) {
		if (greaterThanOrEqualTo) {
			this._greaterThanOrEqualTo = greaterThanOrEqualTo;
		}

		for (const input of inputs) {
			this.insert(input);
		}
	}

	get data(): T[] {
		return [...this._data];
	}

	get size(): number {
		return this.data.length;
	}

	public insert(value: T): T {
		this._data = [...this.data, value];
		this._siftUp(this.size - 1);
		return value;
	}

	private _greaterThanOrEqualTo = (value1: T, value2: T): boolean => value1 >= value2;
	private _getLeftIndex = (index: number): number => (2 * index) + 1;
	private _getRightIndex = (index: number): number => (2 * index) + 2;
	private _getParentIndex = (index: number): number => Math.floor((index - 1) / 2);

	private _siftUp(index: number): void {
		const parent = this._getParentIndex(index);

		if (index > 0 && this._greaterThanOrEqualTo(this.data[index], this.data[parent])) {
			[this._data[parent], this._data[index]] = [this.data[index], this.data[parent]];
			this._siftUp(parent);
		}
	}
}
