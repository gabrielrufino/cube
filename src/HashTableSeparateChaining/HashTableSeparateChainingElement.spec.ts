import {describe, it, expect} from '@jest/globals';

import HashTableSeparateChainingElement from './HashTableSeparateChainingElement';

describe('HashTableSeparateChaining', () => {
	it('Should create an empty hash table separate chaining without problems', () => {
		const hashTableSeparateChaining = new HashTableSeparateChainingElement<number>('first', 1);

		expect(hashTableSeparateChaining.key).toBe('first');
		expect(hashTableSeparateChaining.value).toBe(1);
	});

	describe('Conversion to primitive', () => {
		it('Should return separated by comma linked list in string conversion', () => {
			const hashTableSeparateChaining = new HashTableSeparateChainingElement('first', 1);
			const string = String(hashTableSeparateChaining);

			expect(string).toBe('{ first => 1}');
		});

		it('Should return the size in number conversion', () => {
			const hashTableSeparateChaining = new HashTableSeparateChainingElement('first', 1);
			const string = Number(hashTableSeparateChaining);

			expect(string).toBe(2);
		});

		it('Should return true in default conversion', () => {
			const hashTableSeparateChaining = new HashTableSeparateChainingElement('first', 1);
			const returned = hashTableSeparateChaining[Symbol.toPrimitive]('default');

			expect(returned).toBe(true);
		});
	});
});
