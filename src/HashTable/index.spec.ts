import {describe, it, expect} from '@jest/globals';

import HashTable from './';

describe('HashTable', () => {
	it('Should create a hash table without problems', () => {
		const hashTable = new HashTable();

		expect(hashTable.data).toEqual([]);
		expect(hashTable.size).toBe(0);
	});
});
