import {describe, it, expect, jest} from '@jest/globals';
import faker from '@faker-js/faker';

import BinarySearchTree from './';

describe('BinarySearchTree', () => {
	it('Should create an empty bst without problems', () => {
		const bst = new BinarySearchTree();

		expect(bst.data).toEqual({
			left: null,
			value: null,
			right: null,
		});
		expect(bst.size).toBe(0);
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
		expect(bst.size).toBe(5);
	});

	it('Should allow us to customize the comparison function', () => {
		const bst = new BinarySearchTree<{ quantity: number }>({
			lessThanOrEqualTo: (value1: { quantity: number }, value2: { quantity: number }) => value1.quantity <= value2.quantity,
			inputs: [
				{
					quantity: 2,
				},
				{
					quantity: 1,
				},
				{
					quantity: 4,
				},
				{
					quantity: 3,
				},
			],
		});

		expect(bst.data).toEqual({
			left: {
				left: null,
				value: {
					quantity: 1,
				},
				right: null,
			},
			value: {
				quantity: 2,
			},
			right: {
				left: {
					left: null,
					value: {
						quantity: 3,
					},
					right: null,
				},
				value: {
					quantity: 4,
				},
				right: null,
			},
		});
		expect(bst.size).toBe(4);
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
			expect(bst.size).toBe(1);
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
			expect(bst.size).toBe(2);
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
			expect(bst.size).toBe(2);
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
			expect(bst.size).toBe(2);
		});

		it('Should return the inserted value', () => {
			const bst = new BinarySearchTree();
			const value = faker.datatype.number();
			const returned = bst.insert(value);

			expect(returned).toBe(value);
		});
	});

	describe('.walkInOrder()', () => {
		it('Should walk the tree in order', () => {
			const bst = new BinarySearchTree({
				inputs: [3, 8, 4, 2, 5, 9, 1, 6, 10, 7],
			});

			const calls: number[] = [];
			const callback = (value: number) => {
				calls.push(value);
			};

			bst.walkInOrder(callback);

			expect(calls).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
		});

		it('Should call the callback function with correct arguments', () => {
			const inputs = [3, 8, 4, 2, 5, 9, 1, 6, 10, 7];
			const bst = new BinarySearchTree({
				inputs,
			});
			const callback = jest.fn();
			bst.walkInOrder(callback);

			for (const value of inputs) {
				expect(callback).toBeCalledWith(value);
			}
		});
	});

	describe('.walkPreOrder()', () => {
		it('Should walk the tree pre order', () => {
			const bst = new BinarySearchTree({
				inputs: [3, 8, 4, 2, 5, 9, 1, 6, 10, 7],
			});

			const calls: number[] = [];
			const callback = (value: number) => {
				calls.push(value);
			};

			bst.walkPreOrder(callback);

			expect(calls).toEqual([3, 2, 1, 8, 4, 5, 6, 7, 9, 10]);
		});

		it('Should call the callback function with correct arguments', () => {
			const inputs = [3, 8, 4, 2, 5, 9, 1, 6, 10, 7];
			const bst = new BinarySearchTree({
				inputs,
			});
			const callback = jest.fn();
			bst.walkPreOrder(callback);

			for (const value of inputs) {
				expect(callback).toBeCalledWith(value);
			}
		});
	});

	describe('.walkPostOrder()', () => {
		it('Should walk the tree pre order', () => {
			const bst = new BinarySearchTree({
				inputs: [3, 8, 4, 2, 5, 9, 1, 6, 10, 7],
			});

			const calls: number[] = [];
			const callback = (value: number) => {
				calls.push(value);
			};

			bst.walkPostOrder(callback);

			expect(calls).toEqual([1, 2, 7, 6, 5, 4, 10, 9, 8, 3]);
		});

		it('Should call the callback function with correct arguments', () => {
			const inputs = [3, 8, 4, 2, 5, 9, 1, 6, 10, 7];
			const bst = new BinarySearchTree({
				inputs,
			});
			const callback = jest.fn();
			bst.walkPostOrder(callback);

			for (const value of inputs) {
				expect(callback).toBeCalledWith(value);
			}
		});
	});

	describe('.min', () => {
		it('Should return null when the bst in empty', () => {
			const bst = new BinarySearchTree();

			expect(bst.min).toBeNull();
		});

		it('Should return the minimum value of the bst', () => {
			const inputs = new Array(10).fill(undefined).map(faker.datatype.number);
			const bst = new BinarySearchTree({
				inputs,
			});

			expect(bst.min).toBe(Math.min(...inputs));
		});
	});

	describe('.max', () => {
		it('Should return null when the bst in empty', () => {
			const bst = new BinarySearchTree();

			expect(bst.max).toBeNull();
		});

		it('Should return the maximum value of the bst', () => {
			const inputs = new Array(10).fill(undefined).map(faker.datatype.number);
			const bst = new BinarySearchTree({
				inputs,
			});

			expect(bst.max).toBe(Math.max(...inputs));
		});
	});

	describe('.search()', () => {
		it('Should return true when the received value is in the bst', () => {
			const bst = new BinarySearchTree({
				inputs: [3, 2, 4, 1],
			});
			const returned = bst.search(2);

			expect(returned).toBe(true);
		});

		it('Should return false whe the received value is not in the bst', () => {
			const bst = new BinarySearchTree({
				inputs: [3, 2, 4, 1],
			});
			const returned = bst.search(5);

			expect(returned).toBe(false);
		});
	});

	describe('.remove()', () => {
		it('Should remove a node that is a leaf', () => {
			const bst = new BinarySearchTree({
				inputs: [4, 5, 2, 7, 6, 1],
			});
			bst.remove(6);

			expect(bst.data).toEqual({
				left: {
					left: {
						left: null,
						value: 1,
						right: null,
					},
					value: 2,
					right: null,
				},
				value: 4,
				right: {
					left: null,
					value: 5,
					right: {
						left: null,
						value: 7,
						right: null,
					},
				},
			});
			expect(bst.size).toBe(5);
		});

		it('Should remove a node that has a right child', () => {
			const bst = new BinarySearchTree({
				inputs: [4, 5, 2, 7, 6, 1],
			});
			bst.remove(5);

			expect(bst.data).toEqual({
				left: {
					left: {
						left: null,
						value: 1,
						right: null,
					},
					value: 2,
					right: null,
				},
				value: 4,
				right: {
					left: {
						left: null,
						value: 6,
						right: null,
					},
					value: 7,
					right: null,
				},
			});
			expect(bst.size).toBe(5);
		});

		it('Should remove a node that has a left child', () => {
			const bst = new BinarySearchTree({
				inputs: [4, 5, 2, 7, 6, 1],
			});
			bst.remove(2);

			expect(bst.data).toEqual({
				left: {
					left: null,
					right: null,
					value: 1,
				},
				value: 4,
				right: {
					left: null,
					value: 5,
					right: {
						left: {
							left: null,
							value: 6,
							right: null,
						},
						value: 7,
						right: null,
					},
				},
			});
			expect(bst.size).toBe(5);
		});

		it('Should remove a node thar has a left child and a right child', () => {
			const bst = new BinarySearchTree({
				inputs: [4, 5, 2, 7, 6, 1, 3, 2.5, 2.1, 3.5],
			});
			bst.remove(2);

			expect(bst.data).toEqual({
				left: {
					left: {
						left: null,
						value: 1,
						right: null,
					},
					value: 2.1,
					right: {
						left: {
							left: null,
							value: 2.5,
							right: null,
						},
						value: 3,
						right: {
							left: null,
							value: 3.5,
							right: null,
						},
					},
				},
				value: 4,
				right: {
					left: null,
					value: 5,
					right: {
						left: {
							left: null,
							value: 6,
							right: null,
						},
						value: 7,
						right: null,
					},
				},
			});
			expect(bst.size).toBe(9);
		});

		it('Should remove the root', () => {
			const bst = new BinarySearchTree({
				inputs: [4, 5, 2, 7, 6, 1],
			});
			bst.remove(4);

			expect(bst.data).toEqual({
				left: {
					left: {
						left: null,
						value: 1,
						right: null,
					},
					value: 2,
					right: null,
				},
				value: 5,
				right: {
					left: {
						left: null,
						value: 6,
						right: null,
					},
					value: 7,
					right: null,
				},
			});
			expect(bst.size).toBe(5);
		});
	});

	describe('Conversion to primitive', () => {
		it('Should return arrow separated values in string conversion', () => {
			const bst = new BinarySearchTree({
				inputs: [4, 2, 1, 3, 6, 5, 7],
			});
			const string = String(bst);

			expect(string).toBe('[[[null] <= (1) => [null]] <= (2) => [[null] <= (3) => [null]]] <= (4) => [[[null] <= (5) => [null]] <= (6) => [[null] <= (7) => [null]]]');
		});

		it('Should return the size in number conversion', () => {
			const bst = new BinarySearchTree({
				inputs: [4, 2, 1, 3, 6, 5, 7],
			});
			const number = Number(bst);

			expect(number).toBe(7);
		});

		it('Should return trun in default conversion', () => {
			const bst = new BinarySearchTree({
				inputs: [4, 2, 1, 3, 6, 5, 7],
			});
			const returned = bst[Symbol.toPrimitive]('default');

			expect(returned).toBe(true);
		});
	});
});
