import DataStructure from '../DataStructure';
import IDeck from './IDeck';

export default class Deck<T = number> extends DataStructure<T> implements IDeck<T> {
	constructor(...inputs: Readonly<T[]>) {
		super(inputs);
	}

	public addFront(element: T): T {
		this._data = [element, ...this.data];
		return element;
	}

	public addBack(element: T): T {
		this._data = [...this.data, element];
		return element;
	}

	public removeFront(): T | undefined {
		const [element, ...rest] = this.data;
		this._data = rest;
		return element;
	}

	public removeBack(): T | undefined {
		const element = this._data.pop();
		return element;
	}

	public peekFront(): T | undefined {
		const [element] = this.data;
		return element;
	}

	public peekBack(): T | undefined {
		const element = this.data[this.size - 1];
		return element;
	}

	private [Symbol.toPrimitive](type: 'number' | 'string' | 'default'): number | string | boolean {
		const primitives = {
			number: this.size,
			string: `[Front] ${this.data.join(', ')} [Back]`,
			default: true,
		};

		return primitives[type];
	}
}
