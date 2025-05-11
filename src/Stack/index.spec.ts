import { faker } from '@faker-js/faker'
import { describe, expect, it } from 'vitest'

import Stack from './'

describe(Stack.name, () => {
  it('should create an empty stack with no problems', () => {
    const stack = new Stack()

    expect(stack.data).toEqual([])
    expect(stack.size).toBe(0)
  })

  it('should create a filled stack with no problems', () => {
    const stack = new Stack(1, 2, 3, 4, 5)

    expect(stack.data).toEqual([1, 2, 3, 4, 5])
    expect(stack.size).toBe(5)
  })

  describe('.push()', () => {
    it('should return the correct size of the stack', () => {
      const size = faker.number.int({ max: 200 })
      const params: number[] = []

      for (let i = 0; i < size; i++) {
        params.push(faker.number.int())
      }

      const stack = new Stack(...params)

      expect(stack.size).toBe(size)
    })

    it('should push a new element in the stack top', () => {
      const stack = new Stack(1, 2, 3)
      stack.push(4)

      expect(stack.data).toEqual([1, 2, 3, 4])
    })
  })

  describe('.pop()', () => {
    it('should pop the top element from the stack', () => {
      const stack = new Stack(1, 2, 3, 4)
      const element = stack.pop()

      expect(stack.data).toEqual([1, 2, 3])
      expect(element).toBe(4)
    })
  })

  describe('.peek()', () => {
    it('should peek the top element of the stack', () => {
      const stack = new Stack(1, 2, 3, 4)
      const element = stack.peek()

      expect(element).toBe(4)
      expect(stack.data).toEqual([1, 2, 3, 4])
    })

    it('should peek undefined when the stack has no elements', () => {
      const stack = new Stack()
      const element = stack.peek()

      expect(element).toBe(undefined)
    })
  })

  describe('.clear()', () => {
    it('should clear a stack', () => {
      const stack = new Stack(1, 2, 3, 4)
      stack.clear()

      expect(stack.data).toEqual([])
    })
  })

  describe('.isEmpty', () => {
    it('should return true when the stack has no elements', () => {
      const stack = new Stack()

      expect(stack.isEmpty).toBe(true)
    })

    it('should return false when the stack at least one element', () => {
      const stack = new Stack(1)

      expect(stack.isEmpty).toBe(false)
    })
  })

  describe('conversion to primitive', () => {
    it('should return comma-separated elements in string conversion', () => {
      const stack = new Stack(1, 2, 3, 4)
      const string = String(stack)

      expect(string).toBe('1, 2, 3, 4 [Top]')
    })

    it('should return the stack size in number conversion', () => {
      const stack = new Stack(1, 2, 3, 4)
      const number = Number(stack)

      expect(number).toBe(4)
    })

    it('should return true in default conversion', () => {
      const stack = new Stack(1, 2, 3, 4)
      const returned = stack[Symbol.toPrimitive]('default')

      expect(returned).toBe(true)
    })
  })
})
