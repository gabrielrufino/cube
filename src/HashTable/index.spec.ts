import {describe, it, expect} from '@jest/globals';
import faker from '@faker-js/faker';

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

	describe('.maxSize', () => {
		it('Should be 100 by default', () => {
			const hashTable = new HashTable<number>({
				first: 1,
				second: 2,
				third: 3,
				fourth: 4,
			});

			expect(hashTable.maxSize).toBe(100);
		});

		it('Should be customizable', () => {
			const maxSize = faker.datatype.number({max: 2000});
			const hashTable = new HashTable<number>({
				first: 1,
				second: 2,
				third: 3,
				fourth: 4,
			}, {
				maxSize,
			});

			expect(hashTable.maxSize).toBe(maxSize);
		});
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

	describe('.get()', () => {
		it('Should return the element of the key', () => {
			const hashTable = new HashTable({
				first: 1,
			});
			const returned = hashTable.get('first');

			expect(returned).toBe(1);
		});

		it('Should return null if the key does not exists in the hash table', () => {
			const hashTable = new HashTable({
				first: 1,
			});
			const returned = hashTable.get('second');

			expect(returned).toBeNull();
		});
	});

	describe('.remove()', () => {
		it('Should remove an existent key value pair', () => {
			const hashTable = new HashTable<number>({
				first: 1,
				second: 2,
			});
			hashTable.remove('second');

			expect(hashTable.data).toEqual({
				52: 1,
			});
			expect(hashTable.size).toBe(1);
		});

		it('Should not change the hash table when receive a non existent key', () => {
			const hashTable = new HashTable<number>({
				first: 1,
			});
			hashTable.remove('second');

			expect(hashTable.data).toEqual({
				52: 1,
			});
			expect(hashTable.size).toBe(1);
		});

		it('Should return the removed value', () => {
			const hashTable = new HashTable({
				first: 1,
				second: 2,
			});
			const returned = hashTable.remove('second');

			expect(returned).toBe(2);
		});

		it('Should return null when receive a non existent key', () => {
			const hashTable = new HashTable({
				first: 1,
			});
			const returned = hashTable.remove('second');

			expect(returned).toBeNull();
		});
	});

	describe('Conversion to primitive', () => {
		it('Should return a separated by comma key value pairs in string conversion', () => {
			const hashTable = new HashTable({
				first: 1,
				second: 2,
			});
			const string = String(hashTable);

			expect(string).toBe('[ 36 => 2, 52 => 1 ]');
		});

		it('Should return the hash table size in number conversion', () => {
			const hashTable = new HashTable({
				first: 1,
				second: 2,
			});
			const number = Number(hashTable);

			expect(number).toBe(2);
		});

		it('Should return true in default conversion', () => {
			const hashTable = new HashTable({
				first: 1,
				second: 2,
			});
			const returned = hashTable[Symbol.toPrimitive]('default');

			expect(returned).toBe(true);
		});
	});
});
