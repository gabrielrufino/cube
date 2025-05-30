import { describe, expect, it, vi } from 'vitest'

import Set from './'

const cube = { Set }

describe(Set.name, () => {
  it('should create an empty set without problems', () => {
    const set = new cube.Set()

    expect(set.size).toBe(0)
    expect(set.data).toEqual([])
  })

  it('should create an filled set without problems', () => {
    const set = new cube.Set(1, 2, 3, 4)

    expect(set.size).toBe(4)
    expect(set.data.sort()).toEqual([1, 2, 3, 4].sort())
  })

  describe('conversion to primitive', () => {
    it('should return comma-separated elements in string conversion', () => {
      const set = new cube.Set(1, 2, 3, 4)
      const string = String(set)

      expect(string).toBe('{ 1, 2, 3, 4 }')
    })

    it('should return the set size in number conversion', () => {
      const set = new cube.Set(1, 2, 3, 4)
      const number = Number(set)

      expect(number).toBe(4)
    })

    it('should return true in default conversion', () => {
      const set = new cube.Set(1, 2, 3, 4)
      const returned = set[Symbol.toPrimitive]('default')

      expect(returned).toBe(true)
    })
  })

  describe('.has()', () => {
    it('should return true when the set has the specified element', () => {
      const set = new cube.Set(1, 2, 3, 4)
      const returned = set.has(3)

      expect(returned).toBe(true)
    })

    it('should return false when the set has not the specified element', () => {
      const set = new cube.Set(1, 2, 4)
      const returned = set.has(3)

      expect(returned).toBe(false)
    })
  })

  describe('.add()', () => {
    it('should add a new element in the set', () => {
      const set = new cube.Set(1, 2, 3)
      set.add(4)

      expect(set.size).toBe(4)
      expect(set.data.sort()).toEqual([1, 2, 3, 4].sort())
    })

    it('should return the inserted element when the element is not in the set', () => {
      const set = new cube.Set(1, 2, 3)
      const returned = set.add(4)

      expect(returned).toEqual(4)
    })

    it('should return null when the element is in the set', () => {
      const set = new cube.Set(1, 2, 3, 4)
      const returned = set.add(4)

      expect(returned).toBeNull()
    })
  })

  describe('.delete()', () => {
    it('should remove an element in the set', () => {
      const set = new cube.Set(1, 2, 3, 4)
      set.delete(3)

      expect(set.size).toBe(3)
      expect(set.data.sort()).toEqual([1, 2, 4].sort())
    })

    it('should not change the set if the element is not in the set', () => {
      const set = new cube.Set(1, 2, 3, 4)
      set.delete(5)

      expect(set.size).toBe(4)
      expect(set.data.sort()).toEqual([1, 2, 3, 4].sort())
    })

    it('should return the element if the element was in the set', () => {
      const set = new cube.Set(1, 2, 3, 4)
      const returned = set.delete(1)

      expect(returned).toBe(1)
    })

    it('should return null if the element was not in the set', () => {
      const set = new cube.Set(1, 2, 3, 4)
      const returned = set.delete(5)

      expect(returned).toBeNull()
    })
  })

  describe('.clear()', () => {
    it('should empty the set', () => {
      const set = new cube.Set(1, 2, 3, 4)
      set.clear()

      expect(set.size).toBe(0)
      expect(set.data).toEqual([])
    })

    it('should return the elements', () => {
      const set = new cube.Set(1, 2, 3, 4)
      const returned = set.clear()

      expect(returned.sort()).toEqual([1, 2, 3, 4].sort())
    })
  })

  describe('.union()', () => {
    it('should return the result of the union between the current set and the received set', () => {
      const set1 = new cube.Set(1, 2, 3, 4)
      const set2 = new cube.Set(3, 4, 5, 6)
      const union = set1.union(set2)

      expect(union.size).toBe(6)
      expect(union.data.sort()).toEqual([1, 2, 3, 4, 5, 6].sort())
    })
  })

  describe('.intersection()', () => {
    it('should return the result of the intersection between the current set and the received set', () => {
      const set1 = new cube.Set(1, 2, 3, 4)
      const set2 = new cube.Set(3, 4, 5, 6)
      const intersection = set1.intersection(set2)

      expect(intersection.size).toBe(2)
      expect(intersection.data.sort()).toEqual([3, 4].sort())
    })
  })

  describe('.difference()', () => {
    it('should return the result of the difference between the current set and the received set', () => {
      const set1 = new cube.Set(1, 2, 3, 4)
      const set2 = new cube.Set(3, 4, 5, 6)
      const difference = set1.difference(set2)

      expect(difference.size).toBe(2)
      expect(difference.data.sort()).toEqual([1, 2].sort())
    })
  })

  describe('.isSubsetOf()', () => {
    it('should return true when the current set is subset of the received set', () => {
      const set1 = new cube.Set(1, 4)
      const set2 = new cube.Set(1, 2, 3, 4)
      const isSubset = set1.isSubsetOf(set2)

      expect(isSubset).toBe(true)
    })

    it('should return false whe the current set is not subset of the received set', () => {
      const set1 = new cube.Set(4, 5)
      const set2 = new cube.Set(1, 2, 3, 4)
      const isSubset = set1.isSubsetOf(set2)

      expect(isSubset).toBe(false)
    })
  })

  describe('.contains()', () => {
    it('should return true when the current set contains the received set', () => {
      const set1 = new cube.Set(1, 2, 3, 4)
      const set2 = new cube.Set(1, 4)
      const contains = set1.contains(set2)

      expect(contains).toBe(true)
    })

    it('should return false when the current set does not contains the received set', () => {
      const set1 = new cube.Set(1, 2, 3, 4)
      const set2 = new cube.Set(4, 5)
      const contains = set1.contains(set2)

      expect(contains).toBe(false)
    })
  })

  describe('set.union()', () => {
    it('should return an union set between two others', () => {
      const set1 = new cube.Set(1, 2, 3, 4)
      const set2 = new cube.Set(3, 4, 5, 6)
      const union = cube.Set.union(set1, set2)

      expect(union.size).toBe(6)
      expect(union.data.sort()).toEqual([1, 2, 3, 4, 5, 6].sort())
    })
  })

  describe('set.intersection()', () => {
    it('should return an intersection set between two others', () => {
      const set1 = new cube.Set(1, 2, 3, 4)
      const set2 = new cube.Set(3, 4, 5, 6)
      const intersection = cube.Set.intersection(set1, set2)

      expect(intersection.size).toBe(2)
      expect(intersection.data.sort()).toEqual([3, 4].sort())
    })

    it('should optimize the search by tranverse the smallest set', () => {
      const set1 = new cube.Set(1, 2, 3, 4)
      const set2 = new cube.Set(3, 4)

      vi.spyOn(set1, 'has')
      cube.Set.intersection(set1, set2)

      expect(set1.has).toBeCalledTimes(2)

      const set3 = new cube.Set(3, 4)
      const set4 = new cube.Set(1, 2, 3, 4)

      vi.spyOn(set4, 'has')
      cube.Set.intersection(set3, set4)

      expect(set4.has).toBeCalledTimes(2)

      const set5 = new cube.Set(1, 2, 3, 4)
      const set6 = new cube.Set(1, 2, 3, 4)

      vi.spyOn(set5, 'has')
      cube.Set.intersection(set5, set6)

      expect(set5.has).toBeCalledTimes(4)
    })
  })

  describe('set.difference()', () => {
    it('should return an difference set between two others', () => {
      const set1 = new cube.Set(1, 2, 3, 4)
      const set2 = new cube.Set(3, 4, 5, 6)
      const difference = cube.Set.difference(set1, set2)

      expect(difference.size).toBe(2)
      expect(difference.data.sort()).toEqual([1, 2].sort())
    })
  })

  describe('set.isSubset()', () => {
    it('should return true when the first argument is a subset of the second argument', () => {
      const set1 = new cube.Set(1, 4)
      const set2 = new cube.Set(1, 2, 3, 4)
      const isSubset = cube.Set.isSubset(set1, set2)

      expect(isSubset).toBe(true)
    })

    it('should return true when the arguments are the same set', () => {
      const set1 = new cube.Set(1, 2, 3, 4)
      const set2 = new cube.Set(1, 2, 3, 4)
      const isSubset = cube.Set.isSubset(set1, set2)

      expect(isSubset).toBe(true)
    })

    it('should return false when the first argument is not a subset of the second argument', () => {
      const set1 = new cube.Set(4, 5)
      const set2 = new cube.Set(1, 2, 3, 4)
      const isSubset = cube.Set.isSubset(set1, set2)

      expect(isSubset).toBe(false)
    })

    it('should optimize the checking by not transverse the set when the first set is larger than the second', () => {
      const set1 = new cube.Set(1, 2, 3, 4)
      const set2 = new cube.Set(1, 2)

      vi.spyOn(set2, 'has')
      const isSubset = set1.isSubsetOf(set2)

      expect(set2.has).not.toBeCalled()
      expect(isSubset).toBe(false)
    })
  })
})
