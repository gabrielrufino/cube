import type ILinkedList from './ILinkedList'
import type ILinkedListItem from './ILinkedListItem'
import Node from './Node'

export default class LinkedList<T = number> implements ILinkedList<T> {
  private readonly _FIRST_POSITION = 0
  private _head: Node<T> | null = null
  private _size: number = 0

  constructor(...inputs: Readonly<T[]>) {
    const nodes = inputs.map(input => new Node<T>(input))

    for (let i = 0; i < inputs.length - 1; i++) {
      nodes[i].next = nodes[i + 1]
    }

    this._head = nodes[0]
    this._size = nodes.length
  }

  public get data() {
    const data = []

    let current = this._head

    while (current) {
      data.push({
        value: current.value,
        next: current.next?.value || null,
      })

      current = current.next
    }

    return data
  }

  public get size() {
    return this._size
  }

  public get isEmpty() {
    return this.size === 0
  }

  public positionOf(element: T): number | undefined {
    let current = this._head
    let position = 0

    while (current && current.value !== element) {
      current = current.next
      position += 1
    }

    if (current) {
      return position
    }
  }

  public push(element: T): T {
    if (this._head) {
      let current: Node<T> = this._head

      while (current.next) {
        current = current.next
      }

      current.next = new Node<T>(element)
    }
    else {
      this._head = new Node<T>(element)
    }

    this._size += 1

    return element
  }

  public remove(element: T): T | null {
    const position = this.positionOf(element)

    if (position) {
      return this.removeFromPosition(position)
    }

    return null
  }

  public insertInPosition(element: T, position: number): T | undefined {
    if (position < this._FIRST_POSITION || position > this.size) {
      return undefined
    }

    const node = new Node<T>(element)

    if (position === this._FIRST_POSITION) {
      node.next = this._head
      this._head = node
    }
    else {
      const before = this._getNodeFromPosition(position - 1)
      const after = (before && before.next) || null

      if (before) {
        before.next = node
      }

      node.next = after
    }

    this._size += 1

    return element
  }

  public getFromPosition(position: number): ILinkedListItem<T> | null {
    const node = this._getNodeFromPosition(position)
    if (!node) {
      return null
    }

    return {
      value: node.value,
      next: node.next?.value || null,
    }
  }

  public removeFromPosition(position: number): T | null {
    if (position < this._FIRST_POSITION || position >= this.size) {
      return null
    }

    let current: Node<T> = this._head as Node<T>

    if (position === this._FIRST_POSITION) {
      this._head = current.next
    }
    else {
      let previous: Node<T> | null | undefined

      for (let i = 0; i < position && current; i++) {
        previous = current
        current = current.next as Node<T>
      }

      if (previous) {
        previous.next = current.next
      }
    }

    this._size -= 1
    return current.value
  }

  private _getNodeFromPosition(position: number): Node<T> | null {
    if (position < this._FIRST_POSITION || position > (this.size - 1)) {
      return null
    }

    let node = this._head
    for (let i = 0; i < position && node?.next; i++) {
      node = node.next
    }

    return node
  }

  private [Symbol.toPrimitive](type: 'default' | 'number' | 'string'): boolean | number | string {
    const primitives = {
      default: true,
      number: this.size,
      string: `[Head] ${this.data.map(({ value }) => value).join(' => ')}`,
    }

    return primitives[type]
  }
}
