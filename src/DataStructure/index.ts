export default abstract class DataStructure<T> {
	protected _data: T[];

	constructor(inputs: T[]) {
		this._data = [...inputs];
	}

	public get data(): T[] {
		return [...this._data];
	}
}
