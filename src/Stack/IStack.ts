interface IStack<T> {
	push(_element: T): T;
	pop(_element: T): T;
}

export default IStack;
