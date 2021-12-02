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

	/**
	 * Complexity: O(1)
	 */
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

	/**
	 * Complexity: O(n/2)
	 */
	public getFromPosition(position: number): IDoublyLinkedListItem<T> | undefined {
		if (position < 0 || position >= this._size) {
			return undefined;
		}

		const distanceToTheHead = position;
		const distanceToTheTail = this.size - position - 1;
		let current: Node<T> | null;

		if (distanceToTheTail > distanceToTheHead) {
			current = this._head;

			for (let i = 0; i < position; i++) {
				current = current?.next || null;
			}
		} else {
			current = this._tail;

			for (let i = this.size - 1; i > position; i--) {
				current = current?.previous || null;
			}
		}

		if (current?.value) {
			return {
				previous: current?.previous?.value || null,
				value: current?.value,
				next: current?.next?.value || null,
			};
		}
	}

	public positionOf(element: T): number | undefined {
		let current = this._head;
		let position = 0;

		while (current && current.value !== element) {
			current = current.next;
			position += 1;
		}

		return position === this.size ? undefined : position;
	}
}
