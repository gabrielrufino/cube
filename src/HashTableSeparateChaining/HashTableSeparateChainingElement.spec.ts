import { describe, expect, it } from 'vitest'

import HashTableSeparateChainingElement from './HashTableSeparateChainingElement'

describe('hashTableSeparateChaining', () => {
  it('should create an empty hash table separate chaining without problems', () => {
    const hashTableSeparateChaining = new HashTableSeparateChainingElement<number>('first', 1)

    expect(hashTableSeparateChaining.key).toBe('first')
    expect(hashTableSeparateChaining.value).toBe(1)
  })

  describe('conversion to primitive', () => {
    it('should return separated by comma linked list in string conversion', () => {
      const hashTableSeparateChaining = new HashTableSeparateChainingElement('first', 1)
      const string = String(hashTableSeparateChaining)

      expect(string).toBe('{ first => 1}')
    })

    it('should return the size in number conversion', () => {
      const hashTableSeparateChaining = new HashTableSeparateChainingElement('first', 1)
      const string = Number(hashTableSeparateChaining)

      expect(string).toBe(2)
    })

    it('should return true in default conversion', () => {
      const hashTableSeparateChaining = new HashTableSeparateChainingElement('first', 1)
      const returned = hashTableSeparateChaining[Symbol.toPrimitive]('default')

      expect(returned).toBe(true)
    })
  })
})
