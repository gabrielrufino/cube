interface IArray<T> {
	insertInLastPosition(_element: T): T;
	insertInFirstPosition(_element: T): T;
	removeFromLastPosition(): T | undefined;
	removeFromFirstPosition(): T | undefined;
	removeFromPosition(_position: number): T | undefined;
}

export default IArray;
