# Cube - Binary Search Tree

You can initialize an empty binary search tree or a binary search tree with some elements:

```js
import cube from '@gabrielrufino/cube'

const bst1 = new cube.BinarySearchTree()
const bst2 = new cube.BinarySearchTree({
  inputs: [4, 2, 1, 3, 5],
})
```

Use the property `.data` to access the elements in the binary search tree:

```js
import cube from '@gabrielrufino/cube'

const bst = new cube.BinarySearchTree({
  inputs: [4, 2, 1, 3, 5],
})

console.log(bst.data)
/*
{
  left: {
    left: { left: null, right: null, value: 1 },
    right: { left: null, right: null, value: 3 },
    value: 2
  },
  right: { left: null, right: null, value: 5 },
  value: 4
}
*/
```

Use the property `.size` to get how many elements the binary search tree has:

```js
import cube from '@gabrielrufino/cube'

const bst = new cube.BinarySearchTree({
  inputs: [4, 2, 1, 3, 5],
})
console.log(bst.size) // 5
```

Use the method `.insert()` to insert a new element in the binary search tree:

```js
import cube from '@gabrielrufino/cube'

const bst = new cube.BinarySearchTree({
  inputs: [2, 1, 4]
})
bst.insert(3)

console.log(bst.data)
/*
{
  left: { left: null, right: null, value: 1 },
  right: {
    left: { left: null, right: null, value: 3 },
    right: null,
    value: 4
  },
  value: 2
}
*/
```

Use the method `.walkInOrder()` to walk through the tree using the algorithm **in order** with the specified callback:

```js
import cube from '@gabrielrufino/cube'

const bst = new cube.BinarySearchTree({
  inputs: [2, 1, 4, 3]
})

bst.walkInOrder(value => {
  console.log(value)
})
/*
1
2
3
4
*/
```

Use the method `.walkPreOrder()` to walk through the tree using the algorithm **pre order** with the specified callback:

```js
import cube from '@gabrielrufino/cube'

const bst = new cube.BinarySearchTree({
  inputs: [2, 1, 4, 3]
})

bst.walkPreOrder(value => {
  console.log(value)
})
/*
2
1
4
3
*/
```

Use the method `.walkPostOrder()` to walk through the tree using the algorithm **post order** with the specified callback:

```js
import cube from '@gabrielrufino/cube'

const bst = new cube.BinarySearchTree({
  inputs: [2, 1, 4, 3]
})

bst.walkPostOrder(value => {
  console.log(value)
})

/*
1
3
4
2
*/
```

Use the property `.min` to get the minimum element in the binary search tree:

```js
import cube from '@gabrielrufino/cube'

const bst = new cube.BinarySearchTree({
  inputs: [2, 1, 4, 3]
})
console.log(bst.min) // 1
```

Use the property `.max` to get the maximum element in the binary search tree:

```js
import cube from '@gabrielrufino/cube'

const bst = new cube.BinarySearchTree({
  inputs: [2, 1, 4, 3]
})
console.log(bst.max) // 4
```

Use the method `.search()` to find out if the specified element in the binary search tree:

```js
import cube from '@gabrielrufino/cube'

const bst = new cube.BinarySearchTree({
  inputs: [2, 1, 4, 3]
})
console.log(bst.search(4)) // true
console.log(bst.search(5)) // false
```

Use the method `.remove()` to remove the specified element from the binary search tree:

```js
import cube from '@gabrielrufino/cube'

const bst = new cube.BinarySearchTree({
  inputs: [2, 1, 4, 3]
})
bst.remove(4)

console.log(bst.search(4)) // false
console.log(bst.data)
/*
{
  left: { left: null, right: null, value: 1 },
  right:  { left: null, right: null, value: 3 },
  value: 2
}
*/
```
