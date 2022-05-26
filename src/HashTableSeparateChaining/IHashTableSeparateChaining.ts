import HashTableSeparateChainingElement from './HashTableSeparateChainingElement';
import IHashTableSeparateChainingData from './IHashTableSeparateChainingData';

interface IHashTableSeparateChaining<T> {
  get data(): IHashTableSeparateChainingData<T>;
  get size(): number;
  get maxSize(): number;
  put(_key: string, _value: T): T;
  get(_key: string): HashTableSeparateChainingElement<T> | null;
  remove(_key: string): HashTableSeparateChainingElement<T> | null;
}

export default IHashTableSeparateChaining;
