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

	public remove(_element: T): T | undefined {
		return undefined;
	}

	getFromPosition(position: number) {
		if (position < 0 || position > this.size - 1) {
			return undefined;
		}

		let node = this._head;

		for (let i = 0; i < position; i++) {
			node = node?.next || null;
		}

		if (node?.value) {
			return {
				value: node.value,
				next: node.next?.value || null,
			};
		}

		return undefined;
	}

	public removeFromPosition(position: number): T | undefined {
		if (position < 0 || position > (this.size - 1)) {
			return undefined;
		}

		if (position === 0) {
			this._head = this._head?.next || null;
		} else {
			let previous: Node<T> | null | undefined;
			let current: Node<T> | null = this._head;

			for (let i = 0; i < position; i++) {
				previous = current;
				current = current?.next || null;
			}

			if (previous) {
				previous.next = current?.next || null;
			}
		}

		this._size -= 1;
	}
}
