import IHashTableData from './IHashTableData';

interface IHashTable<T> {
	get data(): IHashTableData<T>;
	get size(): number;
	put(_key: string, _value: T): T;
	get(_key: string): T | null;
	remove(_key: string): T | null;
}

export default IHashTable;
