import { faker } from '@faker-js/faker'
import { describe, expect, it } from 'vitest'

import BinarySearchTreeNode from './BinarySearchTreeNode'

describe('binarySearchTreeNode', () => {
  it('should create a node without problems', () => {
    const number = faker.number.int()
    const binarySearchTreeNode = new BinarySearchTreeNode<number>(number)

    expect(binarySearchTreeNode.value).toBe(number)
    expect(binarySearchTreeNode.left).toBeNull()
    expect(binarySearchTreeNode.right).toBeNull()
  })

  describe('conversion to primitive', () => {
    it('should return the value poiting to left and right nodes in string conversion', () => {
      const rootNumber = faker.number.int()
      const leftNumber = faker.number.int()
      const rightNumber = faker.number.int()
      const node = new BinarySearchTreeNode(rootNumber)
      node.left = new BinarySearchTreeNode(leftNumber)
      node.right = new BinarySearchTreeNode(rightNumber)
      const string = String(node)

      expect(string).toBe(`[[null] <= (${leftNumber}) => [null]] <= (${rootNumber}) => [[null] <= (${rightNumber}) => [null]]`)
    })

    it('should return the number of nodes related to the main node, including the main node', () => {
      const node1 = new BinarySearchTreeNode(faker.number.int())
      node1.left = new BinarySearchTreeNode(faker.number.int())
      node1.right = new BinarySearchTreeNode(faker.number.int())
      const number1 = Number(node1)

      expect(number1).toBe(3)

      const node2 = new BinarySearchTreeNode(faker.number.int())
      node2.left = new BinarySearchTreeNode(faker.number.int())
      const number2 = Number(node2)

      expect(number2).toBe(2)

      const node3 = new BinarySearchTreeNode(faker.number.int())
      node3.left = new BinarySearchTreeNode(faker.number.int())
      const number3 = Number(node3)

      expect(number3).toBe(2)

      const node4 = new BinarySearchTreeNode(faker.number.int())
      const number4 = Number(node4)

      expect(number4).toBe(1)
    })

    it('should return true in default conversion', () => {
      const node = new BinarySearchTreeNode(faker.number.int())
      const returned = node[Symbol.toPrimitive]('default')

      expect(returned).toBe(true)
    })
  })
})
