interface ILinkedListItem<T> {
	value: T;
	next: T | null;
}

interface ILinkedList<T> {
	get data(): ILinkedListItem<T>[];
	get size(): number;
	get isEmpty(): boolean;
	push(_element: T): T;
	getFromPosition(_position: number): ILinkedListItem<T> | undefined;
	positionOf(_element: T): number | undefined;
	insertInPosition(_element: T, _position: number): T | undefined;
	remove(_element: T): T | undefined;
	removeFromPosition(_position: number): T | undefined;
}

export default ILinkedList;