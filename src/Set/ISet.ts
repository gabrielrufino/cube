interface ISet<T> {
  get data(): T[];
  get size(): number;
  // [Symbol.toPrimitive](_type: string): string | number | null
}

export default ISet;
