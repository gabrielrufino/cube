interface IStack<T> {
	push(_element: T): T;
	pop(): T | undefined;
	peek(): T | undefined;
}

export default IStack;
