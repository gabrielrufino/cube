import IHashTableLinearProbingData from './IHashTableLinearProbingData';

interface IHashTableLinearProbing<T> {
	get data(): IHashTableLinearProbingData<T>;
	get size(): number;
	put(_key: string, _value: T): T | null;
}

export default IHashTableLinearProbing;
