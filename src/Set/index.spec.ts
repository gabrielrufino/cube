import {describe, it, expect} from '@jest/globals';

import Set from './';

const cube = {Set};

describe('Set', () => {
	it('Should create an empty set without problems', () => {
		const set = new cube.Set();

		expect(set.size).toBe(0);
		expect(set.data).toEqual([]);
	});

	it('Should create an empty set without problems', () => {
		const set = new cube.Set(1, 2, 3, 4);

		expect(set.size).toBe(4);
		expect(set.data).toEqual(expect.arrayContaining([1, 2, 3, 4]));
	});
});
