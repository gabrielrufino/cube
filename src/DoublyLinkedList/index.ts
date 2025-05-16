import type { IDoublyLinkedListItem } from './IDoublyLinkedList'
import type IDoublyLinkedList from './IDoublyLinkedList'
import Node from './Node'

export default class DoublyLinkedList<T = number> implements IDoublyLinkedList<T> {
  private _head: Node<T> | null = null
  private _tail: Node<T> | null = null
  private _size: number = 0

  constructor(...inputs: Readonly<T[]>) {
    const nodes = inputs.map(input => new Node(input))

    for (let i = 0; i < inputs.length; i++) {
      nodes[i].previous = nodes[i - 1] || null
      nodes[i].next = nodes[i + 1] || null
    }

    this._head = nodes[0]
    this._tail = nodes[nodes.length - 1]
    this._size = inputs.length
  }

  public get data(): IDoublyLinkedListItem<T>[] {
    let current = this._head
    const data = []

    while (current) {
      data.push({
        previous: current.previous?.value ?? null,
        value: current.value,
        next: current.next?.value ?? null,
      })
      current = current.next
    }

    return data
  }

  public get size(): number {
    return this._size
  }

  /**
   * Complexity: O(1)
   */
  public push(element: T): T {
    const node = new Node(element)

    if (this._tail) {
      this._tail.next = node
      node.previous = this._tail
    }
    else {
      this._head = node
      this._tail = node
    }

    this._size += 1
    return element
  }

  /**
   * Complexity: O(n/2)
   */
  public getFromPosition(position: number): IDoublyLinkedListItem<T> | undefined {
    if (position < 0 || position >= this.size) {
      return undefined
    }

    const distanceToTheHead = position
    const distanceToTheTail = this.size - position - 1
    let current: Node<T> | null

    if (distanceToTheTail > distanceToTheHead) {
      current = this._head

      for (let i = 0; i < position; i++) {
        current = current?.next || null
      }
    }
    else {
      current = this._tail

      for (let i = this.size - 1; i > position; i--) {
        current = current?.previous || null
      }
    }

    if (current?.value) {
      return {
        previous: current.previous?.value ?? null,
        value: current.value,
        next: current.next?.value ?? null,
      }
    }
  }

  public positionOf(element: T): number | undefined {
    let current = this._head
    let position = 0

    while (current && current.value !== element) {
      current = current.next
      position += 1
    }

    return position === this.size ? undefined : position
  }

  /**
   * Complexity: O(n)
   */
  public insertInPosition(element: T, position: number): T | undefined {
    if (position < 0 || position > this.size) {
      return undefined
    }

    const node = new Node<T>(element)

    if (position === 0 && this._head) {
      node.next = this._head
      this._head.previous = node
      this._head = node

      this._size += 1

      return element
    }

    if (position === this.size - 1 && this._tail?.previous) {
      this._tail.previous.next = node
      node.previous = this._tail?.previous || null
      node.next = this._tail
      this._tail.previous = node

      this._size += 1

      return element
    }

    if (position === this.size && this._tail) {
      node.previous = this._tail
      this._tail.next = node
      this._tail = node

      this._size += 1

      return element
    }

    const way = this._findFasterWayToPosition(position)
    let current: Node<T> | null

    if (way === 'ASC') {
      current = this._head

      for (let i = 0; i < position; i++) {
        current = current?.next || null
      }
    }
    else {
      current = this._tail

      for (let i = this.size - 1; i > position; i--) {
        current = current?.previous || null
      }
    }

    if (current?.previous) {
      current.previous.next = node
      node.previous = current.previous
      node.next = current
      current.previous = node
    }

    this._size += 1

    return element
  }

  /**
   * Complexity: O(n)
   */
  public remove(element: T): T | undefined {
    let current = this._head

    while (current && current.value !== element) {
      current = current.next
    }

    if (current) {
      if (current.previous) {
        current.previous.next = current.next
      }

      if (current.next) {
        current.next.previous = current.previous
      }

      if (current === this._head) {
        this._head = current.next
      }

      if (current === this._tail) {
        this._tail = current.previous
      }

      this._size -= 1

      return current.value
    }

    return undefined
  }

  /**
   * Complexity: O(n)
   */
  public removeFromPosition(position: number): T | undefined {
    const item = this.getFromPosition(position)

    if (item) {
      this.remove(item.value)
      return item.value
    }

    return undefined
  }

  private _findFasterWayToPosition(position: number): 'ASC' | 'DESC' {
    const distanceToTheHead = position
    const distanceToTheTail = this.size - position - 1

    if (distanceToTheTail > distanceToTheHead) {
      return 'ASC'
    }

    return 'DESC'
  }

  private [Symbol.toPrimitive](type: 'default' | 'number' | 'string'): boolean | number | string {
    const primitives = {
      default: true,
      number: this.size,
      string: `[Head] ${this.data.map(({ value }) => value).join(' <=> ')} [Tail]`,
    }

    return primitives[type]
  }
}
