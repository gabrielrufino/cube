import ILinkedList from './ILinkedList';
import Node from './Node';

export default class LinkedList<T = number> implements ILinkedList<T> {
	private readonly _FIRST_POSITION = 0;
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

	public get isEmpty() {
		return this.size === 0;
	}

	public positionOf(element: T): number | undefined {
		let current = this._head;
		let position = 0;

		while (current && current.value !== element) {
			current = current?.next;
			position += 1;
		}

		if (current) {
			return position;
		}
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

	public remove(element: T): T | undefined {
		const position = this.positionOf(element);

		if (position) {
			return this.removeFromPosition(position);
		}
	}

	public insertInPosition(element: T, position: number): T | undefined {
		if (position < this._FIRST_POSITION || position > this.size) {
			return undefined;
		}

		const node = new Node<T>(element);

		if (position === this._FIRST_POSITION) {
			node.next = this._head;
			this._head = node;
		} else {
			const before = this.getNodeFromPosition(position - 1);
			const after = (before && before.next) || null;

			if (before) {
				before.next = node;
			}

			node.next = after;
		}

		this._size += 1;

		return element;
	}

	getFromPosition(position: number) {
		if (position < this._FIRST_POSITION || position > this.size - 1) {
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
		if (position < this._FIRST_POSITION || position > (this.size - 1)) {
			return undefined;
		}

		let current: Node<T> | null = this._head;

		if (position === this._FIRST_POSITION) {
			this._head = current?.next || null;
		} else {
			let previous: Node<T> | null | undefined;

			for (let i = 0; i < position; i++) {
				previous = current;
				current = current?.next || null;
			}

			if (previous) {
				previous.next = current?.next || null;
			}
		}

		this._size -= 1;
		return current?.value;
	}

	private getNodeFromPosition(position: number): Node<T> | undefined {
		if (position < this._FIRST_POSITION || position > this.size - 1) {
			return undefined;
		}

		let node = this._head;

		for (let i = 0; i < position; i++) {
			node = node?.next || null;
		}

		return node || undefined;
	}
}