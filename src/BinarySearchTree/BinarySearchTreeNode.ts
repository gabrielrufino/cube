export default class BinarySearchTreeNode<T> {
	public value: T;
	public left: BinarySearchTreeNode<T> | null = null;
	public right: BinarySearchTreeNode<T> | null = null;

	constructor(value: T) {
		this.value = value;
		this.left = null;
		this.right = null;
	}

	[Symbol.toPrimitive](type: string): string | number | null {
		if (type === 'string') {
			return `[${this.left}] <= (${this.value}) => [${this.right}]`;
		}

		if (type === 'number') {
			return 1 + (this.left ? 1 : 0) + (this.right ? 1 : 0);
		}

		return null;
	}
}
