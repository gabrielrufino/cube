import IDoublyLinkedList, {IDoublyLinkedListItem} from './IDoublyLinkedList';
import Node from './Node';

export default class DoublyLinkedList<T = number> implements IDoublyLinkedList<T> {
	private _head: Node<T> | null = null;
	private _tail: Node<T> | null = null;
	private _size: number = 0;

	constructor(...inputs: T[]) {
		if (inputs.length) {
			const nodes = inputs.map(input => new Node(input));

			for (let i = 0; i < inputs.length; i++) {
				nodes[i].previous = nodes[i - 1] || null;
				nodes[i].next = nodes[i + 1] || null;
			}

			this._head = nodes[0];
			this._tail = nodes[nodes.length - 1];
			this._size = inputs.length;
		}
	}

	public get data(): IDoublyLinkedListItem<T>[] {
		let current = this._head;
		const data = [];

		while (current) {
			data.push({
				previous: current.previous?.value || null,
				value: current.value,
				next: current.next?.value || null,
			});
			current = current.next;
		}

		return data;
	}

	public get size(): number {
		return this._size;
	}

	public push(element: T): T {
		const node = new Node(element);

		if (this._tail) {
			this._tail.next = node;
			node.previous = this._tail;
		} else {
			this._head = node;
			this._tail = node;
		}

		this._size += 1;
		return element;
	}
}
