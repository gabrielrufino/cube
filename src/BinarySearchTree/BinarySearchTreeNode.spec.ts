import {describe, it, expect} from '@jest/globals';
import faker from 'faker';

import BinarySearchTreeNode from './BinarySearchTreeNode';

describe('BinarySearchTreeNode', () => {
	it('Should create a node without problems', () => {
		const number = faker.datatype.number();
		const binarySearchTreeNode = new BinarySearchTreeNode<number>(number);

		expect(binarySearchTreeNode.value).toBe(number);
		expect(binarySearchTreeNode.left).toBeNull();
		expect(binarySearchTreeNode.right).toBeNull();
	});

	describe('Conversion to primitive', () => {
		it('Should return the value poiting to left and right nodes in string conversion', () => {
			const rootNumber = faker.datatype.number();
			const leftNumber = faker.datatype.number();
			const rightNumber = faker.datatype.number();
			const node = new BinarySearchTreeNode(rootNumber);
			node.left = new BinarySearchTreeNode(leftNumber);
			node.right = new BinarySearchTreeNode(rightNumber);
			const string = String(node);

			expect(string).toBe(`[[null <= ${leftNumber} => null] <= ${rootNumber} => [null <= ${rightNumber} => null]]`);
		});
	});
});
