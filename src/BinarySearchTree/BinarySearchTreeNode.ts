export default class BinarySearchTreeNode<T> {
	public value: T;
	public left: BinarySearchTreeNode<T> | null = null;
	public right: BinarySearchTreeNode<T> | null = null;

	constructor(value: T) {
		this.value = value;
		this.left = null;
		this.right = null;
	}

	private [Symbol.toPrimitive](type: 'default' | 'number' | 'string'): boolean | number | string {
		const primitives = {
			default: true,
			number: 1 + (this.left ? 1 : 0) + (this.right ? 1 : 0),
			string: `[${this.left}] <= (${this.value}) => [${this.right}]`,
		};

		return primitives[type];
	}
}
