import {describe, it, expect} from '@jest/globals';

import Queue from './';

describe('Queue', () => {
	it('Should create an empty queue without problems', () => {
		const queue = new Queue();

		expect(queue.data).toEqual([]);
		expect(queue.size).toBe(0);
	});

	it('Should create a filled queue without problems', () => {
		const queue = new Queue(1, 2, 3, 4);

		expect(queue.data).toEqual([1, 2, 3, 4]);
		expect(queue.size).toBe(4);
	});

	describe('.enqueue()', () => {
		it('Should enqueue a new element', () => {
			const queue = new Queue(1, 2, 3);
			queue.enqueue(4);

			expect(queue.data).toEqual([1, 2, 3, 4]);
		});

		it('Should return the enqueued element', () => {
			const queue = new Queue(1, 2, 3);
			const returned = queue.enqueue(4);

			expect(returned).toBe(4);
		});
	});

	describe('.dequeue()', () => {
		it('Should dequeue the first element', () => {
			const queue = new Queue(1, 2, 3, 4);
			queue.dequeue();

			expect(queue.data).toEqual([2, 3, 4]);
		});

		it('Should return the dequeued element', () => {
			const queue = new Queue(1, 2, 3, 4);
			const returned = queue.dequeue();

			expect(returned).toBe(1);
		});
	});

	describe('.peek()', () => {
		it('Should return the first element', () => {
			const queue = new Queue(1, 2, 3, 4);
			const returned = queue.peek();

			expect(returned).toEqual(1);
		});

		it('Should not dequeue the first element', () => {
			const queue = new Queue(1, 2, 3, 4);
			queue.peek();

			expect(queue.data).toEqual([1, 2, 3, 4]);
		});
	});

	describe('.clear()', () => {
		it('Should clear a queue', () => {
			const queue = new Queue(1, 2, 3, 4);
			queue.clear();

			expect(queue.data).toEqual([]);
		});
	});
});
