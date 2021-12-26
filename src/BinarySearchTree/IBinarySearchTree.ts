import IBinarySearchTreeData from './IBinarySearchTreeData';

interface IBinarySearchTree<T> {
	get data(): IBinarySearchTreeData<T>;
	insert(_value: T): T;
}

export default IBinarySearchTree;
