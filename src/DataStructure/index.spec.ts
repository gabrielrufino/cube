import {describe, expect, it} from '@jest/globals';

import DataStructure from './';

describe('DataStructure', () => {
	class Something<T = number> extends DataStructure<T> {
		constructor(...inputs: T[]) {
			super(inputs);
		}
	}

	it('Should create an empty Something with no problems', () => {
		const something = new Something();

		expect(something.data).toEqual([]);
		expect(something.size).toBe(0);
	});

	it('Should create a filled Something with no problems', () => {
		const something = new Something(1, 2, 3, 4);

		expect(something.data).toEqual([1, 2, 3, 4]);
		expect(something.size).toBe(4);
	});
});
