interface IMaxHeap<T> {
    get data(): T[];
    get size(): number;
    get isEmpty(): boolean;
    get max(): T | null;
    insert(_value: T): T;
    extract(): T | null;
}

export default IMaxHeap;
