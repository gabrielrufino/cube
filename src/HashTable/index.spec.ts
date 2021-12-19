import {describe, it, expect} from '@jest/globals';

import HashTable from './';

describe('HashTable', () => {
	it('Should create an empty hash table without problems', () => {
		const hashTable = new HashTable<number>();

		expect(hashTable.data).toEqual({});
		expect(hashTable.size).toBe(0);
	});

	it('Should create an filled hash table without problems', () => {
		const hashTable = new HashTable<number>({
			first: 1,
			second: 2,
			third: 3,
			fourth: 4,
		});

		expect(hashTable.data).toEqual({
			36: 2,
			39: 3,
			52: 1,
			64: 4,
		});
		expect(hashTable.size).toBe(4);
	});
});
