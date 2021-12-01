import {describe, it, expect} from '@jest/globals';

import DoublyLinkedList from './';

describe('DoublyLinkedList', () => {
	it('Should create an empty doubly linked list with no problems', () => {
		const doublyLinkedList = new DoublyLinkedList();

		expect(doublyLinkedList.data).toEqual([]);
		expect(doublyLinkedList.size).toBe(0);
	});

	it('Should creat a filled doubly linked list with no problems', () => {
		const doublyLinkedList = new DoublyLinkedList(1, 2, 3, 4);

		expect(doublyLinkedList.data).toEqual([
			{
				previous: null,
				value: 1,
				next: 2,
			},
			{
				previous: 1,
				value: 2,
				next: 3,
			},
			{
				previous: 2,
				value: 3,
				next: 4,
			},
			{
				previous: 3,
				value: 4,
				next: null,
			},
		]);
		expect(doublyLinkedList.size).toBe(4);
	});

	describe('.push()', () => {
		it('Should push a new element in a filled doubly linked list', () => {
			const doublyLinkedList = new DoublyLinkedList(1, 2, 3, 4);
			doublyLinkedList.push(5);

			expect(doublyLinkedList.data).toEqual([
				{
					previous: null,
					value: 1,
					next: 2,
				},
				{
					previous: 1,
					value: 2,
					next: 3,
				},
				{
					previous: 2,
					value: 3,
					next: 4,
				},
				{
					previous: 3,
					value: 4,
					next: 5,
				},
				{
					previous: 4,
					value: 5,
					next: null,
				},
			]);
			expect(doublyLinkedList.size).toBe(5);
		});

		it('Should push a new element in an empty doubly linked list', () => {
			const doublyLinkedList = new DoublyLinkedList();
			doublyLinkedList.push(1);

			expect(doublyLinkedList.data).toEqual([
				{
					previous: null,
					value: 1,
					next: null,
				},
			]);
			expect(doublyLinkedList.size).toBe(1);
		});

		it('Should return the new element', () => {
			const doublyLinkedList = new DoublyLinkedList(1, 2, 3, 4);
			const returned = doublyLinkedList.push(5);

			expect(returned).toBe(5);
		});
	});

	describe('getFromPosition()', () => {
		it('Should return undefined when receive a position lower than zero', () => {
			const doublyLinkedList = new DoublyLinkedList(1, 2, 3, 4);
			const returned = doublyLinkedList.getFromPosition(-1);

			expect(returned).toBeUndefined();
		});

		it('Should return undefined when receive a position equals the size', () => {
			const doublyLinkedList = new DoublyLinkedList(1, 2, 3, 4);
			const returned = doublyLinkedList.getFromPosition(4);

			expect(returned).toBeUndefined();
		});

		it('Should return undefined when receive a position greater than the size', () => {
			const doublyLinkedList = new DoublyLinkedList(1, 2, 3, 4);
			const returned = doublyLinkedList.getFromPosition(5);

			expect(returned).toBeUndefined();
		});

		it('Should return the correct item when closest to the head', () => {
			const doublyLinkedList = new DoublyLinkedList(1, 2, 3, 4);
			const returned = doublyLinkedList.getFromPosition(1);

			expect(returned).toEqual({
				previous: 1,
				value: 2,
				next: 3,
			});
		});

		it('Should return the correct item when closest to the tail', () => {
			const doublyLinkedList = new DoublyLinkedList(1, 2, 3, 4);
			const returned = doublyLinkedList.getFromPosition(2);

			expect(returned).toEqual({
				previous: 2,
				value: 3,
				next: 4,
			});
		});
	});
});
