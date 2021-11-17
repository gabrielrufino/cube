interface ILinkedListDataItem<T> {
	value: T;
	next: T | null;
}

interface ILinkedList<T> {
	push(_element: T): T;
	get data(): ILinkedListDataItem<T>[]
}

export default ILinkedList;
