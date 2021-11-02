import {describe, expect, it} from '@jest/globals';

import Array from './';

describe('Array', () => {
	it('Should create an empty array with no problems', () => {
		const array = new Array();

		expect(array.data).toEqual([]);
		expect(array.size).toBe(0);
	});

	it('Should create a filled array with no problems', () => {
		const array = new Array(1, 2, 3, 4, 5);

		expect(array.data).toEqual([1, 2, 3, 4, 5]);
		expect(array.size).toBe(5);
	});
});
