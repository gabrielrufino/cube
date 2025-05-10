export default class Node<T> {
  public value: T
  public next: Node<T> | null = null

  constructor(value: T) {
    this.value = value
  }
}
