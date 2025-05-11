import { describe, expect, it } from 'vitest'

import HashTableLinearProbingElement from './HashTableLinearProbingElement'

describe(HashTableLinearProbingElement.name, () => {
  it('should create a hash table linear probing element without problems', () => {
    const hashTableLinearProbingElement = new HashTableLinearProbingElement('key', 10)

    expect(hashTableLinearProbingElement.key).toBe('key')
    expect(hashTableLinearProbingElement.value).toBe(10)
  })

  describe('conversion to primitive', () => {
    it('should return the key value pair separated by arrow in string conversion', () => {
      const hashTableLinearProbingElement = new HashTableLinearProbingElement('key', 'value')
      const string = String(hashTableLinearProbingElement)

      expect(string).toBe('{ key => value }')
    })

    it('should return the number 2 in number conversion', () => {
      const hashTableLinearProbingElement = new HashTableLinearProbingElement('key', 'value')
      const number = Number(hashTableLinearProbingElement)

      expect(number).toBe(2)
    })
  })
})
