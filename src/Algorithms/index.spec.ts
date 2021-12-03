import {describe, it, expect} from '@jest/globals';

import Algorithms from './';

describe('Algorithms', () => {
	describe('.decimalToBinary()', () => {
		it('Should return the correct result', () => {
			const n = 10;
			const expected = '1010';

			const result = Algorithms.decimalToBinary(n);
			expect(result).toBe(expected);
		});
	});
});
