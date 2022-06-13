# Cube - Doubly Linked List

You can initialize an empty doubly linked list or a doubly linked list with some elements:

```js
import cube from '@gabrielrufino/cube'

const doublyLinkedList1 = new cube.DoublyLinkedList()
const doublyLinkedList2 = new cube.DoublyLinkedList(1, 2, 3, 4)
```

Use the property `.data` to access the elements in the doubly linked list:

```js
import cube from '@gabrielrufino/cube'

const doublyLinkedList = new cube.DoublyLinkedList(1, 2, 3, 4)
console.log(doublyLinkedList.data)
/*
[
  { previous: null, value: 1, next: 2 },
  { previous: 1, value: 2, next: 3 },
  { previous: 2, value: 3, next: 4 },
  { previous: 3, value: 4, next: null }
]
*/
```

Use the property `.size` to get how many elements the doubly linked list has:

```js
import cube from '@gabrielrufino/cube'

const doublyLinkedList = new cube.DoublyLinkedList(1, 2, 3, 4)
console.log(doublyLinkedList.size) // 4
```

Use the method `.push()` to insert a new element in the doubly linked list:

```js
import cube from '@gabrielrufino/cube'

const doublyLinkedList = new cube.DoublyLinkedList(1, 2, 3)
doublyLinkedList.push(4)
console.log(doublyLinkedList.data)
/*
[
  { previous: null, value: 1, next: 2 },
  { previous: 1, value: 2, next: 3 },
  { previous: 2, value: 3, next: 4 },
  { previous: 3, value: 4, next: null }
]
*/
```

Use the method `.getFromPosition()` to get some element from specified position:

```js
import cube from '@gabrielrufino/cube'

const doublyLinkedList = new cube.DoublyLinkedList(1, 2, 3, 4)
const element = doublyLinkedList.getFromPosition(2)
console.log(element) // { previous: 2, value: 3, next: 4 }
```

Use the method `.positionOf()` to find out the position of some element:

```js
import cube from '@gabrielrufino/cube'

const doublyLinkedList = new cube.DoublyLinkedList(1, 2, 3, 4)
const position = doublyLinkedList.positionOf(3)
console.log(position) // 2
```

Use the method `.insertInPosition()` to insert a new element in the specified position:

```js
import cube from '@gabrielrufino/cube'

const doublyLinkedList = new cube.DoublyLinkedList(1, 3, 4)
doublyLinkedList.insertInPosition(2, 1)
console.log(doublyLinkedList.data)
/*
[
  { previous: null, value: 1, next: 2 },
  { previous: 1, value: 2, next: 3 },
  { previous: 2, value: 3, next: 4 },
  { previous: 3, value: 4, next: null }
]
*/
```

Use the method `.remove()` to remove the specified element:

```js
import cube from '@gabrielrufino/cube'

const doublyLinkedList = new cube.DoublyLinkedList(1, 2, 3, 4)
doublyLinkedList.remove(3)
console.log(doublyLinkedList.data)
/*
[
  { previous: null, value: 1, next: 2 },
  { previous: 1, value: 2, next: 4 },
  { previous: 2, value: 4, next: null }
]
*/
```

Use the method `.removeFromPosition()` to remove the element from the specified element:

```js
import cube from '@gabrielrufino/cube'

const doublyLinkedList = new cube.DoublyLinkedList(1, 2, 3, 4)
doublyLinkedList.removeFromPosition(2)
console.log(doublyLinkedList.data)
/*
[
  { previous: null, value: 1, next: 2 },
  { previous: 1, value: 2, next: 4 },
  { previous: 2, value: 4, next: null }
]
*/
```
