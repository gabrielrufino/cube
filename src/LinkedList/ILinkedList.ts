interface ILinkedListDataItem<T> {
	value: T;
	next: T | null;
}

interface ILinkedList<T> {
	get data(): ILinkedListDataItem<T>[];
	get size(): number;
	push(_element: T): T;
	remove(_element: T): T | undefined;
	removeFromPosition(_position: number): T | undefined;
}

export default ILinkedList;
