import ILinkedList from './ILinkedList';
import Node from './Node';

export default class LinkedList<T = number> implements ILinkedList<T> {
	private _head: Node<T> | null = null;
	private _size: number = 0;

	constructor(...inputs: T[]) {
		if (inputs.length) {
			const nodes = inputs.map(input => new Node<T>(input));

			for (let i = 0; i < inputs.length - 1; i++) {
				nodes[i].next = nodes[i + 1];
			}

			this._head = nodes[0];
			this._size = nodes.length;
		}
	}

	public get data() {
		const data = [];

		let current = this._head;

		while (current) {
			data.push({
				value: current.value,
				next: current.next?.value || null,
			});

			current = current.next;
		}

		return data;
	}

	public get size() {
		return this._size;
	}

	public push(element: T): T {
		if (this._head) {
			let current: Node<T> = this._head;

			while (current.next) {
				current = current.next;
			}

			current.next = new Node<T>(element);
		} else {
			this._head = new Node<T>(element);
		}

		this._size += 1;

		return element;
	}
}
