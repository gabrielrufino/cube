import type ILinkedListItem from './ILinkedListItem'

interface ILinkedList<T> {
  get data(): ILinkedListItem<T>[]
  get size(): number
  get isEmpty(): boolean
  push: (_element: T) => T
  getFromPosition: (_position: number) => ILinkedListItem<T> | null
  positionOf: (_element: T) => number | undefined
  insertInPosition: (_element: T, _position: number) => T | undefined
  remove: (_element: T) => T | null
  removeFromPosition: (_position: number) => T | null
}

export default ILinkedList
