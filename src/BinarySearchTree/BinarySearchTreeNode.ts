export default class BinarySearchTreeNode<T> {
	public value: T;
	public left: BinarySearchTreeNode<T> | null = null;
	public right: BinarySearchTreeNode<T> | null = null;

	constructor(value: T) {
		this.value = value;
		this.left = null;
		this.right = null;
	}
}
