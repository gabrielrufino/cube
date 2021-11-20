import {describe, it, expect} from '@jest/globals';

import LinkedList from './';

describe('LinkedList', () => {
	it('Should create an empty linked list without problems', () => {
		const linkedList = new LinkedList();

		expect(linkedList.data).toEqual([]);
		expect(linkedList.size).toBe(0);
	});

	it('Should create a filled linked list without problems', () => {
		const linkedList = new LinkedList(1, 2, 3, 4);

		expect(linkedList.data).toEqual([
			{
				value: 1,
				next: 2,
			},
			{
				value: 2,
				next: 3,
			},
			{
				value: 3,
				next: 4,
			},
			{
				value: 4,
				next: null,
			},
		]);
		expect(linkedList.size).toBe(4);
	});

	describe('.push()', () => {
		it('Should push a new element', () => {
			const linkedList = new LinkedList();

			linkedList.push(1);
			linkedList.push(2);
			linkedList.push(3);
			linkedList.push(4);

			expect(linkedList.data).toEqual([
				{
					value: 1,
					next: 2,
				},
				{
					value: 2,
					next: 3,
				},
				{
					value: 3,
					next: 4,
				},
				{
					value: 4,
					next: null,
				},
			]);
			expect(linkedList.size).toBe(4);
		});

		it('Should return the pushed element', () => {
			const linkedList = new LinkedList();
			const returned = linkedList.push(1);

			expect(returned).toBe(1);
		});

		describe('.remove()', () => {});

		describe('.removeFromPosition()', () => {
			it('Should return undefined when given a negative position', () => {
				const linkedList = new LinkedList(1, 2, 3, 4);
				const returned = linkedList.removeFromPosition(-1);

				expect(returned).toBeUndefined();
			});

			it('Should return undefined when given a position equal size', () => {
				const linkedList = new LinkedList(1, 2, 3, 4);
				const returned = linkedList.removeFromPosition(linkedList.size);

				expect(returned).toBeUndefined();
			});

			it('Should return undefined when given a position larger than size', () => {
				const linkedList = new LinkedList(1, 2, 3, 4);
				const returned = linkedList.removeFromPosition(linkedList.size + 1);

				expect(returned).toBeUndefined();
			});

			it('Should remove item from the head', () => {
				const linkedList = new LinkedList(1, 2, 3, 4);
				linkedList.removeFromPosition(0);

				expect(linkedList.data).toEqual([
					{
						value: 2,
						next: 3,
					},
					{
						value: 3,
						next: 4,
					},
					{
						value: 4,
						next: null,
					},
				]);
			});

			it('Should remove item from the middle of the linked list', () => {
				const linkedList = new LinkedList(1, 2, 3, 4);
				linkedList.removeFromPosition(2);

				expect(linkedList.data).toEqual([
					{
						value: 1,
						next: 2,
					},
					{
						value: 2,
						next: 4,
					},
					{
						value: 4,
						next: null,
					},
				]);
			});

			it('Should remove item from the last position of the linked list', () => {
				const linkedList = new LinkedList(1, 2, 3, 4);
				linkedList.removeFromPosition(linkedList.size - 1);

				expect(linkedList.data).toEqual([
					{
						value: 1,
						next: 2,
					},
					{
						value: 2,
						next: 3,
					},
					{
						value: 3,
						next: null,
					},
				]);
			});
		});
	});

	describe('.getFromPosition()', () => {
		it('Should get then element at a valid position', () => {
			const linkedList = new LinkedList(1, 2, 3, 4);
			const returned = linkedList.getFromPosition(2);

			expect(returned).toEqual({
				value: 3,
				next: 4,
			});
		});
	});

	describe('insertInPosition()', () => {
		it('Should return undefined when receive a negative position', () => {
			const linkedList = new LinkedList(1, 2, 3, 4);
			const returned = linkedList.insertInPosition(5, -1);

			expect(returned).toBeUndefined();
		});

		it('Should return undefined when receive a position larger than the size', () => {
			const linkedList = new LinkedList(1, 2, 3, 4);
			const returned = linkedList.insertInPosition(5, 10);

			expect(returned).toBeUndefined();
		});

		it('Should insert an element in the head when receive position 0', () => {
			const linkedList = new LinkedList(1);
			linkedList.insertInPosition(0, 0);

			expect(linkedList.data).toEqual([
				{
					value: 0,
					next: 1,
				},
				{
					value: 1,
					next: null,
				},
			]);
		});

		it('Should insert an element in the middle of the linked list', () => {
			const linkedList = new LinkedList(1, 3);
			linkedList.insertInPosition(2, 1);

			expect(linkedList.data).toEqual([
				{
					value: 1,
					next: 2,
				},
				{
					value: 2,
					next: 3,
				},
				{
					value: 3,
					next: null,
				},
			]);
		});

		it('Should insert an element in the penultimate position', () => {
			const linkedList = new LinkedList(1, 2, 4);
			linkedList.insertInPosition(3, linkedList.size - 1);

			expect(linkedList.data).toEqual([
				{
					value: 1,
					next: 2,
				},
				{
					value: 2,
					next: 3,
				},
				{
					value: 3,
					next: 4,
				},
				{
					value: 4,
					next: null,
				},
			]);
		});

		it('Should insert an element in the end of the linked list, just like a push', () => {
			const linkedList = new LinkedList(1, 2);
			linkedList.insertInPosition(3, linkedList.size);

			expect(linkedList.data).toEqual([
				{
					value: 1,
					next: 2,
				},
				{
					value: 2,
					next: 3,
				},
				{
					value: 3,
					next: null,
				},
			]);
		});

		it('Should increase the size by one', () => {
			const linkedList = new LinkedList(1, 2, 3, 4);
			const {size} = linkedList;
			linkedList.insertInPosition(5, linkedList.size);

			expect(linkedList.size).toBe(size + 1);
		});
	});
});
