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

	describe('.put()', () => {
		it('Should insert a new element in hash table', () => {
			const hashTable = new HashTable();
			hashTable.put('first', 1);

			expect(hashTable.data).toEqual({
				52: 1,
			});
			expect(hashTable.size).toBe(1);
		});

		it('Should return the inserted element', () => {
			const hashTable = new HashTable();
			const returned = hashTable.put('first', 1);

			expect(returned).toEqual(1);
		});
	});
});
