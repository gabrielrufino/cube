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

	describe('getFromPosition()', () => {
		it('Should get then element at a valid position', () => {
			const linkedList = new LinkedList(1, 2, 3, 4);
			const returned = linkedList.getFromPosition(2);

			expect(returned).toEqual({
				value: 3,
				next: 4,
			});
		});
	});
});
