import type IHashTableLinearProbing from './IHashTableLinearProbing'
import type IHashTableLinearProbingInputs from './IHashTableLinearProbingInputs'
import type IHashTableLinearProbingOptions from './IHashTableLinearProbingOptions'
import HashTableLinearProbingElement from './HashTableLinearProbingElement'

export default class HashTableLinearProbing<T = number> implements IHashTableLinearProbing<T> {
  private _maxSize: number = 0
  private _data: HashTableLinearProbingElement<T>[] = []

  constructor(
    inputs: Readonly<IHashTableLinearProbingInputs<T>> = {},
    { maxSize = 100 }: IHashTableLinearProbingOptions = {},
  ) {
    this._maxSize = maxSize

    for (const [key, value] of Object.entries(inputs)) {
      this.put(key, value)
    }
  }

  get data(): { [index: number]: HashTableLinearProbingElement<T> } {
    return this._data
      .map((value, index) => ({ index, value }))
      .reduce((accumulator, current) => ({
        ...accumulator,
        [current.index]: current.value,
      }), {})
  }

  get size(): number {
    return Reflect.ownKeys(this.data).length
  }

  public put(key: string, value: T): T | null {
    if (this.size === this._maxSize) {
      return null
    }

    const element = new HashTableLinearProbingElement(key, value)
    let position = this._hashCode(key)

    if (this._data[position]) {
      do {
        position = this._nextPositionOf(position)
      } while (this._data[position])
    }

    this._data[position] = element

    return value
  }

  public get(key: string): T | null {
    const position = this._hashCode(key)
    let i = position

    do {
      if (this._data[i]?.key === key) {
        return this._data[i].value
      }

      i = this._nextPositionOf(i)
    } while (this._data[i] && i !== position)

    return null
  }

  public remove(key: string): T | null {
    if (this.get(key)) {
      let position = this._hashCode(key)

      while (this._data[position].key !== key) {
        position = this._nextPositionOf(position)
      }

      const { value } = this._data[position]
      Reflect.deleteProperty(this._data, position)

      let i: number
      for (
        i = position;
        this._data[this._nextPositionOf(i)]
        && this._hashCode(this._data[this._nextPositionOf(i)].key) === this._hashCode(key)
        && this._nextPositionOf(i) !== position;
        i = this._nextPositionOf(i)
      ) {
        this._data[i] = this._data[this._nextPositionOf(i)]
      }

      Reflect.deleteProperty(this._data, i)

      return value
    }

    return null
  }

  private _hashCode(key: string): number {
    const code = key
      .split('')
      .map(character => character.charCodeAt(0))
      .reduce((previous, current) => previous + current, 0)

    return code % this._maxSize
  }

  private _nextPositionOf(position: number) {
    return (position + 1) % this._maxSize
  }

  private [Symbol.toPrimitive](type: 'default' | 'number' | 'string'): boolean | string | number {
    const primitives = {
      default: true,
      number: this.size,
      string: `[ ${Object.values(this.data).join(', ')} ]`,
    }

    return primitives[type]
  }
}
