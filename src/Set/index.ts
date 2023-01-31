import ISet from './ISet';

export default class Set<T = number> implements ISet<T> {
	private _data: Map<T, T> = new Map<T, T>();

	constructor(...inputs: Readonly<T[]>) {
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

	public delete(element: T): T | null {
		if (this.has(element)) {
			this._data.delete(element);
			return element;
		}

		return null;
	}

	public clear(): T[] {
		const elements = [...this.data];
		this._data.clear();
		return elements;
	}

	public union(set: Set<T>): Set<T> {
		return Set.union(this, set);
	}

	public intersection(set: Set<T>): Set<T> {
		return Set.intersection(this, set);
	}

	public difference(set: Set<T>): Set<T> {
		return Set.difference(this, set);
	}

	public isSubsetOf(set: Set<T>): boolean {
		return Set.isSubset(this, set);
	}

	public contains(set: Set<T>): boolean {
		return Set.isSubset(set, this);
	}

	static union<T>(set1: Set<T>, set2: Set<T>): Set<T> {
		const union = new Set<T>();

		for (const element of [...set1.data, ...set2.data]) {
			union.add(element);
		}

		return union;
	}

	static intersection<T>(set1: Set<T>, set2: Set<T>): Set<T> {
		let biggestSet: Set<T>;
		let smallestSet: Set<T>;

		if (set1.size >= set2.size) {
			biggestSet = set1;
			smallestSet = set2;
		} else {
			biggestSet = set2;
			smallestSet = set1;
		}

		const intersection = new Set<T>();

		for (const element of smallestSet.data) {
			if (biggestSet.has(element)) {
				intersection.add(element);
			}
		}

		return intersection;
	}

	static difference<T>(set1: Set<T>, set2: Set<T>): Set<T> {
		const difference = new Set<T>();

		for (const element of set1.data) {
			if (!set2.has(element)) {
				difference.add(element);
			}
		}

		return difference;
	}

	static isSubset<T>(set1: Set<T>, set2: Set<T>): boolean {
		if (set1.size > set2.size) {
			return false;
		}

		return set1
			.data
			.every(element => set2.has(element));
	}

	private [Symbol.toPrimitive](type: 'number' | 'string' | 'default'): string | number | boolean {
		const primitives = {
			number: this.size,
			string: `{ ${this.data.join(', ')} }`,
			default: true,
		};

		return primitives[type];
	}
}
