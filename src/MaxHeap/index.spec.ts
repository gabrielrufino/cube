import {describe, it, expect} from '@jest/globals';
import faker from 'faker';

import MaxHeap from './';

describe('MaxHeap', () => {
	it('Should create an empty max heap without problems', () => {
		const maxHeap = new MaxHeap();

		expect(maxHeap.data).toEqual([]);
		expect(maxHeap.size).toBe(0);
	});

	it('Should create a filled max heap without problems', () => {
		const maxHeap = new MaxHeap({
			inputs: [5, 2, 1, 9],
		});

		expect(maxHeap.data).toEqual([9, 5, 1, 2]);
		expect(maxHeap.size).toBe(4);
	});

	describe('.insert()', () => {
		it('Should insert new values in the heap', () => {
			const maxHeap = new MaxHeap();

			maxHeap.insert(5);
			expect(maxHeap.data).toEqual([5]);
			expect(maxHeap.size).toBe(1);

			maxHeap.insert(2);
			expect(maxHeap.data).toEqual([5, 2]);
			expect(maxHeap.size).toBe(2);

			maxHeap.insert(1);
			expect(maxHeap.data).toEqual([5, 2, 1]);
			expect(maxHeap.size).toBe(3);

			maxHeap.insert(9);
			expect(maxHeap.data).toEqual([9, 5, 1, 2]);
			expect(maxHeap.size).toBe(4);
		});

		it('Should return the inserted value', () => {
			const maxHeap = new MaxHeap();
			const value = faker.datatype.number();
			const returned = maxHeap.insert(value);

			expect(returned).toBe(value);
		});
	});
});
