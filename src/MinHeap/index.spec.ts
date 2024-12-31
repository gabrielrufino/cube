import {describe, it, expect} from 'vitest';
import {faker} from '@faker-js/faker';

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

	describe('.isEmpty', () => {
		it('Should be true when the heap has no values', () => {
			const minHeap = new MinHeap();

			expect(minHeap.isEmpty).toBe(true);
		});

		it('Should be false when the heap has at least one value', () => {
			const minHeap = new MinHeap({
				inputs: [faker.datatype.number()],
			});

			expect(minHeap.isEmpty).toBe(false);
		});
	});

	describe('.min', () => {
		it('Should be the min value when the heap is not empty', () => {
			const inputs = new Array(10).fill(undefined).map(faker.datatype.number);
			const minHeap = new MinHeap({
				inputs,
			});

			expect(minHeap.min).toBe(Math.min(...inputs));
		});

		it('Should be null when the heap is empty', () => {
			const minHeap = new MinHeap();

			expect(minHeap.min).toBeNull();
		});
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

	describe('.extract()', () => {
		it('Should extract the min value of the heap and adjust the heap after this', () => {
			const minHeap = new MinHeap({
				inputs: [1, 2, 3, 4, 5, 6, 7, 8, 9],
			});
			minHeap.extract();

			expect(minHeap.data).toEqual([2, 4, 3, 8, 5, 6, 7, 9]);
			expect(minHeap.size).toBe(8);
		});

		it('Should return the extracted value', () => {
			const inputs = new Array(10).fill(undefined).map(faker.datatype.number);
			const minHeap = new MinHeap({inputs});
			const returned = minHeap.extract();

			expect(returned).toBe(Math.min(...inputs));
		});

		it('Should change nothing if the heap is empty', () => {
			const minHeap = new MinHeap();
			minHeap.extract();

			expect(minHeap.data).toEqual([]);
			expect(minHeap.size).toBe(0);
		});

		it('Should return null when the heap is empty', () => {
			const minHeap = new MinHeap();
			const returned = minHeap.extract();

			expect(returned).toBeNull();
		});
	});

	describe('Heap Sort', () => {
		it('Should sort an array in ASC order', () => {
			const minHeap = new MinHeap({
				inputs: [
					7,
					1,
					10,
					4,
					8,
					6,
					2,
					3,
					5,
					9,
				],
			});

			const {size} = minHeap;
			const result = [];

			for (let i = 1; i <= size; i++) {
				result.push(minHeap.extract());
			}

			expect(result).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
		});
	});

	describe('Conversion to primitive', () => {
		it('Should return separated by comma values in string conversion', () => {
			const maxHeap = new MinHeap({
				inputs: [1, 2, 3, 4, 5],
			});
			const string = String(maxHeap);

			expect(string).toBe('1, 2, 3, 4, 5');
		});

		it('Should return the size in number conversion', () => {
			const maxHeap = new MinHeap({
				inputs: [1, 2, 3, 4, 5],
			});
			const number = Number(maxHeap);

			expect(number).toBe(5);
		});

		it('Should return true in default conversion', () => {
			const maxHeap = new MinHeap({
				inputs: [1, 2, 3, 4, 5],
			});
			const returned = maxHeap[Symbol.toPrimitive]('default');

			expect(returned).toBe(true);
		});
	});
});
