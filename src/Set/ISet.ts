interface ISet<T> {
  get data(): T[];
  get size(): number;
  has(_elemet: T): boolean;
}

export default ISet;
