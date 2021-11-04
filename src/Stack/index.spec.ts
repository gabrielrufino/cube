import {describe, expect, it} from '@jest/globals';
import faker from 'faker';

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

	it('Should pop the top element from the stack', () => {
		const stack = new Stack(1, 2, 3, 4);
		const element = stack.pop();

		expect(stack.data).toEqual([1, 2, 3]);
		expect(element).toBe(4);
	});

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
