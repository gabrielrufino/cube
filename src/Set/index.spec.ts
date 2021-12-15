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
		expect(set.data.sort()).toEqual([1, 2, 3, 4].sort());
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
		});
	});

	describe('.add()', () => {
		it('Should add a new element in the set', () => {
			const set = new cube.Set(1, 2, 3);
			set.add(4);

			expect(set.size).toBe(4);
			expect(set.data.sort()).toEqual([1, 2, 3, 4].sort());
		});

		it('Should return the inserted element when the element is not in the set', () => {
			const set = new cube.Set(1, 2, 3);
			const returned = set.add(4);

			expect(returned).toEqual(4);
		});

		it('Should return null when the element is in the set', () => {
			const set = new cube.Set(1, 2, 3, 4);
			const returned = set.add(4);

			expect(returned).toBeNull();
		});
	});

	describe('.delete()', () => {
		it('Should remove an element in the set', () => {
			const set = new cube.Set(1, 2, 3, 4);
			set.delete(3);

			expect(set.size).toBe(3);
			expect(set.data.sort()).toEqual([1, 2, 4].sort());
		});

		it('Should not change the set if the element is not in the set', () => {
			const set = new cube.Set(1, 2, 3, 4);
			set.delete(5);

			expect(set.size).toBe(4);
			expect(set.data.sort()).toEqual([1, 2, 3, 4].sort());
		});

		it('Should return the element if the element was in the set', () => {
			const set = new cube.Set(1, 2, 3, 4);
			const returned = set.delete(1);

			expect(returned).toBe(1);
		});

		it('Should return null if the element was not in the set', () => {
			const set = new cube.Set(1, 2, 3, 4);
			const returned = set.delete(5);

			expect(returned).toBeNull();
		});
	});

	describe('.clear()', () => {
		it('Should empty the set', () => {
			const set = new cube.Set(1, 2, 3, 4);
			set.clear();

			expect(set.size).toBe(0);
			expect(set.data).toEqual([]);
		});

		it('Should return the elements', () => {
			const set = new cube.Set(1, 2, 3, 4);
			const returned = set.clear();

			expect(returned.sort()).toEqual([1, 2, 3, 4].sort());
		});
	});

	describe('.union()', () => {
		it('Should return the result of the union between the current set and the received set', () => {
			const set1 = new cube.Set(1, 2, 3, 4);
			const set2 = new cube.Set(3, 4, 5, 6);
			const union = set1.union(set2);

			expect(union.size).toBe(6);
			expect(union.data.sort()).toEqual([1, 2, 3, 4, 5, 6].sort());
		});
	});

	describe('.intersection()', () => {
		it('Should return the result of the intersection between the current set and the received set', () => {
			const set1 = new cube.Set(1, 2, 3, 4);
			const set2 = new cube.Set(3, 4, 5, 6);
			const intersection = set1.intersection(set2);

			expect(intersection.size).toBe(2);
			expect(intersection.data.sort()).toEqual([3, 4].sort());
		});
	});

	describe('.difference()', () => {
		it('Should return the result of the difference between the current set and the received set', () => {
			const set1 = new cube.Set(1, 2, 3, 4);
			const set2 = new cube.Set(3, 4, 5, 6);
			const difference = set1.difference(set2);

			expect(difference.size).toBe(2);
			expect(difference.data.sort()).toEqual([1, 2].sort());
		});
	});

	describe('isSubsetOf()', () => {
		it('Should return true when the current set is subset of the received set', () => {
			const set1 = new cube.Set(1, 4);
			const set2 = new cube.Set(1, 2, 3, 4);
			const isSubset = set1.isSubsetOf(set2);

			expect(isSubset).toBe(true);
		});

		it('Should return false whe the current set is not subset of the received set', () => {
			const set1 = new cube.Set(4, 5);
			const set2 = new cube.Set(1, 2, 3, 4);
			const isSubset = set1.isSubsetOf(set2);

			expect(isSubset).toBe(false);
		});
	});

	describe('Set.union()', () => {
		it('Should return an union set between two others', () => {
			const set1 = new cube.Set(1, 2, 3, 4);
			const set2 = new cube.Set(3, 4, 5, 6);
			const union = cube.Set.union(set1, set2);

			expect(union.size).toBe(6);
			expect(union.data.sort()).toEqual([1, 2, 3, 4, 5, 6].sort());
		});
	});

	describe('Set.intersection()', () => {
		it('Should return an intersection set between two others', () => {
			const set1 = new cube.Set(1, 2, 3, 4);
			const set2 = new cube.Set(3, 4, 5, 6);
			const intersection = cube.Set.intersection(set1, set2);

			expect(intersection.size).toBe(2);
			expect(intersection.data.sort()).toEqual([3, 4].sort());
		});
	});

	describe('Set.difference()', () => {
		it('Should return an difference set between two others', () => {
			const set1 = new cube.Set(1, 2, 3, 4);
			const set2 = new cube.Set(3, 4, 5, 6);
			const difference = cube.Set.difference(set1, set2);

			expect(difference.size).toBe(2);
			expect(difference.data.sort()).toEqual([1, 2].sort());
		});
	});

	describe('Set.isSubset()', () => {
		it('Should return true when the first argument is a subset of the second argument', () => {
			const set1 = new cube.Set(1, 4);
			const set2 = new cube.Set(1, 2, 3, 4);
			const isSubset = cube.Set.isSubset(set1, set2);

			expect(isSubset).toBe(true);
		});

		it('Should return false when the first argument is not a subset of the second argument', () => {
			const set1 = new cube.Set(4, 5);
			const set2 = new cube.Set(1, 2, 3, 4);
			const isSubset = cube.Set.isSubset(set1, set2);

			expect(isSubset).toBe(false);
		});
	});
});
