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
});
