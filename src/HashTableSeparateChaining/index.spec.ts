import { describe, expect, it } from 'vitest'

import LinkedList from '../LinkedList'
import HashTableSeparateChaining from './'
import HashTableSeparateChainingElement from './HashTableSeparateChainingElement'

describe('hashTableSeparateChaining', () => {
  it('should create an empty hash table separate chaining without problems', () => {
    const hashTableSeparateChaining = new HashTableSeparateChaining<number>()

    expect(hashTableSeparateChaining.data).toEqual({})
    expect(hashTableSeparateChaining.size).toBe(0)
    expect(hashTableSeparateChaining.maxSize).toBe(100)
  })

  it('should create an filled hash table separate chaining without problems', () => {
    const hashTableSeparateChaining = new HashTableSeparateChaining<number>({
      first: 1,
      tsrif: -1,
      second: 2,
    })

    expect(hashTableSeparateChaining.data).toEqual({
      36: new LinkedList(
        new HashTableSeparateChainingElement('second', 2),
      ),
      52: new LinkedList(
        new HashTableSeparateChainingElement('first', 1),
        new HashTableSeparateChainingElement('tsrif', -1),
      ),
    })
    expect(hashTableSeparateChaining.size).toBe(2)
    expect(hashTableSeparateChaining.maxSize).toBe(100)
  })

  it('should customize the size of the hash table separate chaining', () => {
    const hashTableSeparateChaining = new HashTableSeparateChaining<number>({}, { maxSize: 50 })

    expect(hashTableSeparateChaining.maxSize).toBe(50)
  })

  describe('.put()', () => {
    it('should insert a new element in the hash table separate chaining', () => {
      const hashTableSeparateChaining = new HashTableSeparateChaining({
        first: 1,
      })
      hashTableSeparateChaining.put('second', 2)

      expect(hashTableSeparateChaining.data).toEqual({
        36: new LinkedList(
          new HashTableSeparateChainingElement('second', 2),
        ),
        52: new LinkedList(
          new HashTableSeparateChainingElement('first', 1),
        ),
      })
      expect(hashTableSeparateChaining.size).toBe(2)
    })

    it('should insert the new element in an existent linked list on collisions', () => {
      const hashTableSeparateChaining = new HashTableSeparateChaining({
        first: 1,
        second: 2,
      })
      hashTableSeparateChaining.put('tsrif', -1)

      expect(hashTableSeparateChaining.data).toEqual({
        36: new LinkedList(
          new HashTableSeparateChainingElement('second', 2),
        ),
        52: new LinkedList(
          new HashTableSeparateChainingElement('first', 1),
          new HashTableSeparateChainingElement('tsrif', -1),
        ),
      })
      expect(hashTableSeparateChaining.size).toBe(2)
    })

    it('should return the inserted element', () => {
      const hashTableSeparateChaining = new HashTableSeparateChaining()
      const returned = hashTableSeparateChaining.put('first', 1)

      expect(returned).toBe(1)
    })
  })

  describe('.get()', () => {
    it('should get an element by key', () => {
      const hashTableSeparateChaining = new HashTableSeparateChaining({
        first: 1,
        second: 2,
      })
      const returned = hashTableSeparateChaining.get('first')

      expect(returned).toEqual(new HashTableSeparateChainingElement('first', 1))
    })

    it('should return the correct element in case of collision', () => {
      const hashTableSeparateChaining = new HashTableSeparateChaining({
        first: 1,
        tsrif: -1,
        second: 2,
      })
      const returned = hashTableSeparateChaining.get('tsrif')

      expect(returned).toEqual(new HashTableSeparateChainingElement('tsrif', -1))
    })

    it('should return null when the key is not in the hash table separate chaining', () => {
      const hashTableSeparateChaining = new HashTableSeparateChaining({
        first: 1,
        second: 2,
      })
      const returned = hashTableSeparateChaining.get('third')

      expect(returned).toBeNull()
    })
  })

  describe('.remove()', () => {
    it('should remove an existent key value pair', () => {
      const hashTableSeparateChaining = new HashTableSeparateChaining({
        first: 1,
        second: 2,
      })
      hashTableSeparateChaining.remove('first')

      expect(hashTableSeparateChaining.data).toEqual({
        36: new LinkedList(new HashTableSeparateChainingElement('second', 2)),
      })
      expect(hashTableSeparateChaining.size).toBe(1)
    })

    it('should remove the correct element in case of collision', () => {
      const hashTableSeparateChaining = new HashTableSeparateChaining({
        first: 1,
        tsrif: -1,
        second: 2,
      })
      hashTableSeparateChaining.remove('tsrif')

      expect(hashTableSeparateChaining.data).toEqual({
        36: new LinkedList(new HashTableSeparateChainingElement('second', 2)),
        52: new LinkedList(new HashTableSeparateChainingElement('first', 1)),
      })
      expect(hashTableSeparateChaining.size).toBe(2)
    })

    it('should bla blabla', () => {
      const hashTableSeparateChaining = new HashTableSeparateChaining({
        first: 1,
      })
      hashTableSeparateChaining.remove('first')

      expect(hashTableSeparateChaining.data).toEqual({})
      expect(hashTableSeparateChaining.size).toBe(0)
    })

    it('should change nothing if the key is not in the hash table separate chaining', () => {
      const hashTableSeparateChaining = new HashTableSeparateChaining({
        first: 1,
        second: 2,
      })
      hashTableSeparateChaining.remove('third')

      expect(hashTableSeparateChaining.data).toEqual({
        36: new LinkedList(new HashTableSeparateChainingElement('second', 2)),
        52: new LinkedList(new HashTableSeparateChainingElement('first', 1)),
      })
      expect(hashTableSeparateChaining.size).toBe(2)
    })

    it('should return the removed linked list', () => {
      const hashTableSeparateChaining = new HashTableSeparateChaining({
        first: 1,
        second: 2,
      })
      const returned = hashTableSeparateChaining.remove('first')

      expect(returned).toEqual(new HashTableSeparateChainingElement('first', 1))
    })

    it('should return null when remove a non existent key', () => {
      const hashTableSeparateChaining = new HashTableSeparateChaining({
        first: 1,
        second: 2,
      })
      const returned = hashTableSeparateChaining.remove('third')

      expect(returned).toBeNull()
    })
  })

  describe('conversion to primitive', () => {
    it('should return separated by comma linked list in string conversion', () => {
      const hashTableSeparateChaining = new HashTableSeparateChaining({
        first: 1,
        tsrif: -1,
        second: 2,
      })
      const string = String(hashTableSeparateChaining)

      expect(string).toBe('[ [Head] { second => 2}, [Head] { first => 1} => { tsrif => -1} ]')
    })

    it('should return the size in number conversion', () => {
      const hashTableSeparateChaining = new HashTableSeparateChaining({
        first: 1,
        tsrif: -1,
        second: 2,
      })
      const string = Number(hashTableSeparateChaining)

      expect(string).toBe(2)
    })

    it('should return true in default conversion', () => {
      const hashTableSeparateChaining = new HashTableSeparateChaining({
        first: 1,
        tsrif: -1,
        second: 2,
      })
      const returned = hashTableSeparateChaining[Symbol.toPrimitive]('default')

      expect(returned).toBe(true)
    })
  })
})
