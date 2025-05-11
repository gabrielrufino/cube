import { describe, expect, it } from 'vitest'

import LinkedList from './'

describe(LinkedList.name, () => {
  it('should create an empty linked list without problems', () => {
    const linkedList = new LinkedList()

    expect(linkedList.data).toEqual([])
    expect(linkedList.size).toBe(0)
  })

  it('should create a filled linked list without problems', () => {
    const linkedList = new LinkedList(1, 2, 3, 4)

    expect(linkedList.data).toEqual([
      {
        value: 1,
        next: 2,
      },
      {
        value: 2,
        next: 3,
      },
      {
        value: 3,
        next: 4,
      },
      {
        value: 4,
        next: null,
      },
    ])
    expect(linkedList.size).toBe(4)
  })

  describe('.isEmpty', () => {
    it('should return true when there is no element in the linked list', () => {
      const linkedList = new LinkedList()

      expect(linkedList.isEmpty).toBe(true)
    })

    it('should return false when the is at least one element in the linked list', () => {
      const linkedList = new LinkedList(1, 2, 3, 4)

      expect(linkedList.isEmpty).toBe(false)
    })
  })

  describe('.push()', () => {
    it('should push a new element', () => {
      const linkedList = new LinkedList()

      linkedList.push(1)
      linkedList.push(2)
      linkedList.push(3)
      linkedList.push(4)

      expect(linkedList.data).toEqual([
        {
          value: 1,
          next: 2,
        },
        {
          value: 2,
          next: 3,
        },
        {
          value: 3,
          next: 4,
        },
        {
          value: 4,
          next: null,
        },
      ])
      expect(linkedList.size).toBe(4)
    })

    it('should return the pushed element', () => {
      const linkedList = new LinkedList()
      const returned = linkedList.push(1)

      expect(returned).toBe(1)
    })
  })

  describe('.removeFromPosition()', () => {
    it('should return undefined when given a negative position', () => {
      const linkedList = new LinkedList(1, 2, 3, 4)
      const returned = linkedList.removeFromPosition(-1)

      expect(returned).toBeNull()
    })

    it('should return undefined when given a position equal size', () => {
      const linkedList = new LinkedList(1, 2, 3, 4)
      const returned = linkedList.removeFromPosition(linkedList.size)

      expect(returned).toBeNull()
    })

    it('should return undefined when given a position larger than size', () => {
      const linkedList = new LinkedList(1, 2, 3, 4)
      const returned = linkedList.removeFromPosition(linkedList.size + 1)

      expect(returned).toBeNull()
    })

    it('should remove item from the head', () => {
      const linkedList = new LinkedList(1, 2, 3, 4)
      linkedList.removeFromPosition(0)

      expect(linkedList.data).toEqual([
        {
          value: 2,
          next: 3,
        },
        {
          value: 3,
          next: 4,
        },
        {
          value: 4,
          next: null,
        },
      ])
    })

    it('should remove item from the middle of the linked list', () => {
      const linkedList = new LinkedList(1, 2, 3, 4)
      linkedList.removeFromPosition(2)

      expect(linkedList.data).toEqual([
        {
          value: 1,
          next: 2,
        },
        {
          value: 2,
          next: 4,
        },
        {
          value: 4,
          next: null,
        },
      ])
    })

    it('should remove item from the last position of the linked list', () => {
      const linkedList = new LinkedList(1, 2, 3, 4)
      linkedList.removeFromPosition(linkedList.size - 1)

      expect(linkedList.data).toEqual([
        {
          value: 1,
          next: 2,
        },
        {
          value: 2,
          next: 3,
        },
        {
          value: 3,
          next: null,
        },
      ])
    })
  })

  describe('.getFromPosition()', () => {
    it('should return undefined when receive a negative position', () => {
      const linkedList = new LinkedList(1, 2, 3, 4)
      const returned = linkedList.getFromPosition(-1)

      expect(returned).toBeNull()
    })

    it('should return undefined whe the position is greater than the last position', () => {
      const linkedList = new LinkedList(1, 2, 3, 4)
      const returned = linkedList.getFromPosition(4)

      expect(returned).toBeNull()
    })

    it('should get the element at a valid position', () => {
      const linkedList = new LinkedList(1, 2, 3, 4)
      const returned = linkedList.getFromPosition(2)

      expect(returned).toEqual({
        value: 3,
        next: 4,
      })
    })
  })

  describe('.insertInPosition()', () => {
    it('should return undefined when receive a negative position', () => {
      const linkedList = new LinkedList(1, 2, 3, 4)
      const returned = linkedList.insertInPosition(5, -1)

      expect(returned).toBeUndefined()
    })

    it('should return undefined when receive a position larger than the size', () => {
      const linkedList = new LinkedList(1, 2, 3, 4)
      const returned = linkedList.insertInPosition(5, 10)

      expect(returned).toBeUndefined()
    })

    it('should insert an element in the head when receive position 0', () => {
      const linkedList = new LinkedList(1)
      linkedList.insertInPosition(0, 0)

      expect(linkedList.data).toEqual([
        {
          value: 0,
          next: 1,
        },
        {
          value: 1,
          next: null,
        },
      ])
    })

    it('should insert an element in the middle of the linked list', () => {
      const linkedList = new LinkedList(1, 3)
      linkedList.insertInPosition(2, 1)

      expect(linkedList.data).toEqual([
        {
          value: 1,
          next: 2,
        },
        {
          value: 2,
          next: 3,
        },
        {
          value: 3,
          next: null,
        },
      ])
    })

    it('should insert an element in the penultimate position', () => {
      const linkedList = new LinkedList(1, 2, 4)
      linkedList.insertInPosition(3, linkedList.size - 1)

      expect(linkedList.data).toEqual([
        {
          value: 1,
          next: 2,
        },
        {
          value: 2,
          next: 3,
        },
        {
          value: 3,
          next: 4,
        },
        {
          value: 4,
          next: null,
        },
      ])
    })

    it('should insert an element in the end of the linked list, just like a push', () => {
      const linkedList = new LinkedList(1, 2)
      linkedList.insertInPosition(3, linkedList.size)

      expect(linkedList.data).toEqual([
        {
          value: 1,
          next: 2,
        },
        {
          value: 2,
          next: 3,
        },
        {
          value: 3,
          next: null,
        },
      ])
    })

    it('should increase the size by one', () => {
      const linkedList = new LinkedList(1, 2, 3, 4)
      const { size } = linkedList
      linkedList.insertInPosition(5, linkedList.size)

      expect(linkedList.size).toBe(size + 1)
    })
  })

  describe('.positionOf()', () => {
    it('should return undefined when receive an element not found in linked list', () => {
      const linkedList = new LinkedList(1, 2, 3, 4)
      const position = linkedList.positionOf(5)

      expect(position).toBeUndefined()
    })

    it('should return the correct position of an element', () => {
      const linkedList = new LinkedList(1, 2, 3, 4)
      const position = linkedList.positionOf(3)

      expect(position).toBe(2)
    })
  })

  describe('.remove()', () => {
    it('should remove an element from linked list', () => {
      const linkedList = new LinkedList(1, 2, 3, 4)
      linkedList.remove(3)

      expect(linkedList.data).toEqual([
        {
          value: 1,
          next: 2,
        },
        {
          value: 2,
          next: 4,
        },
        {
          value: 4,
          next: null,
        },
      ])
    })

    it('should return the removed element', () => {
      const linkedList = new LinkedList(1, 2, 3, 4)
      const returned = linkedList.remove(3)

      expect(returned).toBe(3)
    })

    it('should return null when the element doesn\'t belongs to the linked list', () => {
      const linkedList = new LinkedList(1, 2, 3, 4)
      const returned = linkedList.remove(5)

      expect(returned).toBeNull()
    })
  })

  describe('conversion to primitive', () => {
    it('should return arrow-separated elements in string conversion', () => {
      const linkedList = new LinkedList(1, 2, 3, 4)
      const string = String(linkedList)

      expect(string).toBe('[Head] 1 => 2 => 3 => 4')
    })

    it('should return the linked list size in number conversion', () => {
      const linkedList = new LinkedList(1, 2, 3, 4)
      const number = Number(linkedList)

      expect(number).toBe(4)
    })

    it('should return true in default conversion', () => {
      const linkedList = new LinkedList(1, 2, 3, 4)
      const returned = linkedList[Symbol.toPrimitive]('default')

      expect(returned).toBe(true)
    })
  })
})
