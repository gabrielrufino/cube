# Cube

Data Structures and Algorithms made in Typescript

## Getting started

#### Installing package

```bash
npm i @gabrielrufino/cube
```

#### Importing package

<small>ESModules:</small>
```js
import cube from '@gabrielrufino/cube'
```

<small>CommonJS:</small>
```js
const cube = require('@gabrielrufino/cube')
```

## Data Structures

#### Array/List

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

#### Stack

You can initialize an empty stack or a stack with some elements:

```js
import cube from '@gabrielrufino/cube'

const stack1 = new cube.Stack()
const stack2 = new cube.Stack(1, 2, 3, 4)
```

Use the property `.data` to access the elements in the stack:

```js
import cube from '@gabrielrufino/cube'

const stack = new cube.Stack(1, 2, 3, 4)
console.log(stack.data) // [ 1, 2, 3, 4 ]
```

Use the property `.size` to get how many elements the stack has:

```js
import cube from '@gabrielrufino/cube'

const stack = new cube.Stack(1, 2, 3, 4)
console.log(stack.size) // 4
```

Use the method `.push()` to insert a new element in the top of the stack:

```js
import cube from '@gabrielrufino/cube'

const stack = new cube.Stack(1, 2, 3)
stack.push(4)
console.log(stack.data) // [ 1, 2, 3, 4 ]
```

Use the method `.pop()` to get and remove the element in the top of the stack:

```js
import cube from '@gabrielrufino/cube'

const stack = new cube.Stack(1, 2, 3, 4)
const element = stack.pop()
console.log(stack.data) // [ 1, 2, 3 ]
console.log(element) // 4
```

Use the method `.peek()` to get the element in the top of the stack without remove:

```js
import cube from '@gabrielrufino/cube'

const stack = new cube.Stack(1, 2, 3, 4)
const element = stack.peek()
console.log(stack.data) // [ 1, 2, 3, 4 ]
console.log(element) // 4
```

Use the method `.clear()` to remove all elements from stack:

```js
import cube from '@gabrielrufino/cube'

const stack = new cube.Stack(1, 2, 3, 4)
stack.clear()
console.log(stack.data) // []
```

Use the property `.isEmpty` to find out if the stack is empty:

```js
import cube from '@gabrielrufino/cube'

const stack1 = new cube.Stack()
const stack2 = new cube.Stack(1, 2, 3, 4)
console.log(stack1.isEmpty) // true
console.log(stack2.isEmpty) // false
```

#### Queue

You can initialize an empty queue or a queue with some elements:

```js
import cube from '@gabrielrufino/cube'

const queue1 = new cube.Queue()
const queue2 = new cube.Queue(1, 2, 3, 4)
```

Use the property `.data` to access the elements in the queue:

```js
import cube from '@gabrielrufino/cube'

const queue = new cube.Queue(1, 2, 3, 4)
console.log(queue.data) // [ 1, 2, 3, 4 ]
```

Use the property `.size` to get how many elements the queue has:

```js
import cube from '@gabrielrufino/cube'

const queue = new cube.Queue(1, 2, 3, 4)
console.log(queue.size) // 4
```

Use the method `.enqueue()` to put a new element at the end of the queue:

```js
import cube from '@gabrielrufino/cube'

const queue = new cube.Queue(1, 2, 3)
queue.enqueue(4);
console.log(queue.data) // [ 1, 2, 3, 4 ]
```

Use the method `.dequeue()` to get and remove the first element of the queue:

```js
import cube from '@gabrielrufino/cube'

const queue = new cube.Queue(1, 2, 3, 4)
const element = queue.dequeue();
console.log(queue.data) // [ 2, 3, 4 ]
console.log(element) // 1
```

Use the method `.peek()` to get the first element of the queue without removing:

```js
import cube from '@gabrielrufino/cube'

const queue = new cube.Queue(1, 2, 3, 4)
const element = queue.peek()
console.log(queue.data) // [ 1, 2, 3, 4 ]
console.log(element) // 1
```

Use the method `.clear()` to remove all the elements in the queue:

```js
import cube from '@gabrielrufino/cube'

const queue = new cube.Queue(1, 2, 3, 4)
queue.clear()
console.log(queue.data) // []
```
