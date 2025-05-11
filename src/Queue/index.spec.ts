import { describe, expect, it } from 'vitest'

import Queue from './'

describe(Queue.name, () => {
  it('should create an empty queue without problems', () => {
    const queue = new Queue()

    expect(queue.data).toEqual([])
    expect(queue.size).toBe(0)
  })

  it('should create a filled queue without problems', () => {
    const queue = new Queue(1, 2, 3, 4)

    expect(queue.data).toEqual([1, 2, 3, 4])
    expect(queue.size).toBe(4)
  })

  describe('.enqueue()', () => {
    it('should enqueue a new element', () => {
      const queue = new Queue(1, 2, 3)
      queue.enqueue(4)

      expect(queue.data).toEqual([1, 2, 3, 4])
    })

    it('should return the enqueued element', () => {
      const queue = new Queue(1, 2, 3)
      const returned = queue.enqueue(4)

      expect(returned).toBe(4)
    })
  })

  describe('.dequeue()', () => {
    it('should dequeue the first element', () => {
      const queue = new Queue(1, 2, 3, 4)
      queue.dequeue()

      expect(queue.data).toEqual([2, 3, 4])
    })

    it('should return the dequeued element', () => {
      const queue = new Queue(1, 2, 3, 4)
      const returned = queue.dequeue()

      expect(returned).toBe(1)
    })
  })

  describe('.peek()', () => {
    it('should return the first element', () => {
      const queue = new Queue(1, 2, 3, 4)
      const returned = queue.peek()

      expect(returned).toEqual(1)
    })

    it('should not dequeue the first element', () => {
      const queue = new Queue(1, 2, 3, 4)
      queue.peek()

      expect(queue.data).toEqual([1, 2, 3, 4])
    })
  })

  describe('.clear()', () => {
    it('should clear a queue', () => {
      const queue = new Queue(1, 2, 3, 4)
      queue.clear()

      expect(queue.data).toEqual([])
    })
  })

  describe('conversion to primitive', () => {
    it('should return comma-separated elements in string conversion', () => {
      const queue = new Queue(1, 2, 3, 4)
      const string = String(queue)

      expect(string).toBe('[Front] 1, 2, 3, 4')
    })

    it('should return the queue size in number conversion', () => {
      const queue = new Queue(1, 2, 3, 4)
      const number = Number(queue)

      expect(number).toBe(4)
    })

    it('should return true in default conversion', () => {
      const queue = new Queue(1, 2, 3, 4)
      const returned = queue[Symbol.toPrimitive]('default')

      expect(returned).toBe(true)
    })
  })
})
