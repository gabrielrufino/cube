import {describe, expect, it} from '@jest/globals';
import faker from 'faker';

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

	it('Should return the correct size of the array', () => {
		const size = faker.datatype.number(200);
		const params = [];

		for (let i = 0; i < size; i++) {
			params.push(faker.datatype.number());
		}

		const array = new Array(...params);

		expect(array.size).toBe(size);
	});

	it('Should insert a new element in the last position', () => {
		const array = new Array(1, 2, 3);
		array.insertInLastPosition(4);

		expect(array.data).toEqual([1, 2, 3, 4]);
	});

	it('Should insert a new element in the first position', () => {
		const array = new Array(2, 3, 4);
		array.insertInFirstPosition(1);

		expect(array.data).toEqual([1, 2, 3, 4]);
	});

	it('Should remove and return the last element of the array', () => {
		const array = new Array(1, 2, 3, 4);
		const element = array.removeFromLastPosition();

		expect(array.data).toEqual([1, 2, 3]);
		expect(element).toBe(4);
	});

	it('Should ruturn undefined when trying to remove the last element of an empty array', () => {
		const array = new Array();
		const element = array.removeFromLastPosition();

		expect(array.data).toEqual([]);
		expect(element).toBe(undefined);
	});

	it('Should remove and return the first element of the array', () => {
		const array = new Array(1, 2, 3, 4);
		const element = array.removeFromFirstPosition();

		expect(array.data).toEqual([2, 3, 4]);
		expect(element).toBe(1);
	});

	it('Should ruturn undefined when trying to remove the first element of an empty array', () => {
		const array = new Array();
		const element = array.removeFromFirstPosition();

		expect(array.data).toEqual([]);
		expect(element).toBe(undefined);
	});

	it('Should remove and return the element of an arbitrary position from array', () => {
		const array = new Array(1, 2, 3, 4);
		const element = array.removeFromPosition(2);

		expect(array.data).toEqual([1, 2, 4]);
		expect(element).toBe(3);
	});

	it('Should return return when trying to remove the element of an arbitrary position from an empty array', () => {
		const array = new Array();
		const element = array.removeFromPosition(faker.datatype.number());

		expect(array.data).toEqual([]);
		expect(element).toBe(undefined);
	});
});
