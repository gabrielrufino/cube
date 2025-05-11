import { describe, expect, it } from 'vitest'

import HashTableSeparateChainingElement from './HashTableSeparateChainingElement'

describe(HashTableSeparateChainingElement.name, () => {
  it('should create an empty hash table separate chaining without problems', () => {
    const hashTableSeparateChainingElement = new HashTableSeparateChainingElement<number>('first', 1)

    expect(hashTableSeparateChainingElement.key).toBe('first')
    expect(hashTableSeparateChainingElement.value).toBe(1)
  })

  describe('conversion to primitive', () => {
    it('should return separated by comma linked list in string conversion', () => {
      const hashTableSeparateChainingElement = new HashTableSeparateChainingElement('first', 1)
      const string = String(hashTableSeparateChainingElement)

      expect(string).toBe('{ first => 1}')
    })

    it('should return the size in number conversion', () => {
      const hashTableSeparateChainingElement = new HashTableSeparateChainingElement('first', 1)
      const string = Number(hashTableSeparateChainingElement)

      expect(string).toBe(2)
    })

    it('should return true in default conversion', () => {
      const hashTableSeparateChainingElement = new HashTableSeparateChainingElement('first', 1)
      const returned = hashTableSeparateChainingElement[Symbol.toPrimitive]('default')

      expect(returned).toBe(true)
    })
  })
})
