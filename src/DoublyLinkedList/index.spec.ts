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
});
