import DataStructure from '../DataStructure';
import IStack from './IStack';

export default class Stack<T = number> extends DataStructure<T> implements IStack<T> {
	constructor(...inputs: T[]) {
		super(inputs);
	}

	public push(element: T) {
		this._data.push(element);
		return element;
	}

	public pop(): T | undefined {
		const element = this._data.pop();
		return element;
	}

	public peek(): T | undefined {
		const topPosition = this.data.length - 1;
		return this.data[topPosition];
	}

	public clear(): void {
		this._data = [];
	}

	public get isEmpty(): boolean {
		return this.data.length === 0;
	}

	private [Symbol.toPrimitive](type: 'default' | 'number' | 'string'): boolean | number | string {
		const primitives = {
			default: true,
			number: this.size,
			string: `${this.data.join(', ')} [Top]`,
		};

		return primitives[type];
	}
}
