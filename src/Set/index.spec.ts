import {describe, it, expect} from '@jest/globals';

import Set from './';

const cube = {Set};

describe('Set', () => {
	it('Should create an empty set without problems', () => {
		const set = new cube.Set();

		expect(set.size).toBe(0);
		expect(set.data).toEqual([]);
	});

	it('Should create an empty set without problems', () => {
		const set = new cube.Set(1, 2, 3, 4);

		expect(set.size).toBe(4);
		expect(set.data).toEqual(expect.arrayContaining([1, 2, 3, 4]));
	});

	describe('Conversion to primitive', () => {
		it('Should return comma-separated elements in string conversion', () => {
			const set = new cube.Set(1, 2, 3, 4);
			const string = String(set);

			expect(string).toBe('{ 1, 2, 3, 4 }');
		});

		it('Should return the set size in number conversion', () => {
			const set = new cube.Set(1, 2, 3, 4);
			const number = Number(set);

			expect(number).toBe(4);
		});
	});

	describe('.has()', () => {
		it('Should return true when the set has the specified element', () => {
			const set = new cube.Set(1, 2, 3, 4);
			const returned = set.has(3);

			expect(returned).toBe(true);
		});

		it('Should return false when the set has not the specified element', () => {
			const set = new cube.Set(1, 2, 4);
			const returned = set.has(3);

			expect(returned).toBe(false);
		})
	});
});
