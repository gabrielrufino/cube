import {describe, it, expect} from '@jest/globals';

import Dictionary from './';

describe('Dictionary', () => {
	it('Should create an empty dictionary without problems', () => {
		const dictionary = new Dictionary<number>();

		expect(dictionary.data).toEqual({});
		expect(dictionary.size).toBe(0);
	});

	it('SHould create a filled dictionary without problems', () => {
		const dictionary = new Dictionary<number>({
			first: 1,
			second: 2,
			third: 3,
			fourth: 4,
		});

		expect(dictionary.data).toEqual({
			first: 1,
			second: 2,
			third: 3,
			fourth: 4,
		});
		expect(dictionary.size).toBe(4);
	});

	describe('.set()', () => {
		it('Should set a new key with a value in the dictionary', () => {
			const dictionary = new Dictionary({
				first: 1,
			});
			dictionary.set('second', 2);

			expect(dictionary.data).toEqual({
				first: 1,
				second: 2,
			});
			expect(dictionary.size).toBe(2);
		});

		it('Should replace a key value pair when receive an already existent key', () => {
			const dictionary = new Dictionary({
				first: 1,
			});
			dictionary.set('first', 2);

			expect(dictionary.data).toEqual({
				first: 2,
			});
			expect(dictionary.size).toBe(1);
		});

		it('Should return the inserted key valur pair', () => {
			const dictionary = new Dictionary();
			const returned = dictionary.set('first', 1);

			expect(returned).toEqual(['first', 1]);
		});
	});

	describe('.remove()', () => {
		it('Should remove an existent key value pair', () => {
			const dictionary = new Dictionary({
				first: 1,
				second: 2,
				third: 3,
				fourth: 4,
			});
			dictionary.remove('third');

			expect(dictionary.data).toEqual({
				first: 1,
				second: 2,
				fourth: 4,
			});
			expect(dictionary.size).toBe(3);
		});

		it('Should change nothing when receive a non existent key', () => {
			const dictionary = new Dictionary({
				first: 1,
				second: 2,
				third: 3,
				fourth: 4,
			});
			dictionary.remove('fifth');

			expect(dictionary.data).toEqual({
				first: 1,
				second: 2,
				third: 3,
				fourth: 4,
			});
			expect(dictionary.size).toBe(4);
		});

		it('Should return the removed key value pair', () => {
			const dictionary = new Dictionary({
				first: 1,
				second: 2,
				third: 3,
				fourth: 4,
			});
			const returned = dictionary.remove('second');

			expect(returned).toEqual(['second', 2]);
		});

		it('Should return null when the dictionary has not the received key', () => {
			const dictionary = new Dictionary({
				first: 1,
				second: 2,
				third: 3,
				fourth: 4,
			});
			const returned = dictionary.remove('fifth');

			expect(returned).toBeNull();
		});
	});
});
