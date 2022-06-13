# Cube - Linked List

You can initialize an empty linked list or a linked list with some elements:

```js
import cube from '@gabrielrufino/cube'

const linkedList1 = new cube.LinkedList()
const linkedList2 = new cube.LinkedList(1, 2, 3, 4)
```

Use the property `.data` to access the elements in the linked list:

```js
import cube from '@gabrielrufino/cube'

const linkedList = new cube.LinkedList(1, 2, 3, 4)
console.log(linkedList.data)
/*
[
  { value: 1, next: 2 },
  { value: 2, next: 3 },
  { value: 3, next: 4 },
  { value: 4, next: null }
]
*/
```

Use the property `.size` to get how many elements the linked list has:

```js
import cube from '@gabrielrufino/cube'

const linkedList = new cube.LinkedList(1, 2, 3, 4)
console.log(linkedList.size) // 4
```

Use the property `.isEmpty` to find out if the linked list is empty:

```js
import cube from '@gabrielrufino/cube'

const linkedList1 = new cube.LinkedList()
const linkedList2 = new cube.LinkedList(1, 2, 3, 4)
console.log(linkedList1.isEmpty) // true
console.log(linkedList2.isEmpty) // false
```

Use the method `.push()` to insert a new element in the linked list:

```js
import cube from '@gabrielrufino/cube'

const linkedList = new cube.LinkedList(1, 2, 3)
linkedList.push(4)
console.log(linkedList.data)
/*
[
  { value: 1, next: 2 },
  { value: 2, next: 3 },
  { value: 3, next: 4 },
  { value: 4, next: null }
]
*/
```

Use the method `.remove()` to remove an element from the linked lisr:

```js
import cube from '@gabrielrufino/cube'

const linkedList = new cube.LinkedList(1, 2, 3, 4)
linkedList.remove(3)
console.log(linkedList.data)
/*
[
  { value: 1, next: 2 },
  { value: 2, next: 4 },
  { value: 4, next: null }
]
*/
```

Use the method `.removeFromPosition()` to remove an element from the received position in the linked list:

```js
import cube from '@gabrielrufino/cube'

const linkedList = new cube.LinkedList(1, 2, 3, 4)
linkedList.removeFromPosition(2)
console.log(linkedList.data)
/*
[
  { value: 1, next: 2 },
  { value: 2, next: 4 },
  { value: 4, next: null }
]
*/
```

Use the method `.getFromPosition()` to find some element at the received position in the linked list:

```js
import cube from '@gabrielrufino/cube'

const linkedList = new cube.LinkedList(1, 2, 3, 4)
const element = linkedList.getFromPosition(1)
console.log(element) // { value: 2, next: 3 }
```

Use the method `.insertInPosition()` to insert a new element in the specified position:

```js
import cube from '@gabrielrufino/cube'

const linkedList = new cube.LinkedList(1, 2, 4)
linkedList.insertInPosition(3, 2)
console.log(linkedList.data)
/*
[
  { value: 1, next: 2 },
  { value: 2, next: 3 },
  { value: 3, next: 4 },
  { value: 4, next: null }
]
*/
```

Use the method `.positionOf()` to find out the position of the specified element:

```js
import cube from '@gabrielrufino/cube'

const linkedList = new cube.LinkedList(1, 2, 3, 4)
const position = linkedList.positionOf(2)
console.log(position) // 1
```
