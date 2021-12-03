export default class Node<T> {
	public value: T;
	public previous: Node<T> | null = null;
	public next: Node<T> | null = null;

	constructor(value: T) {
		this.value = value;
	}
}
