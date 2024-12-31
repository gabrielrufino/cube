import {describe, it, expect} from 'vitest';

import HashTableSeparateChaining from './';
import LinkedList from '../LinkedList';
import HashTableSeparateChainingElement from './HashTableSeparateChainingElement';

describe('HashTableSeparateChaining', () => {
	it('Should create an empty hash table separate chaining without problems', () => {
		const hashTableSeparateChaining = new HashTableSeparateChaining<number>();

		expect(hashTableSeparateChaining.data).toEqual({});
		expect(hashTableSeparateChaining.size).toBe(0);
		expect(hashTableSeparateChaining.maxSize).toBe(100);
	});

	it('Should create an filled hash table separate chaining without problems', () => {
		const hashTableSeparateChaining = new HashTableSeparateChaining<number>({
			first: 1,
			tsrif: -1,
			second: 2,
		});

		expect(hashTableSeparateChaining.data).toEqual({
			36: new LinkedList(
				new HashTableSeparateChainingElement('second', 2),
			),
			52: new LinkedList(
				new HashTableSeparateChainingElement('first', 1),
				new HashTableSeparateChainingElement('tsrif', -1),
			),
		});
		expect(hashTableSeparateChaining.size).toBe(2);
		expect(hashTableSeparateChaining.maxSize).toBe(100);
	});

	it('Should customize the size of the hash table separate chaining', () => {
		const hashTableSeparateChaining = new HashTableSeparateChaining<number>({}, {maxSize: 50});

		expect(hashTableSeparateChaining.maxSize).toBe(50);
	});

	describe('.put()', () => {
		it('Should insert a new element in the hash table separate chaining', () => {
			const hashTableSeparateChaining = new HashTableSeparateChaining({
				first: 1,
			});
			hashTableSeparateChaining.put('second', 2);

			expect(hashTableSeparateChaining.data).toEqual({
				36: new LinkedList(
					new HashTableSeparateChainingElement('second', 2),
				),
				52: new LinkedList(
					new HashTableSeparateChainingElement('first', 1),
				),
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
				36: new LinkedList(
					new HashTableSeparateChainingElement('second', 2),
				),
				52: new LinkedList(
					new HashTableSeparateChainingElement('first', 1),
					new HashTableSeparateChainingElement('tsrif', -1),
				),
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

			expect(returned).toEqual(new HashTableSeparateChainingElement('first', 1));
		});

		it('Should return the correct element in case of collision', () => {
			const hashTableSeparateChaining = new HashTableSeparateChaining({
				first: 1,
				tsrif: -1,
				second: 2,
			});
			const returned = hashTableSeparateChaining.get('tsrif');

			expect(returned).toEqual(new HashTableSeparateChainingElement('tsrif', -1));
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
				36: new LinkedList(new HashTableSeparateChainingElement('second', 2)),
			});
			expect(hashTableSeparateChaining.size).toBe(1);
		});

		it('Should remove the correct element in case of collision', () => {
			const hashTableSeparateChaining = new HashTableSeparateChaining({
				first: 1,
				tsrif: -1,
				second: 2,
			});
			hashTableSeparateChaining.remove('tsrif');

			expect(hashTableSeparateChaining.data).toEqual({
				36: new LinkedList(new HashTableSeparateChainingElement('second', 2)),
				52: new LinkedList(new HashTableSeparateChainingElement('first', 1)),
			});
			expect(hashTableSeparateChaining.size).toBe(2);
		});

		it('Should bla blabla', () => {
			const hashTableSeparateChaining = new HashTableSeparateChaining({
				first: 1,
			});
			hashTableSeparateChaining.remove('first');

			expect(hashTableSeparateChaining.data).toEqual({});
			expect(hashTableSeparateChaining.size).toBe(0);
		});

		it('Should change nothing if the key is not in the hash table separate chaining', () => {
			const hashTableSeparateChaining = new HashTableSeparateChaining({
				first: 1,
				second: 2,
			});
			hashTableSeparateChaining.remove('third');

			expect(hashTableSeparateChaining.data).toEqual({
				36: new LinkedList(new HashTableSeparateChainingElement('second', 2)),
				52: new LinkedList(new HashTableSeparateChainingElement('first', 1)),
			});
			expect(hashTableSeparateChaining.size).toBe(2);
		});

		it('Should return the removed linked list', () => {
			const hashTableSeparateChaining = new HashTableSeparateChaining({
				first: 1,
				second: 2,
			});
			const returned = hashTableSeparateChaining.remove('first');

			expect(returned).toEqual(new HashTableSeparateChainingElement('first', 1));
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

			expect(string).toBe('[ [Head] { second => 2}, [Head] { first => 1} => { tsrif => -1} ]');
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

		it('Should return true in default conversion', () => {
			const hashTableSeparateChaining = new HashTableSeparateChaining({
				first: 1,
				tsrif: -1,
				second: 2,
			});
			const returned = hashTableSeparateChaining[Symbol.toPrimitive]('default');

			expect(returned).toBe(true);
		});
	});
});
