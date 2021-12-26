import BinarySearchTreeNode from './BinarySearchTreeNode';
import IBinarySearchNodeOptions from './IBinarySearchNodeOptions';
import IBinarySearchTree from './IBinarySearchTree';
import IBinarySearchTreeData from './IBinarySearchTreeData';

export default class BinarySearchTree<T = number> implements IBinarySearchTree<T> {
	private _root: BinarySearchTreeNode<T> | null = null;

	constructor({inputs = [], lessThanOrEqualTo}: IBinarySearchNodeOptions<T> = {inputs: []}) {
		if (lessThanOrEqualTo) {
			this._lessThanOrEqualTo = lessThanOrEqualTo;
		}

		for (const value of inputs) {
			this.insert(value);
		}
	}

	get data(): IBinarySearchTreeData<T> {
		return this._root || {
			left: null,
			value: null,
			right: null,
		};
	}

	public insert(value: T): T {
		const node = new BinarySearchTreeNode(value);

		if (this._root) {
			this._insertChild(this._root, node);
		} else {
			this._root = node;
		}

		return value;
	}

	public walkInOrder(callback: (_value: T) => any): void {
		this._visitNodeInOrder(this._root, callback);
	}

	private _lessThanOrEqualTo(value1: T, value2: T): boolean {
		if (value1 <= value2) {
			return true;
		}

		return false;
	}

	private _insertChild(father: BinarySearchTreeNode<T>, child: BinarySearchTreeNode<T>): void {
		if (this._lessThanOrEqualTo(child.value, father.value)) {
			if (father.left) {
				this._insertChild(father.left, child);
			} else {
				father.left = child;
			}

			return;
		}

		if (father.right) {
			this._insertChild(father.right, child);
		} else {
			father.right = child;
		}
	}

	private _visitNodeInOrder(node: BinarySearchTreeNode<T> | null, callback: (_value: T) => any): void {
		if (node) {
			this._visitNodeInOrder(node.left, callback);
			callback(node.value);
			this._visitNodeInOrder(node.right, callback);
		}
	}
}
