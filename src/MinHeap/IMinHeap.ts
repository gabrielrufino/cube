interface IMinHeap<T> {
	get data(): T[];
	get size(): number;
	get isEmpty(): boolean;
	get min(): T | null;
	insert(_value: T): T;
}

export default IMinHeap;
