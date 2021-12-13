interface ISet<T> {
  get data(): T[];
  get size(): number;
  has(_elemet: T): boolean;
  add(_element: T): T | null;
}

export default ISet;
