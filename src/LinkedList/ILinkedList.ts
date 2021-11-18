interface ILinkedListItem<T> {
	value: T;
	next: T | null;
}

interface ILinkedList<T> {
	get data(): ILinkedListItem<T>[];
	get size(): number;
	push(_element: T): T;
	remove(_element: T): T | undefined;
	getFromPosition(_position: number): ILinkedListItem<T> | undefined;
	removeFromPosition(_position: number): T | undefined;
}

export default ILinkedList;
