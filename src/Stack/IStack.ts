interface IStack<T> {
	push(_element: T): T;
	pop(): T | undefined;
}

export default IStack;
