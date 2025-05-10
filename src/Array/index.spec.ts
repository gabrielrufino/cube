import { faker } from '@faker-js/faker'
import { describe, expect, it } from 'vitest'

import CustomArray from './'

describe('array', () => {
  it('should create an empty array with no problems', () => {
    const array = new CustomArray()

    expect(array.data).toEqual([])
    expect(array.size).toBe(0)
  })

  it('should create a filled array with no problems', () => {
    const array = new CustomArray(1, 2, 3, 4, 5)

    expect(array.data).toEqual([1, 2, 3, 4, 5])
    expect(array.size).toBe(5)
  })

  it('should return the correct size of the array', () => {
    const size = faker.number.int({ max: 200 })
    const params: number[] = []

    for (let i = 0; i < size; i++) {
      params.push(faker.number.int())
    }

    const array = new CustomArray(...params)

    expect(array.size).toBe(size)
  })

  describe('.insertInLastPosition()', () => {
    it('should insert a new element in the last position', () => {
      const array = new CustomArray(1, 2, 3)
      array.insertInLastPosition(4)

      expect(array.data).toEqual([1, 2, 3, 4])
    })
  })

  describe('.insertInFirstPosition()', () => {
    it('should insert a new element in the first position', () => {
      const array = new CustomArray(2, 3, 4)
      array.insertInFirstPosition(1)

      expect(array.data).toEqual([1, 2, 3, 4])
    })

    it('should return the inserted element', () => {
      const array = new CustomArray(2, 3, 4)
      const element = array.insertInFirstPosition(1)

      expect(element).toBe(1)
    })
  })

  describe('.removeFromLastPosition()', () => {
    it('should remove and return the last element of the array', () => {
      const array = new CustomArray(1, 2, 3, 4)
      const element = array.removeFromLastPosition()

      expect(array.data).toEqual([1, 2, 3])
      expect(element).toBe(4)
    })

    it('should ruturn undefined when trying to remove the last element of an empty array', () => {
      const array = new CustomArray()
      const element = array.removeFromLastPosition()

      expect(array.data).toEqual([])
      expect(element).toBe(undefined)
    })
  })

  describe('.removeFromFirstPosition()', () => {
    it('should remove and return the first element of the array', () => {
      const array = new CustomArray(1, 2, 3, 4)
      const element = array.removeFromFirstPosition()

      expect(array.data).toEqual([2, 3, 4])
      expect(element).toBe(1)
    })

    it('should ruturn undefined when trying to remove the first element of an empty array', () => {
      const array = new CustomArray()
      const element = array.removeFromFirstPosition()

      expect(array.data).toEqual([])
      expect(element).toBe(undefined)
    })
  })

  describe('.removeFromPosition()', () => {
    it('should remove and return the element of an arbitrary position from array', () => {
      const array = new CustomArray(1, 2, 3, 4)
      const element = array.removeFromPosition(2)

      expect(array.data).toEqual([1, 2, 4])
      expect(element).toBe(3)
    })

    it('should return return when trying to remove the element of an arbitrary position from an empty array', () => {
      const array = new CustomArray()
      const element = array.removeFromPosition(faker.number.int())

      expect(array.data).toEqual([])
      expect(element).toBe(undefined)
    })
  })

  describe('bidimensional array', () => {
    it('should create an bidimensional array with no problems', () => {
      const array = new CustomArray<CustomArray>(
        new CustomArray(1, 2, 3),
        new CustomArray(4, 5, 6),
        new CustomArray(7, 8, 9),
      )

      expect(array.data).toEqual([
        new CustomArray(1, 2, 3),
        new CustomArray(4, 5, 6),
        new CustomArray(7, 8, 9),
      ])
      expect(array.data[0].data).toEqual([1, 2, 3])
      expect(array.data[1].data).toEqual([4, 5, 6])
      expect(array.data[2].data).toEqual([7, 8, 9])
      expect(array.size).toBe(3)
      expect(array.data[0].size).toEqual(3)
      expect(array.data[1].size).toEqual(3)
      expect(array.data[2].size).toEqual(3)
    })
  })

  describe('conversion to primitive', () => {
    it('should return the elements separated by comma in string conversion', () => {
      const array = new CustomArray(1, 2, 3, 4)
      const string = String(array)

      expect(string).toBe('1, 2, 3, 4')
    })

    it('should return the array size in number conversion', () => {
      const array = new CustomArray(1, 2, 3, 4)
      const number = Number(array)

      expect(number).toBe(4)
    })

    it('should return boolean true in default conversion', () => {
      const array = new CustomArray(1, 2, 3, 4)
      const boolean = array[Symbol.toPrimitive]('default')

      expect(boolean).toBe(true)
    })
  })
})
