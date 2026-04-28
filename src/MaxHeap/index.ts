import type IMaxHeap from './IMaxHeap'
import type IMaxHeapOptions from './IMaxHeapOptions'

export default class MaxHeap<T = number> implements IMaxHeap<T> {
  private _data: T[] = []

  constructor({ greaterThanOrEqualTo, inputs = [] }: IMaxHeapOptions<T> = {}) {
    if (greaterThanOrEqualTo) {
      this._greaterThanOrEqualTo = greaterThanOrEqualTo
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

  get max(): T | null {
    return this.data[0] || null
  }

  public insert(value: T): T {
    this._data = [...this.data, value]
    this._siftUp(this.size - 1)
    return value
  }

  public extract(): T | null {
    if (this.isEmpty) {
      return null
    }

    const max = this.data[0]
    const last = this._data.pop()

    if (this.size > 0 && last !== undefined) {
      this._data[0] = last
      this._siftDown(0)
    }

    return max
  }

  private readonly _greaterThanOrEqualTo = (value1: T, value2: T): boolean => value1 >= value2
  private readonly _getLeftIndex = (index: number): number => (2 * index) + 1
  private readonly _getRightIndex = (index: number): number => (2 * index) + 2
  private readonly _getParentIndex = (index: number): number => Math.floor((index - 1) / 2)

  private _siftUp(index: number): void {
    const parent = this._getParentIndex(index)

    if (index > 0 && this._greaterThanOrEqualTo(this.data[index], this.data[parent])) {
      [this._data[parent], this._data[index]] = [this.data[index], this.data[parent]]
      this._siftUp(parent)
    }
  }

  private _siftDown(index: number): void {
    const left = this._getLeftIndex(index)
    const right = this._getRightIndex(index)
    let largest = index

    if (left < this.size && this._greaterThanOrEqualTo(this.data[left], this.data[largest])) {
      largest = left
    }

    if (right < this.size && this._greaterThanOrEqualTo(this.data[right], this.data[largest])) {
      largest = right
    }

    if (largest !== index) {
      [this._data[largest], this._data[index]] = [this.data[index], this.data[largest]]
      this._siftDown(largest)
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
