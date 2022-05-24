import {describe, it, expect} from '@jest/globals';

import HashTableLinearProbing from './';
import HashTableLinearProbingElement from './HashTableLinearProbingElement';

describe('HashTableLinearProbing', () => {
	it('Should create an empty hash table linear probing without problems', () => {
		const hashTableLinearProbing = new HashTableLinearProbing();

		expect(hashTableLinearProbing.data).toEqual({});
		expect(hashTableLinearProbing.size).toBe(0);
	});

	it('Should create a filled hash table linear probing without problems', () => {
		const hashTableLinearProbing = new HashTableLinearProbing({
			first: 1,
			second: 2,
		});

		expect(hashTableLinearProbing.data).toEqual({
			36: new HashTableLinearProbingElement('second', 2),
			52: new HashTableLinearProbingElement('first', 1),
		});
		expect(hashTableLinearProbing.size).toBe(2);
	});

	describe('.put()', () => {
		it('Should insert a new element', () => {
			const hashTableLinearProbing = new HashTableLinearProbing({
				first: 1,
			});
			hashTableLinearProbing.put('second', 2);

			expect(hashTableLinearProbing.data).toEqual({
				36: new HashTableLinearProbingElement('second', 2),
				52: new HashTableLinearProbingElement('first', 1),
			});
			expect(hashTableLinearProbing.size).toBe(2);
		});

		it('Should return the inserted element', () => {
			const hashTableLinearProbing = new HashTableLinearProbing({
				first: 1,
			});
			const returned = hashTableLinearProbing.put('second', 2);

			expect(returned).toBe(2);
		});

		it('Should change nothing when the hash table linear probing is full', () => {
			const hashTableLinearProbing = new HashTableLinearProbing({
				first: 1,
				second: 2,
			}, {
				maxSize: 2,
			});
			hashTableLinearProbing.put('third', 3);

			expect(hashTableLinearProbing.data).toEqual({
				0: new HashTableLinearProbingElement('first', 1),
				1: new HashTableLinearProbingElement('second', 2),
			});
			expect(hashTableLinearProbing.size).toBe(2);
		});

		it('Should return null when the hash table linear probing is full', () => {
			const hashTableLinearProbing = new HashTableLinearProbing({
				first: 1,
				second: 2,
			}, {
				maxSize: 2,
			});
			const returned = hashTableLinearProbing.put('third', 3);

			expect(returned).toBeNull();
		});

		it('Should put the new element in the next available position in collision case', () => {
			const hashTableLinearProbing = new HashTableLinearProbing({
				first: 1,
			});
			hashTableLinearProbing.put('tsrif', -1);

			expect(hashTableLinearProbing.data).toEqual({
				52: new HashTableLinearProbingElement('first', 1),
				53: new HashTableLinearProbingElement('tsrif', -1),
			});
			expect(hashTableLinearProbing.size).toBe(2);
		});
	});

	describe('.get()', () => {
		it('Should return the value of the key', () => {
			const hashTableLinearProbing = new HashTableLinearProbing({
				first: 1,
				second: 2,
			});
			const returned = hashTableLinearProbing.get('second');

			expect(returned).toBe(2);
		});

		it('Should return the correct value in case of collisions', () => {
			const hashTableLinearProbing = new HashTableLinearProbing({
				first: 1,
				tsrif: -1,
			});
			const returned = hashTableLinearProbing.get('tsrif');

			expect(returned).toBe(-1);
		});

		it('Should return null when the key is not in the hash table linear probing', () => {
			const hashTableLinearProbing = new HashTableLinearProbing({
				first: 1,
				second: 2,
			});
			const returned = hashTableLinearProbing.get('third');

			expect(returned).toBeNull();
		});

		it('Should return null when the key is not in a full hash table linear probing', () => {
			const hashTableLinearProbing = new HashTableLinearProbing({
				first: 1,
				second: 2,
			}, {
				maxSize: 2,
			});
			const returned = hashTableLinearProbing.get('third');

			expect(returned).toBeNull();
		});

		it('Should return null for any key in empty hash table linear probing', () => {
			const hashTableLinearProbing = new HashTableLinearProbing();
			const returned = hashTableLinearProbing.get('first');

			expect(returned).toBeNull();
		});
	});

	describe('.remove()', () => {
		it('Should remove an element', () => {
			const hashTableLinearProbing = new HashTableLinearProbing({
				first: 1,
				second: 2,
			});
			hashTableLinearProbing.remove('second');

			expect(hashTableLinearProbing.data).toEqual({
				52: new HashTableLinearProbingElement('first', 1),
			});
			expect(hashTableLinearProbing.size).toBe(1);
		});

		it('Should return the removed value', () => {
			const hashTableLinearProbing = new HashTableLinearProbing({
				first: 1,
				second: 2,
			});
			const returned = hashTableLinearProbing.remove('second');

			expect(returned).toBe(2);
		});

		it('Should change nothing if the key is not in the hash table linear probing', () => {
			const hashTableLinearProbing = new HashTableLinearProbing({
				first: 1,
				second: 2,
			});
			hashTableLinearProbing.remove('third');

			expect(hashTableLinearProbing.data).toEqual({
				36: new HashTableLinearProbingElement('second', 2),
				52: new HashTableLinearProbingElement('first', 1),
			});
			expect(hashTableLinearProbing.size).toBe(2);
		});

		it('Should return null if the key is not in the hash table linear probing', () => {
			const hashTableLinearProbing = new HashTableLinearProbing({
				first: 1,
				second: 2,
			});
			const returned = hashTableLinearProbing.remove('third');

			expect(returned).toBeNull();
		});

		it('Should move all the subsequent elements that have the same hash code to the left', () => {
			const hashTableLinearProbing = new HashTableLinearProbing({
				first: 1,
				tsrif: -1,
				irstf: -2,
				srift: -3,
				firsth: -4,
			});
			hashTableLinearProbing.remove('tsrif');

			expect(hashTableLinearProbing.data).toEqual({
				52: new HashTableLinearProbingElement('first', 1),
				53: new HashTableLinearProbingElement('irstf', -2),
				54: new HashTableLinearProbingElement('srift', -3),
				56: new HashTableLinearProbingElement('firsth', -4),
			});
			expect(hashTableLinearProbing.size).toBe(4);
		});

		it('Should move all the subsequent elements that have the same hash code to the left when remove the first position', () => {
			const hashTableLinearProbing = new HashTableLinearProbing({
				first: 1,
				tsrif: 0,
				irstf: -1,
			}, {
				maxSize: 3,
			});
			hashTableLinearProbing.remove('first');

			expect(hashTableLinearProbing.data).toEqual({
				0: new HashTableLinearProbingElement('tsrif', 0),
				1: new HashTableLinearProbingElement('irstf', -1),
			});
			expect(hashTableLinearProbing.size).toBe(2);
		});

		it('Should move all the subsequent elements that have the same hash code to the left when remove a middle position', () => {
			const hashTableLinearProbing = new HashTableLinearProbing({
				third: 3,
				driht: -3,
				rihtd: 0,
			}, {
				maxSize: 3,
			});
			hashTableLinearProbing.remove('third');

			expect(hashTableLinearProbing.data).toEqual({
				0: new HashTableLinearProbingElement('rihtd', 0),
				2: new HashTableLinearProbingElement('driht', -3),
			});
			expect(hashTableLinearProbing.size).toBe(2);
		});
	});

	describe('Conversion to primitive', () => {
		it('Should return the elements separated by comma in string conversion', () => {
			const hashTableLinearProbing = new HashTableLinearProbing({
				first: 1,
				second: 2,
				third: 3,
			});
			const string = String(hashTableLinearProbing);

			expect(string).toBe('[ { second => 2 }, { third => 3 }, { first => 1 } ]');
		});

		it('Should return the size in number conversion', () => {
			const hashTableLinearProbing = new HashTableLinearProbing({
				first: 1,
				second: 2,
				third: 3,
			});
			const number = Number(hashTableLinearProbing);

			expect(number).toBe(3);
		});

		it('Should return true in default conversion', () => {
			const hashTableLinearProbing = new HashTableLinearProbing({
				first: 1,
				second: 2,
				third: 3,
			});
			const returned = hashTableLinearProbing[Symbol.toPrimitive]('default');

			expect(returned).toBe(true);
		});
	});
});
