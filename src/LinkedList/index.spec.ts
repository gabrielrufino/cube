import {describe, it, expect} from '@jest/globals';

import LinkedList from './';

describe('LinkedList', () => {
	it('Should create an empty linked list without problems', () => {
		const linkedList = new LinkedList();
		expect(linkedList).toBeTruthy();
	});

	it('Should create a filled linked list without problems', () => {
		const linkedList = new LinkedList(1, 2, 3, 4);
		expect(linkedList).toBeTruthy();
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
		});
	});
});
