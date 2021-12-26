import BinarySearchTreeNode from './BinarySearchTreeNode';

interface IBinarySearchTreeData<T> {
	left: BinarySearchTreeNode<T> | null;
	value: T | null;
	right: BinarySearchTreeNode<T> | null;
}

export default IBinarySearchTreeData;
