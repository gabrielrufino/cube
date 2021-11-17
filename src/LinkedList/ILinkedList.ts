interface ILinkedList<T> {
	push(_element: T): T;
	get data(): {
		value: T;
		next: T | null;
	}[]
}

export default ILinkedList;
