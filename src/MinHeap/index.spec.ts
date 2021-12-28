import {describe, it, expect} from '@jest/globals';
import faker from 'faker';

import MinHeap from './';

describe('MinHeap', () => {
	it('Should create an empty min heap without problems', () => {
		const minHeap = new MinHeap();

		expect(minHeap.data).toEqual([]);
		expect(minHeap.size).toBe(0);
	});

	it('Should create a filled min heap without problems', () => {
		const minHeap = new MinHeap({
			inputs: [5, 2, 1, 9],
		});

		expect(minHeap.data).toEqual([1, 5, 2, 9]);
		expect(minHeap.size).toBe(4);
	});

	describe('.insert()', () => {
		it('Should insert new values in the heap', () => {
			const minHeap = new MinHeap();

			minHeap.insert(5);
			expect(minHeap.data).toEqual([5]);
			expect(minHeap.size).toBe(1);

			minHeap.insert(2);
			expect(minHeap.data).toEqual([2, 5]);
			expect(minHeap.size).toBe(2);

			minHeap.insert(1);
			expect(minHeap.data).toEqual([1, 5, 2]);
			expect(minHeap.size).toBe(3);

			minHeap.insert(9);
			expect(minHeap.data).toEqual([1, 5, 2, 9]);
			expect(minHeap.size).toBe(4);
		});

		it('Should return the inserted value', () => {
			const minHeap = new MinHeap();
			const value = faker.datatype.number();
			const returned = minHeap.insert(value);

			expect(returned).toBe(value);
		});
	});
});
