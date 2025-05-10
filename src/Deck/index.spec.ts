import { describe, expect, it } from 'vitest'

import Deck from './'

describe('deck', () => {
  it('should create an empty deck without problems', () => {
    const deck = new Deck()

    expect(deck.data).toEqual([])
    expect(deck.size).toBe(0)
  })

  it('should create a filled deck without problems', () => {
    const deck = new Deck(1, 2, 3, 4)

    expect(deck.data).toEqual([1, 2, 3, 4])
    expect(deck.size).toBe(4)
  })

  describe('.addFront()', () => {
    it('should add an element in the front of the deck', () => {
      const deck = new Deck(2, 3, 4)
      deck.addFront(1)

      expect(deck.data).toEqual([1, 2, 3, 4])
    })

    it('should return the inserted element', () => {
      const deck = new Deck(2, 3, 4)
      const returned = deck.addFront(1)

      expect(returned).toBe(1)
    })
  })

  describe('.addBack()', () => {
    it('should add an element in the back of the deck', () => {
      const deck = new Deck(1, 2, 3)
      deck.addBack(4)

      expect(deck.data).toEqual([1, 2, 3, 4])
    })

    it('should return the inserted element', () => {
      const deck = new Deck(1, 2, 3)
      const returned = deck.addBack(4)

      expect(returned).toBe(4)
    })
  })

  describe('.removeFront()', () => {
    it('should remove the element in the front of the deck', () => {
      const deck = new Deck(1, 2, 3, 4)
      deck.removeFront()

      expect(deck.data).toEqual([2, 3, 4])
    })

    it('should return the removed element', () => {
      const deck = new Deck(1, 2, 3, 4)
      const returned = deck.removeFront()

      expect(returned).toBe(1)
    })
  })

  describe('.removeBack()', () => {
    it('should remove the element in the back of the deck', () => {
      const deck = new Deck(1, 2, 3, 4)
      deck.removeBack()

      expect(deck.data).toEqual([1, 2, 3])
    })

    it('should return the removed element', () => {
      const deck = new Deck(1, 2, 3, 4)
      const returned = deck.removeBack()

      expect(returned).toBe(4)
    })
  })

  describe('.peekFront()', () => {
    it('should peek the element in the front of the deck', () => {
      const deck = new Deck(1, 2, 3, 4)
      const returned = deck.peekFront()

      expect(returned).toBe(1)
    })

    it('should not remove the element in the front os the deck', () => {
      const deck = new Deck(1, 2, 3, 4)
      deck.peekFront()

      expect(deck.data).toEqual([1, 2, 3, 4])
    })
  })

  describe('.peekBack()', () => {
    it('should peek the element in the back of the deck', () => {
      const deck = new Deck(1, 2, 3, 4)
      const returned = deck.peekBack()

      expect(returned).toBe(4)
    })

    it('should not remove the element in the back os the deck', () => {
      const deck = new Deck(1, 2, 3, 4)
      deck.peekBack()

      expect(deck.data).toEqual([1, 2, 3, 4])
    })
  })

  describe('conversion to primitive', () => {
    it('should return comma-separated elements in string conversion', () => {
      const deck = new Deck(1, 2, 3, 4)
      const string = String(deck)

      expect(string).toBe('[Front] 1, 2, 3, 4 [Back]')
    })

    it('should return the deck size in number conversion', () => {
      const deck = new Deck(1, 2, 3, 4)
      const number = Number(deck)

      expect(number).toBe(4)
    })

    it('should return true in default conversion', () => {
      const deck = new Deck(1, 2, 3, 4)
      const returned = deck[Symbol.toPrimitive]('default')

      expect(returned).toBe(true)
    })
  })
})
