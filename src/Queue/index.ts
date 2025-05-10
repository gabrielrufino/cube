import type IQueue from './IQueue'
import DataStructure from '../DataStructure'

export default class Queue<T = number> extends DataStructure<T> implements IQueue<T> {
  constructor(...inputs: Readonly<T[]>) {
    super(inputs)
  }

  get isEmpty(): boolean {
    return this.size === 0
  }

  public enqueue(element: T): T {
    this._data = [...this.data, element]
    return element
  }

  public dequeue(): T | undefined {
    const [element, ...rest] = this.data
    this._data = rest
    return element
  }

  public peek(): T | undefined {
    const [element] = this.data
    return element
  }

  public clear(): void {
    this._data = []
  }

  private [Symbol.toPrimitive](type: 'default' | 'number' | 'string'): boolean | number | string {
    const primitives = {
      default: true,
      number: this.size,
      string: `[Front] ${this.data.join(', ')}`,
    }

    return primitives[type]
  }
}
