import type IMinHeap from './IMinHeap'
import type IMinHeapOptions from './IMinHeapOptions'

export default class MinHeap<T = number> implements IMinHeap<T> {
  private _data: T[] = []

  constructor({ lessThanOrEqualTo, inputs = [] }: IMinHeapOptions<T> = {}) {
    if (lessThanOrEqualTo) {
      this._lessThanOrEqualTo = lessThanOrEqualTo
    }

    for (const input of inputs) {
      this.insert(input)
    }
  }

  get data(): T[] {
    return [...this._data]
  }

  get size(): number {
    return this.data.length
  }

  get isEmpty(): boolean {
    return this.size === 0
  }

  get min(): T | null {
    return this.data[0] || null
  }

  public insert(value: T): T {
    this._data = [...this.data, value]
    this._siftUp(this.size - 1)
    return value
  }

  public extract(): T | null {
    if (!this.isEmpty) {
      const [min, ...rest] = this.data
      this._data = [rest[rest.length - 1], ...rest.slice(0, rest.length - 1)].filter(value => value !== undefined)
      this._siftDown(0)

      return min
    }

    return null
  }

  private readonly _lessThanOrEqualTo = (value1: T, value2: T): boolean => value1 <= value2
  private readonly _getLeftIndex = (index: number): number => (2 * index) + 1
  private readonly _getRightIndex = (index: number): number => (2 * index) + 2
  private readonly _getParentIndex = (index: number): number => Math.floor((index - 1) / 2)

  private _siftUp(index: number): void {
    const parent = this._getParentIndex(index)

    if (index > 0 && this._lessThanOrEqualTo(this.data[index], this.data[parent])) {
      [this._data[parent], this._data[index]] = [this.data[index], this.data[parent]]
      this._siftUp(parent)
    }
  }

  private _siftDown(index: number): void {
    const left = this._getLeftIndex(index)
    const right = this._getRightIndex(index)

    if (left < this.size && this._lessThanOrEqualTo(this.data[left], this.data[index])) {
      [this._data[left], this._data[index]] = [this.data[index], this.data[left]]
      this._siftDown(left)
    }

    if (right < this.size && this._lessThanOrEqualTo(this.data[right], this.data[index])) {
      [this._data[right], this._data[index]] = [this.data[index], this.data[right]]
      this._siftDown(right)
    }
  }

  private [Symbol.toPrimitive](type: 'default' | 'number' | 'string'): boolean | number | string {
    const primitives = {
      default: true,
      number: this.size,
      string: this.data.join(', '),
    }

    return primitives[type]
  }
}
