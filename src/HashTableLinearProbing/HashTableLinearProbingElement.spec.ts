import {describe, it, expect} from 'vitest';

import HashTableLinearProbingElement from './HashTableLinearProbingElement';

describe('HashTableLinearProbingElement', () => {
	it('Should create a hash table linear probing element without problems', () => {
		const hashTableLinearProbingElement = new HashTableLinearProbingElement('key', 10);

		expect(hashTableLinearProbingElement.key).toBe('key');
		expect(hashTableLinearProbingElement.value).toBe(10);
	});

	describe('Conversion to primitive', () => {
		it('Should return the key value pair separated by arrow in string conversion', () => {
			const hashTableLinearProbingElement = new HashTableLinearProbingElement('key', 'value');
			const string = String(hashTableLinearProbingElement);

			expect(string).toBe('{ key => value }');
		});

		it('Should return the number 2 in number conversion', () => {
			const hashTableLinearProbingElement = new HashTableLinearProbingElement('key', 'value');
			const number = Number(hashTableLinearProbingElement);

			expect(number).toBe(2);
		});
	});
});
