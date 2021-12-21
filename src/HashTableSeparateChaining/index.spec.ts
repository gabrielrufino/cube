import {describe, it, expect} from '@jest/globals';

import HashTableSeparateChaining from './';
import LinkedList from '../LinkedList';

describe('HashTableSeparateChaining', () => {
	it('Should create an empty hash table separate chaining without problems', () => {
		const hashTableSeparateChaining = new HashTableSeparateChaining<number>();

		expect(hashTableSeparateChaining.data).toEqual({});
		expect(hashTableSeparateChaining.size).toBe(0);
	});

	it('Should create an filled hash table separate chaining without problems', () => {
		const hashTableSeparateChaining = new HashTableSeparateChaining<number>({
			first: 1,
			tsrif: -1,
			second: 2,
		});

		expect(hashTableSeparateChaining.data).toEqual({
			36: new LinkedList<number>(2),
			52: new LinkedList<number>(1, -1),
		});
		expect(hashTableSeparateChaining.size).toBe(2);
	});

	describe('.put()', () => {
		it('Should insert a new element in the hash table separate chaining', () => {
			const hashTableSeparateChaining = new HashTableSeparateChaining({
				first: 1,
			});
			hashTableSeparateChaining.put('second', 2);

			expect(hashTableSeparateChaining.data).toEqual({
				36: new LinkedList<number>(2),
				52: new LinkedList<number>(1),
			});
			expect(hashTableSeparateChaining.size).toBe(2);
		});

		it('Should insert the new element in an existent linked list on collisions', () => {
			const hashTableSeparateChaining = new HashTableSeparateChaining({
				first: 1,
				second: 2,
			});
			hashTableSeparateChaining.put('tsrif', -1);

			expect(hashTableSeparateChaining.data).toEqual({
				36: new LinkedList<number>(2),
				52: new LinkedList<number>(1, -1),
			});
			expect(hashTableSeparateChaining.size).toBe(2);
		});

		it('Should return the inserted element', () => {
			const hashTableSeparateChaining = new HashTableSeparateChaining();
			const returned = hashTableSeparateChaining.put('first', 1);

			expect(returned).toBe(1);
		});
	});

	describe('.get()', () => {
		it('Should get an element by key', () => {
			const hashTableSeparateChaining = new HashTableSeparateChaining({
				first: 1,
				second: 2,
			});
			const returned = hashTableSeparateChaining.get('first');

			expect(returned).toEqual(new LinkedList<number>(1));
		});

		it('Should return null when the key is not in the hash table separate chaining', () => {
			const hashTableSeparateChaining = new HashTableSeparateChaining({
				first: 1,
				second: 2,
			});
			const returned = hashTableSeparateChaining.get('third');

			expect(returned).toBeNull();
		});
	});

	describe('.remove()', () => {
		it('Should remove an existent key value pair', () => {
			const hashTableSeparateChaining = new HashTableSeparateChaining({
				first: 1,
				second: 2,
			});
			hashTableSeparateChaining.remove('first');

			expect(hashTableSeparateChaining.data).toEqual({
				36: new LinkedList(2),
			});
			expect(hashTableSeparateChaining.size).toBe(1);
		});

		it('Should change nothing if the key is not in the hash table separate chaining', () => {
			const hashTableSeparateChaining = new HashTableSeparateChaining({
				first: 1,
				second: 2,
			});
			hashTableSeparateChaining.remove('third');

			expect(hashTableSeparateChaining.data).toEqual({
				36: new LinkedList<number>(2),
				52: new LinkedList<number>(1),
			});
			expect(hashTableSeparateChaining.size).toBe(2);
		});

		it('Should return the removed linked list', () => {
			const hashTableSeparateChaining = new HashTableSeparateChaining({
				first: 1,
				second: 2,
			});
			const returned = hashTableSeparateChaining.remove('first');

			expect(returned).toEqual(new LinkedList(1));
		});

		it('Should return null when remove a non existent key', () => {
			const hashTableSeparateChaining = new HashTableSeparateChaining({
				first: 1,
				second: 2,
			});
			const returned = hashTableSeparateChaining.remove('third');

			expect(returned).toBeNull();
		});
	});

	describe('Conversion to primitive', () => {
		it('Should return separated by comma linked list in string conversion', () => {
			const hashTableSeparateChaining = new HashTableSeparateChaining({
				first: 1,
				tsrif: -1,
				second: 2,
			});
			const string = String(hashTableSeparateChaining);

			expect(string).toBe('[ [Head] 2, [Head] 1 => -1 ]');
		});

		it('Should return the size in number conversion', () => {
			const hashTableSeparateChaining = new HashTableSeparateChaining({
				first: 1,
				tsrif: -1,
				second: 2,
			});
			const string = Number(hashTableSeparateChaining);

			expect(string).toBe(2);
		});
	});
});
