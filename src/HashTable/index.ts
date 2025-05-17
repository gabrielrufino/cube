import type IHashTable from './IHashTable'
import type IHashTableData from './IHashTableData'
import type IHashTableInputs from './IHashTableInputs'
import type IHashTableOptions from './IHashTableOptions'

export default class HashTable<T = number> implements IHashTable<T> {
  public readonly maxSize: number

  private _data: Array<T | undefined>

  constructor(
    inputs: Readonly<IHashTableInputs<T>> = {},
    { maxSize = 100 }: IHashTableOptions = {},
  ) {
    this._data = Array.from({ length: maxSize })
    this.maxSize = maxSize

    for (const [key, value] of Object.entries(inputs)) {
      this.put(key, value)
    }
  }

  get data(): IHashTableData<T> {
    return this._data
      .map((value, index) => ({ index, value }))
      .filter(({ value }) => value !== undefined)
      .reduce((accumulator, current) => ({
        ...accumulator,
        [current.index]: current.value,
      }), {})
  }

  get size(): number {
    return Reflect.ownKeys(this.data).length
  }

  public put(key: string, value: T): T {
    const position = this._hashCode(key)
    this._data[position] = value
    return value
  }

  public get(key: string): T | null {
    const position = this._hashCode(key)
    return this.data[position] || null
  }

  public remove(key: string): T | null {
    const value = this.get(key)
    const position = this._hashCode(key)
    Reflect.deleteProperty(this._data, position)
    return value
  }

  private _hashCode(key: string): number {
    const code = key
      .split('')
      .map(character => character.charCodeAt(0))
      .reduce((previous, current) => previous + current, 0)

    return code % this.maxSize
  }

  private [Symbol.toPrimitive](type: 'default' | 'number' | 'string'): boolean | string | number {
    const primitives = {
      default: true,
      number: this.size,
      string: `[ ${Object.entries(this.data).map(([key, value]) => `${key} => ${value}`).join(', ')} ]`,
    }

    return primitives[type]
  }
}
