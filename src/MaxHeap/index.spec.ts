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

	describe('.isEmpty', () => {
		it('Should be true when the heap has no values', () => {
			const maxHeap = new MaxHeap();

			expect(maxHeap.isEmpty).toBe(true);
		});

		it('Should be false when the heap has at least one value', () => {
			const maxHeap = new MaxHeap({
				inputs: [faker.datatype.number()],
			});

			expect(maxHeap.isEmpty).toBe(false);
		});
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

	describe('.extract()', () => {
		it('Should extract the max value of the heap and adjust the heap after this', () => {
			const maxHeap = new MaxHeap({
				inputs: [9, 8, 7, 6, 5, 4, 3, 2, 1],
			});
			maxHeap.extract();

			expect(maxHeap.data).toEqual([8, 6, 7, 2, 5, 4, 3, 1]);
			expect(maxHeap.size).toBe(8);
		});

		it('Should return the extracted value', () => {
			const inputs = new Array(10).fill(undefined).map(faker.datatype.number);
			const maxHeap = new MaxHeap({inputs});
			const returned = maxHeap.extract();

			expect(returned).toBe(Math.max(...inputs));
		});

		it('Should change nothing if the heap is empty', () => {
			const maxHeap = new MaxHeap();
			maxHeap.extract();

			expect(maxHeap.data).toEqual([]);
			expect(maxHeap.size).toBe(0);
		});
	});
});
