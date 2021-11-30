export interface IDoublyLinkedListItem<T> {
  previous: T | null;
  value: T;
  next: T | null;
}

interface IDoublyLinkedList<T> {
  get data(): IDoublyLinkedListItem<T>[];
  get size(): number;
}

export default IDoublyLinkedList;
