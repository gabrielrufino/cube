import DataStructure from '../DataStructure';

export default class Array<T = number> extends DataStructure<T> {
	constructor(...inputs: T[]) {
		super(inputs);
	}

	public insertInLastPosition(element: T): T {
		this._data[this.size] = element;
		return element;
	}

	public insertInFirstPosition(element: T): T {
		for (let i = this.size; i > 0; i--) {
			this._data[i] = this._data[i - 1];
		}

		this._data[0] = element;
		return element;
	}
}
