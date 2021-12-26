import {describe, it, expect} from '@jest/globals';
import faker from 'faker';

import BinarySearchTree from './';

describe('BinarySearchTree', () => {
	it('Should create an empty bst without problems', () => {
		const bst = new BinarySearchTree();

		expect(bst.data).toEqual({
			left: null,
			value: null,
			right: null,
		});
	});

	it('Should create a filled bst without problems', () => {
		const bst = new BinarySearchTree<number>({
			inputs: [4, 2, 1, 3, 5],
		});

		expect(bst.data).toEqual({
			left: {
				left: {
					left: null,
					value: 1,
					right: null,
				},
				value: 2,
				right: {
					left: null,
					value: 3,
					right: null,
				},
			},
			value: 4,
			right: {
				left: null,
				value: 5,
				right: null,
			},
		});
	});

	it('Should allow us to customize the comparison function', () => {
		const bst = new BinarySearchTree<any[]>({
			lessThanOrEqualTo: (value1: any[], value2: any[]) => {
				if (value1.length <= value2.length) {
					return true;
				}

				return false;
			},
			inputs: [
				['one', 'two'],
				['one'],
				['one', 'two', 'three'],
			],
		});

		expect(bst.data).toEqual({
			left: {
				left: null,
				value: ['one'],
				right: null,
			},
			value: ['one', 'two'],
			right: {
				left: null,
				value: ['one', 'two', 'three'],
				right: null,
			},
		});
	});

	describe('.insert()', () => {
		it('Should insert a new value in the root when the root is null', () => {
			const bst = new BinarySearchTree();
			bst.insert(1);

			expect(bst.data).toEqual({
				left: null,
				value: 1,
				right: null,
			});
		});

		it('Should insert a new value in the left of the root when the new value is less than the root value', () => {
			const bst = new BinarySearchTree({
				inputs: [2],
			});
			bst.insert(1);

			expect(bst.data).toEqual({
				left: {
					left: null,
					value: 1,
					right: null,
				},
				value: 2,
				right: null,
			});
		});

		it('Should insert a new value in the left of the root when the new value is equal to the root value', () => {
			const bst = new BinarySearchTree({
				inputs: [1],
			});
			bst.insert(1);

			expect(bst.data).toEqual({
				left: {
					left: null,
					value: 1,
					right: null,
				},
				value: 1,
				right: null,
			});
		});

		it('Should insert a new value in the right of the root when the new value is greater than the root value', () => {
			const bst = new BinarySearchTree({
				inputs: [1],
			});
			bst.insert(2);

			expect(bst.data).toEqual({
				left: null,
				value: 1,
				right: {
					left: null,
					value: 2,
					right: null,
				},
			});
		});

		it('Should return the inserted value', () => {
			const bst = new BinarySearchTree();
			const value = faker.datatype.number();
			const returned = bst.insert(value);

			expect(returned).toBe(value);
		});
	});
});
