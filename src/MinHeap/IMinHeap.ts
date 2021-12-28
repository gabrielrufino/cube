interface IMinHeap<T> {
	get data(): T[];
	get size(): number;
	get isEmpty(): boolean;
	get min(): T | null;
	get max(): T | null;
	insert(_value: T): T;
}

export default IMinHeap;
