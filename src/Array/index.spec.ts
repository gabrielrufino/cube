import {describe, expect, it} from '@jest/globals';

import Array from './';

describe('Array', () => {
	it('blabla', () => {
		// eslint-disable-next-line no-array-constructor
		const a = new Array(1);

		console.log(a.data);

		expect(1).toBe(1);
	});
});
