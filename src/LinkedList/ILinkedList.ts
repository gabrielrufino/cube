interface ILinkedListDataItem<T> {
	value: T;
	next: T | null;
}

interface ILinkedList<T> {
	get data(): ILinkedListDataItem<T>[];
	get size(): number;
	push(_element: T): T;
}

export default ILinkedList;
