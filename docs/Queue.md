# Cube - Queue

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
queue.enqueue(4)
console.log(queue.data) // [ 1, 2, 3, 4 ]
```

Use the method `.dequeue()` to get and remove the first element of the queue:

```js
import cube from '@gabrielrufino/cube'

const queue = new cube.Queue(1, 2, 3, 4)
const element = queue.dequeue()
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
