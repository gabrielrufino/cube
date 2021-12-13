interface ISet<T> {
  get data(): T[];
  get size(): number;
  has(_elemet: T): boolean;
  add(_element: T): T | null;
  delete(_element: T): T | null;
  clear(_element: T): T[];
}

export default ISet;
