# Cube - Array/List

The **List** data structure is just an alias to the **Array** data structure.

```js
import cube from '@gabrielrufino/cube'

console.log(cube.Array === cube.List) // true
```

You can initialize an empty array or an array with some elements:

```js
import cube from '@gabrielrufino/cube'

const array1 = new cube.Array()
const array2 = new cube.Array(1, 2, 3, 4)
```

Use the property `.data` to access the elements in the array:

```js
import cube from '@gabrielrufino/cube'

const array = new cube.Array(1, 2, 3, 4)
console.log(array.data) // [ 1, 2, 3, 4 ]
```

Use the property `.size` to get how many elements the array has:

```js
import cube from '@gabrielrufino/cube'

const array = new cube.Array(1, 2, 3, 4)
console.log(array.size) // 4
```

Use the method `.insertInLastPosition()` to put a new element in the last position of the array:

```js
import cube from '@gabrielrufino/cube'

const array = new cube.Array(1, 2, 3)
array.insertInLastPosition(4)
console.log(array.data) // [ 1, 2, 3, 4 ]
```

Use the method `.insertInFirstPosition()` to put a new element ein the first position of the array:

```js
import cube from '@gabrielrufino/cube'

const array = new cube.Array(2, 3, 4)
array.insertInFirstPosition(1)
console.log(array.data) // [ 1, 2, 3, 4 ]
```

Use the method `.removeFromLastPosition()` to remove the last element from the array:

```js
import cube from '@gabrielrufino/cube'

const array = new cube.Array(1, 2, 3, 4)
array.removeFromLastPosition()
console.log(array.data) // [ 1, 2, 3 ]
```

Use the method `.removeFromFirstPosition()` to remove the first element from the array:

```js
import cube from '@gabrielrufino/cube'

const array = new cube.Array(1, 2, 3, 4)
array.removeFromFirstPosition()
console.log(array.data) // [ 2, 3, 4 ]
```

Use the method `.removeFromPosition()` to remove an element from some arbitrary position:

```js
import cube from '@gabrielrufino/cube'

const array = new cube.Array(1, 2, 3, 4)
array.removeFromPosition(2)
console.log(array.data) // [ 1, 2, 4 ]
```
