import {describe, it, expect} from '@jest/globals';
import faker from '@faker-js/faker';

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

			expect(string).toBe(`[[null] <= (${leftNumber}) => [null]] <= (${rootNumber}) => [[null] <= (${rightNumber}) => [null]]`);
		});

		it('Should return the number of nodes related to the main node, including the main node', () => {
			const node1 = new BinarySearchTreeNode(faker.datatype.number());
			node1.left = new BinarySearchTreeNode(faker.datatype.number());
			node1.right = new BinarySearchTreeNode(faker.datatype.number());
			const number1 = Number(node1);

			expect(number1).toBe(3);

			const node2 = new BinarySearchTreeNode(faker.datatype.number());
			node2.left = new BinarySearchTreeNode(faker.datatype.number());
			const number2 = Number(node2);

			expect(number2).toBe(2);

			const node3 = new BinarySearchTreeNode(faker.datatype.number());
			node3.left = new BinarySearchTreeNode(faker.datatype.number());
			const number3 = Number(node3);

			expect(number3).toBe(2);

			const node4 = new BinarySearchTreeNode(faker.datatype.number());
			const number4 = Number(node4);

			expect(number4).toBe(1);
		});

		it('Should return true in default conversion', () => {
			const node = new BinarySearchTreeNode(faker.datatype.number());
			const returned = node[Symbol.toPrimitive]('default');

			expect(returned).toBe(true);
		});
	});
});
