import {describe, it, expect} from '@jest/globals';

import MaxHeap from './';

describe('MaxHeap', () => {
	it('Should create an empty max heap without problems', () => {
		const maxHeap = new MaxHeap();

		expect(maxHeap.data).toEqual([]);
		expect(maxHeap.size).toBe(0);
	});

	it('Should create a filled max heap without problems', () => {
		const maxHeap = new MaxHeap({
			inputs: [5, 2, 1, 9],
		});

		expect(maxHeap.data).toEqual([9, 5, 1, 2]);
		expect(maxHeap.size).toBe(4);
	});
});
