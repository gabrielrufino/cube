import type IBinarySearchNodeOptions from './IBinarySearchNodeOptions'
import type IBinarySearchTree from './IBinarySearchTree'
import type IBinarySearchTreeData from './IBinarySearchTreeData'
import BinarySearchTreeNode from './BinarySearchTreeNode'

export default class BinarySearchTree<T = number> implements IBinarySearchTree<T> {
  private _root: BinarySearchTreeNode<T> | null = null
  private _size: number = 0

  constructor({ inputs = [], lessThanOrEqualTo }: Readonly<IBinarySearchNodeOptions<T>> = {}) {
    if (lessThanOrEqualTo) {
      this._lessThanOrEqualTo = lessThanOrEqualTo
    }

    for (const value of inputs) {
      this.insert(value)
    }

    this._size = inputs.length
  }

  get data(): IBinarySearchTreeData<T> {
    return this._root
      ? { ...this._root }
      : { left: null, value: null, right: null }
  }

  get size(): number {
    return this._size
  }

  get min(): T | null {
    let current = this._root

    while (current && current.left) {
      current = current.left
    }

    return current?.value || null
  }

  get max(): T | null {
    let current = this._root

    while (current && current.right) {
      current = current.right
    }

    return current?.value || null
  }

  public insert(value: T): T {
    const node = new BinarySearchTreeNode(value)

    if (this._root) {
      this._insertChild(this._root, node)
    }
    else {
      this._root = node
    }

    this._size += 1

    return value
  }

  public walkInOrder(callback: (_value: T) => any): void {
    this._visitNodeInOrder(this._root, callback)
  }

  public walkPreOrder(callback: (_value: T) => any): void {
    this._visitNodePreOrder(this._root, callback)
  }

  public walkPostOrder(callback: (_value: T) => any): void {
    this._visitNodePostOrder(this._root, callback)
  }

  public search(value: T): boolean {
    let current = this._root

    while (current && current.value !== value) {
      if (this._lessThanOrEqualTo(value, current.value)) {
        current = current.left
      }
      else {
        current = current.right
      }
    }

    return Boolean(current)
  }

  public remove(value: T): T | null {
    let current = this._root
    const path: Array<'left' | 'right'> = []

    while (current && current.value !== value) {
      if (this._lessThanOrEqualTo(value, current.value)) {
        current = current.left
        path.push('left')
      }
      else {
        current = current.right
        path.push('right')
      }
    }

    const found = { ...current }
    const parent = path
      .slice(0, path.length - 1)
      .reduce((accumulator, current) => accumulator && accumulator[current], this._root)
    const child = path[path.length - 1]

    if (current?.left && current.right && parent) {
      let head = current.right

      while (head.left) {
        head = head.left
      }

      this.remove(head.value)
      current.value = head.value
    }
    else if (current?.left && parent) {
      parent[child] = current.left
      this._size -= 1
    }
    else if (current?.right && parent) {
      parent[child] = current.right
      this._size -= 1
    }
    else if (parent) {
      parent[child] = null
      this._size -= 1
    }

    return found.value || null
  }

  private _lessThanOrEqualTo(value1: T, value2: T): boolean {
    if (value1 <= value2) {
      return true
    }

    return false
  }

  private _insertChild(father: BinarySearchTreeNode<T>, child: BinarySearchTreeNode<T>): void {
    if (this._lessThanOrEqualTo(child.value, father.value)) {
      if (father.left) {
        this._insertChild(father.left, child)
      }
      else {
        father.left = child
      }

      return
    }

    if (father.right) {
      this._insertChild(father.right, child)
    }
    else {
      father.right = child
    }
  }

  private _visitNodeInOrder(node: BinarySearchTreeNode<T> | null, callback: (_value: T) => any): void {
    if (node) {
      this._visitNodeInOrder(node.left, callback)
      callback(node.value)
      this._visitNodeInOrder(node.right, callback)
    }
  }

  private _visitNodePreOrder(node: BinarySearchTreeNode<T> | null, callback: (_value: T) => any): void {
    if (node) {
      callback(node.value)
      this._visitNodePreOrder(node.left, callback)
      this._visitNodePreOrder(node.right, callback)
    }
  }

  private _visitNodePostOrder(node: BinarySearchTreeNode<T> | null, callback: (_value: T) => any): void {
    if (node) {
      this._visitNodePostOrder(node.left, callback)
      this._visitNodePostOrder(node.right, callback)
      callback(node.value)
    }
  }

  private [Symbol.toPrimitive](type: 'default' | 'number' | 'string'): boolean | number | string {
    const primitives = {
      default: true,
      number: this.size,
      string: `${this._root}`,
    }

    return primitives[type]
  }
}
