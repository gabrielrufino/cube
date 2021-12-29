interface IMaxHeap<T> {
    get data(): T[];
    get size(): number;
    insert(_value: T): T;
}

export default IMaxHeap;
