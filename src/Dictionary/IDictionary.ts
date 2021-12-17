import IDictionaryData from './IDictionaryData';

interface IDictionary<T> {
	get data(): IDictionaryData<T>;
	get size(): number;
	set(_key: string, _value: T): [string, T];
	remove(_key: string): [string, T] | null;
}

export default IDictionary;
