import type IArray from './IArray'
import DataStructure from '../DataStructure'

export default class Array<T = number> extends DataStructure<T> implements IArray<T> {
  constructor(...inputs: Readonly<T[]>) {
    super(inputs)
  }

  public insertInLastPosition(element: T): T {
    this._data[this.size] = element
    return element
  }

  public insertInFirstPosition(element: T): T {
    return this.insertInPosition(0, element)
  }

  public insertInPosition(position: number, element: T): T {
    this._data.splice(position, 0, element)
    return element
  }

  public removeFromLastPosition(): T | undefined {
    const element = this._data[this.size - 1]
    const array = new Array<T>()

    for (let i = 0; i < this.size - 1; i++) {
      array.insertInLastPosition(this._data[i])
    }

    this._data = array.data
    return element
  }

  public removeFromFirstPosition(): T | undefined {
    const element = this._data[0]
    const array = new Array<T>()

    for (let i = 0; i < this.size - 1; i++) {
      array.insertInLastPosition(this._data[i + 1])
    }

    this._data = array.data
    return element
  }

  public removeFromPosition(position: number): T | undefined {
    const [element] = this._data.splice(position, 1)
    return element
  }

  private [Symbol.toPrimitive](type: 'string' | 'number' | 'default'): string | number | boolean {
    const primitives = {
      number: this.size,
      string: this.data.join(', '),
      default: true,
    }

    return primitives[type]
  }
}
