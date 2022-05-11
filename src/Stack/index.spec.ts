import {describe, expect, it} from '@jest/globals';
import faker from '@faker-js/faker';

import Stack from './';

describe('Stack', () => {
	it('Should create an empty stack with no problems', () => {
		const stack = new Stack();

		expect(stack.data).toEqual([]);
		expect(stack.size).toBe(0);
	});

	it('Should create a filled stack with no problems', () => {
		const stack = new Stack(1, 2, 3, 4, 5);

		expect(stack.data).toEqual([1, 2, 3, 4, 5]);
		expect(stack.size).toBe(5);
	});

	describe('.push()', () => {
		it('Should return the correct size of the stack', () => {
			const size = faker.datatype.number(200);
			const params = [];

			for (let i = 0; i < size; i++) {
				params.push(faker.datatype.number());
			}

			const stack = new Stack(...params);

			expect(stack.size).toBe(size);
		});

		it('Should push a new element in the stack top', () => {
			const stack = new Stack(1, 2, 3);
			stack.push(4);

			expect(stack.data).toEqual([1, 2, 3, 4]);
		});
	});

	describe('.pop()', () => {
		it('Should pop the top element from the stack', () => {
			const stack = new Stack(1, 2, 3, 4);
			const element = stack.pop();

			expect(stack.data).toEqual([1, 2, 3]);
			expect(element).toBe(4);
		});
	});

	describe('.peek()', () => {
		it('Should peek the top element of the stack', () => {
			const stack = new Stack(1, 2, 3, 4);
			const element = stack.peek();

			expect(element).toBe(4);
			expect(stack.data).toEqual([1, 2, 3, 4]);
		});

		it('Should peek undefined when the stack has no elements', () => {
			const stack = new Stack();
			const element = stack.peek();

			expect(element).toBe(undefined);
		});
	});

	describe('.clear()', () => {
		it('Should clear a stack', () => {
			const stack = new Stack(1, 2, 3, 4);
			stack.clear();

			expect(stack.data).toEqual([]);
		});
	});

	describe('.isEmpty', () => {
		it('Should return true when the stack has no elements', () => {
			const stack = new Stack();

			expect(stack.isEmpty).toBe(true);
		});

		it('Should return false when the stack at least one element', () => {
			const stack = new Stack(1);

			expect(stack.isEmpty).toBe(false);
		});
	});

	describe('Conversion to primitive', () => {
		it('Should return comma-separated elements in string conversion', () => {
			const stack = new Stack(1, 2, 3, 4);
			const string = String(stack);

			expect(string).toBe('1, 2, 3, 4 [Top]');
		});

		it('Should return the stack size in number conversion', () => {
			const stack = new Stack(1, 2, 3, 4);
			const number = Number(stack);

			expect(number).toBe(4);
		});

		it('Should return true in default conversion', () => {
			const stack = new Stack(1, 2, 3, 4);
			const returned = stack[Symbol.toPrimitive]('default');

			expect(returned).toBe(true);
		});
	});
});
