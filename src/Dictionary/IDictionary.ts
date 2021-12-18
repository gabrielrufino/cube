import IDictionaryData from './IDictionaryData';

interface IDictionary<T> {
	get data(): IDictionaryData<T>;
	get size(): number;
	get isEmpty(): boolean;
	get keys(): string[];
	get values(): T[];
	get pairs(): [string, T][]
	set(_key: string, _value: T): [string, T];
	remove(_key: string): [string, T] | null;
	hasKey(_key: string): boolean;
	get(_key: string): T | null;
	clear(): IDictionaryData<T>
}

export default IDictionary;
