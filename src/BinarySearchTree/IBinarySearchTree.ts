import IBinarySearchTreeData from './IBinarySearchTreeData';

interface IBinarySearchTree<T> {
	get data(): IBinarySearchTreeData<T>;
	get min(): T | null;
	insert(_value: T): T;
	walkInOrder(_callback: (_value: T) => any): void;
	walkPreOrder(_callback: (_value: T) => any): void;
	walkPostOrder(_callback: (_value: T) => any): void;
}

export default IBinarySearchTree;
