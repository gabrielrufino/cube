import { faker } from '@faker-js/faker'
import { describe, expect, it, vi } from 'vitest'

import MaxHeap from './'

describe(MaxHeap.name, () => {
  it('should create an empty max heap without problems', () => {
    const maxHeap = new MaxHeap()

    expect(maxHeap.data).toEqual([])
    expect(maxHeap.size).toBe(0)
  })

  it('should create a filled max heap without problems', () => {
    const maxHeap = new MaxHeap({
      inputs: [5, 2, 1, 9],
    })

    expect(maxHeap.data).toEqual([9, 5, 1, 2])
    expect(maxHeap.size).toBe(4)
  })

  describe('.isEmpty', () => {
    it('should be true when the heap has no values', () => {
      const maxHeap = new MaxHeap()

      expect(maxHeap.isEmpty).toBe(true)
    })

    it('should be false when the heap has at least one value', () => {
      const maxHeap = new MaxHeap({
        inputs: [faker.number.int()],
      })

      expect(maxHeap.isEmpty).toBe(false)
    })
  })

  describe('.max', () => {
    it('should be the min value when the heap is not empty', () => {
      const inputs = Array.from<number>({ length: 10 }).map(faker.number.int)
      const maxHeap = new MaxHeap({
        inputs,
      })

      expect(maxHeap.max).toBe(Math.max(...inputs))
    })

    it('should be null when the heap is empty', () => {
      const maxHeap = new MaxHeap()

      expect(maxHeap.max).toBeNull()
    })
  })

  describe('.insert()', () => {
    it('should insert new values in the heap', () => {
      const maxHeap = new MaxHeap()

      maxHeap.insert(5)
      expect(maxHeap.data).toEqual([5])
      expect(maxHeap.size).toBe(1)

      maxHeap.insert(2)
      expect(maxHeap.data).toEqual([5, 2])
      expect(maxHeap.size).toBe(2)

      maxHeap.insert(1)
      expect(maxHeap.data).toEqual([5, 2, 1])
      expect(maxHeap.size).toBe(3)

      maxHeap.insert(9)
      expect(maxHeap.data).toEqual([9, 5, 1, 2])
      expect(maxHeap.size).toBe(4)
    })

    it('should return the inserted value', () => {
      const maxHeap = new MaxHeap()
      const value = faker.number.int()
      const returned = maxHeap.insert(value)

      expect(returned).toBe(value)
    })
  })

  describe('.extract()', () => {
    it('should extract the max value of the heap and adjust the heap after this', () => {
      const maxHeap = new MaxHeap({
        inputs: [9, 8, 7, 6, 5, 4, 3, 2, 1],
      })
      maxHeap.extract()

      expect(maxHeap.data).toEqual([8, 6, 7, 2, 5, 4, 3, 1])
      expect(maxHeap.size).toBe(8)
    })

    it('should return the extracted value', () => {
      const inputs = Array.from<number>({ length: 10 }).map(faker.number.int)
      const maxHeap = new MaxHeap({ inputs })
      const returned = maxHeap.extract()

      expect(returned).toBe(Math.max(...inputs))
    })

    it('should change nothing if the heap is empty', () => {
      const maxHeap = new MaxHeap()
      maxHeap.extract()

      expect(maxHeap.data).toEqual([])
      expect(maxHeap.size).toBe(0)
    })

    it('should return null when the heap is empty', () => {
      const maxHeap = new MaxHeap()
      const returned = maxHeap.extract()

      expect(returned).toBeNull()
    })

    it('should correctly extract the only element and become empty', () => {
      const maxHeap = new MaxHeap({ inputs: [10] })
      expect(maxHeap.extract()).toBe(10)
      expect(maxHeap.isEmpty).toBe(true)
    })

    it('should handle many extracts correctly', () => {
      const maxHeap = new MaxHeap({ inputs: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] })
      const result = []
      while (!maxHeap.isEmpty) {
        result.push(maxHeap.extract())
      }
      expect(result).toEqual([10, 9, 8, 7, 6, 5, 4, 3, 2, 1])
    })
  })

  describe('.insert() with duplicates', () => {
    it('should handle duplicate values correctly', () => {
      const maxHeap = new MaxHeap({ inputs: [5, 5, 5] })
      expect(maxHeap.size).toBe(3)
      expect(maxHeap.data).toEqual([5, 5, 5])
      expect(maxHeap.extract()).toBe(5)
      expect(maxHeap.size).toBe(2)
    })

    it('should swap equal values during sift up to kill equality mutant', () => {
      const a = new Number(10)
      const b = new Number(10)
      const maxHeap = new MaxHeap<any>({
        inputs: [a],
      })
      maxHeap.insert(b)
      expect(maxHeap.data[0]).toBe(b)
    })

    it('should swap equal values during sift down to kill equality mutant', () => {
      const x = new Number(20)
      const y = new Number(10)
      const z = new Number(10)
      const heap = new MaxHeap<any>({
        inputs: [x, y, z],
      })
      // [x, y, z] -> extract x -> [z, y]
      // z is root (10), y is child (10).
      // siftDown(0): child 10 >= root 10? Yes, swap.
      heap.extract()
      expect(heap.data[0]).toBe(y)
    })
  })

  describe('siftDown boundary', () => {
    it('should not sift down if children are out of bounds', () => {
      const maxHeap = new MaxHeap({ inputs: [10, 5] })
      // [10, 5] -> extract 10 -> [5]
      expect(maxHeap.extract()).toBe(10)
      expect(maxHeap.data).toEqual([5])
    })

    it('should not access out of bounds index during sift down', () => {
      const spy = vi.fn((a: number, b: number) => a >= b)
      const maxHeap = new MaxHeap<number>({
        greaterThanOrEqualTo: spy,
        inputs: [10, 5],
      })
      spy.mockClear()
      maxHeap.extract()
      expect(spy).not.toHaveBeenCalled()
    })

    it('should check all children during sift down', () => {
      const maxHeap = new MaxHeap({ inputs: [60, 50, 40, 30, 20, 15, 10] })
      expect(maxHeap.extract()).toBe(60)
      // After extract, last element 10 moves to root.
      // 10 should sift down.
      expect(maxHeap.data[0]).toBe(50)
    })

    it('should compare with right child correctly even if left child is greater', () => {
      // Root is 10, left is 20, right is 30.
      // It should swap with 30 if we follow some logic, but usually we swap with the largest child.
      const maxHeap = new MaxHeap({ inputs: [10, 20, 30] })
      expect(maxHeap.data[0]).toBe(30)
    })
  })

  describe('heap Sort', () => {
    it('should sort an array in DESC order', () => {
      const maxHeap = new MaxHeap({
        inputs: [
          7,
          1,
          10,
          4,
          8,
          6,
          2,
          3,
          5,
          9,
        ],
      })

      const { size } = maxHeap
      const result: number[] = []

      for (let i = 1; i <= size; i++) {
        result.push(maxHeap.extract() as number)
      }

      expect(result).toEqual([10, 9, 8, 7, 6, 5, 4, 3, 2, 1])
    })
  })

  describe('conversion to primitive', () => {
    it('should return separated by comma values in string conversion', () => {
      const maxHeap = new MaxHeap({
        inputs: [1, 2, 3, 4, 5],
      })
      const string = String(maxHeap)

      expect(string).toBe('5, 4, 2, 1, 3')
    })

    it('should return the size in number conversion', () => {
      const maxHeap = new MaxHeap({
        inputs: [1, 2, 3, 4, 5],
      })
      const number = Number(maxHeap)

      expect(number).toBe(5)
    })

    it('should return true in default conversion', () => {
      const maxHeap = new MaxHeap({
        inputs: [1, 2, 3, 4, 5],
      })
      const returned = maxHeap[Symbol.toPrimitive]('default')

      expect(returned).toBe(true)
    })
  })

  describe('custom greaterThanOrEqualTo function', () => {
    it('should create a max heap of objects using the custom greaterThanOrEqualTo function', () => {
      interface Task {
        name: string
        priority: number
      }

      const tasks: Task[] = [
        { name: 'Task A', priority: 5 },
        { name: 'Task B', priority: 2 },
        { name: 'Task C', priority: 8 },
        { name: 'Task D', priority: 1 },
      ]

      const maxHeap = new MaxHeap<Task>({
        inputs: tasks,
        greaterThanOrEqualTo: (a, b) => a.priority >= b.priority,
      })

      expect(maxHeap.size).toBe(4)
      expect(maxHeap.max).toEqual({ name: 'Task C', priority: 8 })

      const extracted = maxHeap.extract()
      expect(extracted).toEqual({ name: 'Task C', priority: 8 })
      expect(maxHeap.max).toEqual({ name: 'Task A', priority: 5 })
    })
  })
})
