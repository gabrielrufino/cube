import IBinarySearchTreeData from './IBinarySearchTreeData';

interface IBinarySearchTree<T> {
	get data(): IBinarySearchTreeData<T>;
	insert(_value: T): T;
	walkInOrder(_callback: (_value: T) => any): void;
}

export default IBinarySearchTree;
