import {describe, it, expect} from '@jest/globals';
import faker from '@faker-js/faker';

import GraphNodeNotFoundError from './GraphNodeNotFoundError';

describe('GraphNodeNotFoundError', () => {
	it('Should instance the error', () => {
		const node = faker.datatype.string();
		const error = new GraphNodeNotFoundError(node);

		expect(error.name).toBe('GraphNodeNotFoundError');
		expect(error.message).toBe(`Node ${node} not found`);
	});
});
