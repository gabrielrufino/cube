export interface IDoublyLinkedListItem<T> {
  previous: T | null;
  value: T;
  next: T | null;
}

interface IDoublyLinkedList<T> {
  get data(): IDoublyLinkedListItem<T>[];
  get size(): number;
  push(_element: T): T;
  getFromPosition(_position: number): IDoublyLinkedListItem<T> | undefined;
  positionOf(_element: T): number | undefined;
}

export default IDoublyLinkedList;
