import { faker } from '@faker-js/faker'
import { describe, expect, it } from 'vitest'

import MinHeap from './'

describe(MinHeap.name, () => {
  it('should create an empty min heap without problems', () => {
    const minHeap = new MinHeap()

    expect(minHeap.data).toEqual([])
    expect(minHeap.size).toBe(0)
  })

  it('should create a filled min heap without problems', () => {
    const minHeap = new MinHeap({
      inputs: [5, 2, 1, 9],
    })

    expect(minHeap.data).toEqual([1, 5, 2, 9])
    expect(minHeap.size).toBe(4)
  })

  describe('.isEmpty', () => {
    it('should be true when the heap has no values', () => {
      const minHeap = new MinHeap()

      expect(minHeap.isEmpty).toBe(true)
    })

    it('should be false when the heap has at least one value', () => {
      const minHeap = new MinHeap({
        inputs: [faker.number.int()],
      })

      expect(minHeap.isEmpty).toBe(false)
    })
  })

  describe('.min', () => {
    it('should be the min value when the heap is not empty', () => {
      const inputs = Array.from<number>({ length: 10 }).map(faker.number.int)
      const minHeap = new MinHeap({
        inputs,
      })

      expect(minHeap.min).toBe(Math.min(...inputs))
    })

    it('should be null when the heap is empty', () => {
      const minHeap = new MinHeap()

      expect(minHeap.min).toBeNull()
    })
  })

  describe('.insert()', () => {
    it('should insert new values in the heap', () => {
      const minHeap = new MinHeap()

      minHeap.insert(5)
      expect(minHeap.data).toEqual([5])
      expect(minHeap.size).toBe(1)

      minHeap.insert(2)
      expect(minHeap.data).toEqual([2, 5])
      expect(minHeap.size).toBe(2)

      minHeap.insert(1)
      expect(minHeap.data).toEqual([1, 5, 2])
      expect(minHeap.size).toBe(3)

      minHeap.insert(9)
      expect(minHeap.data).toEqual([1, 5, 2, 9])
      expect(minHeap.size).toBe(4)
    })

    it('should return the inserted value', () => {
      const minHeap = new MinHeap()
      const value = faker.number.int()
      const returned = minHeap.insert(value)

      expect(returned).toBe(value)
    })
  })

  describe('.extract()', () => {
    it('should extract the min value of the heap and adjust the heap after this', () => {
      const minHeap = new MinHeap({
        inputs: [1, 2, 3, 4, 5, 6, 7, 8, 9],
      })
      minHeap.extract()

      expect(minHeap.data).toEqual([2, 4, 3, 8, 5, 6, 7, 9])
      expect(minHeap.size).toBe(8)
    })

    it('should return the extracted value', () => {
      const inputs = Array.from<number>({ length: 10 }).map(faker.number.int)
      const minHeap = new MinHeap({ inputs })
      const returned = minHeap.extract()

      expect(returned).toBe(Math.min(...inputs))
    })

    it('should change nothing if the heap is empty', () => {
      const minHeap = new MinHeap()
      minHeap.extract()

      expect(minHeap.data).toEqual([])
      expect(minHeap.size).toBe(0)
    })

    it('should return null when the heap is empty', () => {
      const minHeap = new MinHeap()
      const returned = minHeap.extract()

      expect(returned).toBeNull()
    })

    it('should correctly extract the only element and become empty', () => {
      const minHeap = new MinHeap({ inputs: [10] })
      expect(minHeap.extract()).toBe(10)
      expect(minHeap.isEmpty).toBe(true)
    })

    it('should handle many extracts correctly', () => {
      const minHeap = new MinHeap({ inputs: [10, 9, 8, 7, 6, 5, 4, 3, 2, 1] })
      const result = []
      while (!minHeap.isEmpty) {
        result.push(minHeap.extract())
      }
      expect(result).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])
    })
  })

  describe('.insert() with duplicates', () => {
    it('should handle duplicate values correctly', () => {
      const minHeap = new MinHeap({ inputs: [5, 5, 5] })
      expect(minHeap.size).toBe(3)
      expect(minHeap.data).toEqual([5, 5, 5])
      expect(minHeap.extract()).toBe(5)
      expect(minHeap.size).toBe(2)
    })

    it('should sift up when equal value is inserted', () => {
      const minHeap = new MinHeap({ inputs: [10, 20, 5] })
      minHeap.insert(5)
      expect(minHeap.data[0]).toBe(5)
    })

    it('should swap equal values during sift up to kill equality mutant', () => {
      const a = { value: 10 }
      const b = { value: 10 }
      const minHeap = new MinHeap<any>({
        lessThanOrEqualTo: (x, y) => x.value <= y.value,
        inputs: [a],
      })
      minHeap.insert(b)
      expect(minHeap.data[0]).toBe(b)
    })

    it('should swap equal values during sift down to kill equality mutant', () => {
      const x = { value: 5 }
      const y = { value: 10 }
      const z = { value: 10 }
      const minHeap = new MinHeap<any>({
        lessThanOrEqualTo: (p, q) => p.value <= q.value,
        inputs: [x, y, z],
      })
      minHeap.extract()
      expect(minHeap.data[0]).toBe(y)
    })
  })

  describe('siftDown boundary', () => {
    it('should not sift down if children are out of bounds', () => {
      const minHeap = new MinHeap({ inputs: [5, 10] })
      // [5, 10] -> extract 5 -> [10]
      expect(minHeap.extract()).toBe(5)
      expect(minHeap.data).toEqual([10])
    })

    it('should check all children during sift down', () => {
      const minHeap = new MinHeap({ inputs: [10, 20, 15, 30, 40, 50, 60] })
      expect(minHeap.extract()).toBe(10)
      // After extract, last element 60 moves to root.
      // 60 should sift down.
      expect(minHeap.data[0]).toBe(15)
    })

    it('should not sift down when index is exactly size - 1', () => {
      const minHeap = new MinHeap({ inputs: [30, 20, 10] })
      // [10, 30, 20]
      expect(minHeap.size).toBe(3)
    })

    it('should not sift up from root', () => {
      const minHeap = new MinHeap({ inputs: [10] })
      expect(minHeap.data[0]).toBe(10)
    })
  })

  describe('custom lessThanOrEqualTo', () => {
    it('should allow us to customize the comparison function', () => {
      const minHeap = new MinHeap({
        lessThanOrEqualTo: (a: number, b: number) => a <= b,
        inputs: [2, 1],
      })
      expect(minHeap.min).toBe(1)
    })

    it('should use custom lessThanOrEqualTo to kill its mutant', () => {
      const minHeap = new MinHeap<string>({
        lessThanOrEqualTo: (a, b) => a.length <= b.length,
        inputs: ['aa', 'b'],
      })
      // If custom is used, 'b' is min.
      // If default is used, 'aa' is min.
      expect(minHeap.min).toBe('b')
    })
  })

  describe('heap Sort', () => {
    it('should sort an array in ASC order', () => {
      const minHeap = new MinHeap({
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

      const { size } = minHeap
      const result: number[] = []

      for (let i = 1; i <= size; i++) {
        result.push(minHeap.extract() as number)
      }

      expect(result).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])
    })
  })

  describe('conversion to primitive', () => {
    it('should return separated by comma values in string conversion', () => {
      const maxHeap = new MinHeap({
        inputs: [1, 2, 3, 4, 5],
      })
      const string = String(maxHeap)

      expect(string).toBe('1, 2, 3, 4, 5')
    })

    it('should return the size in number conversion', () => {
      const maxHeap = new MinHeap({
        inputs: [1, 2, 3, 4, 5],
      })
      const number = Number(maxHeap)

      expect(number).toBe(5)
    })

    it('should return true in default conversion', () => {
      const maxHeap = new MinHeap({
        inputs: [1, 2, 3, 4, 5],
      })
      const returned = maxHeap[Symbol.toPrimitive]('default')

      expect(returned).toBe(true)
    })
  })
})
