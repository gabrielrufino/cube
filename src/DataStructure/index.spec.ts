import { describe, expect, it } from 'vitest'

import DataStructure from './'

describe(DataStructure.name, () => {
  class Something<T = number> extends DataStructure<T> {
    constructor(...inputs: T[]) {
      super(inputs)
    }
  }

  it('should create an empty Something with no problems', () => {
    const something = new Something()

    expect(something.data).toEqual([])
    expect(something.size).toBe(0)
  })

  it('should create a filled Something with no problems', () => {
    const something = new Something(1, 2, 3, 4)

    expect(something.data).toEqual([1, 2, 3, 4])
    expect(something.size).toBe(4)
  })
})
