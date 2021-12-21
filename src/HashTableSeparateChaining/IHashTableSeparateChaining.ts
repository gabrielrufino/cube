import IHashTableSeparateChainingData from './IHashTableSeparateChainingData';
import LinkedList from '../LinkedList';

interface IHashTableSeparateChaining<T> {
  get data(): IHashTableSeparateChainingData<T>;
  get size(): number;
  put(_key: string, _value: T): T;
  get(_key: string): LinkedList<T> | null;
  remove(_key: string): LinkedList<T> | null;
}

export default IHashTableSeparateChaining;
