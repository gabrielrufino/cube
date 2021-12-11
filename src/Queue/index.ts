import DataStructure from '../DataStructure';
import IQueue from './IQueue';

export default class Queue<T = number> extends DataStructure<T> implements IQueue<T> {
	constructor(...inputs: T[]) {
		super(inputs);
	}

	get isEmpty(): boolean {
		return this.size === 0;
	}

	public enqueue(element: T): T {
		this._data = [...this.data, element];
		return element;
	}

	public dequeue(): T | undefined {
		const [element, ...rest] = this.data;
		this._data = rest;
		return element;
	}

	public peek(): T | undefined {
		const [element] = this.data;
		return element;
	}

	public clear(): void {
		this._data = [];
	}

	private [Symbol.toPrimitive](type: string): string | number | null {
		if (type === 'string') {
			return `[Front] ${this.data.join(', ')}`;
		}

		if (type === 'number') {
			return this.size;
		}

		return null;
	}
}
