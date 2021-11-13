interface IQueue<T> {
	enqueue(_element: T): T;
	dequeue(): T | undefined;
	peek(): T | undefined;
	get isEmpty(): boolean;
}

export default IQueue;
