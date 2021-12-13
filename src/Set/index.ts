import ISet from './ISet';

export default class Set<T = number> implements ISet<T> {
	private _data: Map<T, T> = new Map<T, T>();

	constructor(...inputs: T[]) {
		for (const input of inputs) {
			this.add(input);
		}
	}

	public get data(): T[] {
		return Array.from(this._data.values());
	}

	public get size(): number {
		return this._data.size;
	}

	public has(element: T): boolean {
		return this._data.has(element);
	}

	public add(element: T): T | null {
		if (!this.has(element)) {
			this._data.set(element, element);
			return element;
		}

		return null;
	}

	private [Symbol.toPrimitive](type: string): string | number | null {
		if (type === 'string') {
			return `{ ${this.data.join(', ')} }`;
		}

		if (type === 'number') {
			return this.size;
		}

		return null;
	}
}
