import { describe, expect, it, vi } from 'vitest'

import Dictionary from './'

describe('dictionary', () => {
  it('should create an empty dictionary without problems', () => {
    const dictionary = new Dictionary<number>()

    expect(dictionary.data).toEqual({})
    expect(dictionary.size).toBe(0)
  })

  it('should create a filled dictionary without problems', () => {
    const dictionary = new Dictionary<number>({
      first: 1,
      second: 2,
      third: 3,
      fourth: 4,
    })

    expect(dictionary.data).toEqual({
      first: 1,
      second: 2,
      third: 3,
      fourth: 4,
    })
    expect(dictionary.size).toBe(4)
  })

  describe('.isEmpty', () => {
    it('should return true when the dictionary has no key value pairs', () => {
      const dictionary = new Dictionary({})

      expect(dictionary.isEmpty).toBe(true)
    })

    it('should return false when the dictionary has some key value pair', () => {
      const dictionary = new Dictionary({
        first: 1,
      })

      expect(dictionary.isEmpty).toBe(false)
    })
  })

  describe('.keys', () => {
    it('should return an array with all the dictionary keys', () => {
      const dictionary = new Dictionary<number>({
        first: 1,
        second: 2,
        third: 3,
        fourth: 4,
      })

      expect(dictionary.keys.sort()).toEqual(['first', 'second', 'third', 'fourth'].sort())
    })
  })

  describe('.values', () => {
    it('should return an array with all the dictionary values', () => {
      const dictionary = new Dictionary<number>({
        first: 1,
        second: 2,
        third: 3,
        fourth: 4,
      })

      expect(dictionary.values.sort()).toEqual([1, 2, 3, 4].sort())
    })
  })

  describe('.pairs', () => {
    it('should return an array of key value pairs', () => {
      const dictionary = new Dictionary<number>({
        first: 1,
        second: 2,
        third: 3,
        fourth: 4,
      })

      expect(dictionary.pairs.sort())
        .toEqual([['first', 1], ['second', 2], ['third', 3], ['fourth', 4]].sort())
    })
  })

  describe('.set()', () => {
    it('should set a new key with a value in the dictionary', () => {
      const dictionary = new Dictionary({
        first: 1,
      })
      dictionary.set('second', 2)

      expect(dictionary.data).toEqual({
        first: 1,
        second: 2,
      })
      expect(dictionary.size).toBe(2)
    })

    it('should replace a key value pair when receive an already existent key', () => {
      const dictionary = new Dictionary({
        first: 1,
      })
      dictionary.set('first', 2)

      expect(dictionary.data).toEqual({
        first: 2,
      })
      expect(dictionary.size).toBe(1)
    })

    it('should return the inserted key valur pair', () => {
      const dictionary = new Dictionary()
      const returned = dictionary.set('first', 1)

      expect(returned).toEqual(['first', 1])
    })
  })

  describe('.remove()', () => {
    it('should remove an existent key value pair', () => {
      const dictionary = new Dictionary({
        first: 1,
        second: 2,
        third: 3,
        fourth: 4,
      })
      dictionary.remove('third')

      expect(dictionary.data).toEqual({
        first: 1,
        second: 2,
        fourth: 4,
      })
      expect(dictionary.size).toBe(3)
    })

    it('should change nothing when receive a non existent key', () => {
      const dictionary = new Dictionary({
        first: 1,
        second: 2,
        third: 3,
        fourth: 4,
      })
      dictionary.remove('fifth')

      expect(dictionary.data).toEqual({
        first: 1,
        second: 2,
        third: 3,
        fourth: 4,
      })
      expect(dictionary.size).toBe(4)
    })

    it('should return the removed key value pair', () => {
      const dictionary = new Dictionary({
        first: 1,
        second: 2,
        third: 3,
        fourth: 4,
      })
      const returned = dictionary.remove('second')

      expect(returned).toEqual(['second', 2])
    })

    it('should return null when the dictionary has not the received key', () => {
      const dictionary = new Dictionary({
        first: 1,
        second: 2,
        third: 3,
        fourth: 4,
      })
      const returned = dictionary.remove('fifth')

      expect(returned).toBeNull()
    })
  })

  describe('.hasKey()', () => {
    it('should return truw when the dictionary has the received key', () => {
      const dictionary = new Dictionary({
        first: 1,
        second: 2,
        third: 3,
        fourth: 4,
      })
      const returned = dictionary.hasKey('first')

      expect(returned).toBe(true)
    })

    it('should return false when the dictionary has not the received key', () => {
      const dictionary = new Dictionary({
        first: 1,
        second: 2,
        third: 3,
        fourth: 4,
      })
      const returned = dictionary.hasKey('fifth')

      expect(returned).toBe(false)
    })
  })

  describe('.get()', () => {
    it('should return the value of the received key', () => {
      const dictionary = new Dictionary<number>({
        first: 1,
        second: 2,
        third: 3,
        fourth: 4,
      })
      const returned = dictionary.get('third')

      expect(returned).toBe(3)
    })

    it('should return null when the dictionary has not the received key', () => {
      const dictionary = new Dictionary<number>({
        first: 1,
        second: 2,
        third: 3,
        fourth: 4,
      })
      const returned = dictionary.get('fifth')

      expect(returned).toBeNull()
    })
  })

  describe('.clear()', () => {
    it('should clear the dictionary', () => {
      const dictionary = new Dictionary({
        first: 1,
        second: 2,
        third: 3,
        fourth: 3,
      })
      dictionary.clear()

      expect(dictionary.data).toEqual({})
      expect(dictionary.size).toBe(0)
    })

    it('should return the dictionary key values pairs befores the clear', () => {
      const dictionary = new Dictionary({
        first: 1,
        second: 2,
        third: 3,
        fourth: 3,
      })
      const returned = dictionary.clear()

      expect(returned).toEqual({
        first: 1,
        second: 2,
        third: 3,
        fourth: 3,
      })
    })
  })

  describe('.forEach()', () => {
    it('should call the received function for each elements', () => {
      const dictionary = new Dictionary<number>({
        first: 1,
        second: 2,
        third: 3,
        fourth: 4,
      })
      const func = vi.fn()

      dictionary.forEach(func)

      expect(func).toBeCalledTimes(4)
      expect(func).toBeCalledWith('first', 1)
      expect(func).toBeCalledWith('second', 2)
      expect(func).toBeCalledWith('third', 3)
      expect(func).toBeCalledWith('fourth', 4)
    })
  })

  describe('conversion to primitive', () => {
    it('should return a comma separated key value pairs in string conversion', () => {
      const dictionary = new Dictionary<number>({
        first: 1,
        second: 2,
        third: 3,
        fourth: 4,
      })
      const string = String(dictionary)

      expect(string).toBe('{ first => 1, second => 2, third => 3, fourth => 4 }')
    })

    it('should return the dictionary size in number conversion', () => {
      const dictionary = new Dictionary<number>({
        first: 1,
        second: 2,
        third: 3,
        fourth: 4,
      })
      const number = Number(dictionary)

      expect(number).toBe(4)
    })

    it('should return true in default conversion', () => {
      const dictionary = new Dictionary<number>({
        first: 1,
        second: 2,
        third: 3,
        fourth: 4,
      })
      const returned = dictionary[Symbol.toPrimitive]('default')

      expect(returned).toBe(true)
    })
  })
})
