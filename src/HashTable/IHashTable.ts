import IHashTableData from './IHashTableData';

interface IHashTable<T> {
	get data(): IHashTableData<T>;
	get size(): number;
}

export default IHashTable;
