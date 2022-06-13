# Cube - Stack

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
