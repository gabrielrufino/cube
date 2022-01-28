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

#### Deck

You can initialize an empty deck or a deck with some elements:

```js
import cube from '@gabrielrufino/cube'

const deck1 = new cube.Deck()
const deck2 = new cube.Deck(1, 2, 3, 4)
```

Use the property `.data` to access the elements in the deck:

```js
import cube from '@gabrielrufino/cube'

const deck = new cube.Deck(1, 2, 3, 4)
console.log(deck.data) // [ 1, 2, 3, 4 ]
```

Use the property `.size` to get how many elements the deck has:

```js
import cube from '@gabrielrufino/cube'

const deck = new cube.Deck(1, 2, 3, 4)
console.log(deck.size) // 4
```

Use the method `.addFront()` to insert a new element in the front of the deck:

```js
import cube from '@gabrielrufino/cube'

const deck = new cube.Deck(2, 3, 4)
deck.addFront(1)
console.log(deck.data) // [ 1, 2, 3, 4 ]
```

Use the method `.addBack()` to insert a new element in the back of the deck:

```js
import cube from '@gabrielrufino/cube'

const deck = new cube.Deck(1, 2, 3)
deck.addBack(4)
console.log(deck.data) // [ 1, 2, 3, 4 ]
```

Use the method `.removeFront()` to get and remove an element from the front of the deck:

```js
import cube from '@gabrielrufino/cube'

const deck = new cube.Deck(1, 2, 3, 4)
const element = deck.removeFront()
console.log(deck.data) // [ 2, 3, 4 ]
console.log(element) // 1
```

Use the method `.removeBack()` to get and remove an element from the back of the deck:

```js
import cube from '@gabrielrufino/cube'

const deck = new cube.Deck(1, 2, 3, 4)
const element = deck.removeBack()
console.log(deck.data) // [ 1, 2, 3 ]
console.log(element) // 4
```

Use the method `.peekFront()` to get an element from the front of the deck without removing:

```js
import cube from '@gabrielrufino/cube'

const deck = new cube.Deck(1, 2, 3, 4)
const element = deck.peekFront()
console.log(deck.data) // [ 1, 2, 3, 4 ]
console.log(element) // 1
```

Use the method `.peekBack()` to get an element from the back of the deck without removing:

```js
import cube from '@gabrielrufino/cube'

const deck = new cube.Deck(1, 2, 3, 4)
const element = deck.peekBack()
console.log(deck.data) // [ 1, 2, 3, 4 ]
console.log(element) // 4
```

#### Linked List

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

#### Doubly Linked List

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

#### Set

You can initialize an empty set or a set with some elements:

```js
import cube from '@gabrielrufino/cube'

const set1 = new cube.Set()
const set2 = new cube.Set(1, 2, 3, 4)
```

Use the property `.data` to access the elements in the set:

```js
import cube from '@gabrielrufino/cube'

const set = new cube.Set(1, 2, 3, 4)
console.log(set.data) // [ 1, 2, 3, 4 ]
```

Use the property `.size` to get how many elements the set has:

```js
import cube from '@gabrielrufino/cube'

const set = new cube.Set(1, 2, 3, 4)
console.log(set.size) // 4
```

Use the method `.has()` to find out if the set has the specified element:

```js
import cube from '@gabrielrufino/cube'

const set = new cube.Set(1, 2, 3, 4)
console.log(set.has(2)) // true
console.log(set.has(5)) // false
```

Use the method `.add()` to insert a new element in the set. If the element is already in the set, nothing changes:

```js
import cube from '@gabrielrufino/cube'

const set = new cube.Set(1, 2, 3)
set.add(4)
console.log(set.data) // [ 1, 2, 3, 4 ]

set.add(4)
console.log(set.data) // [ 1, 2, 3, 4 ]
```

Use the method `.delete()` to remove the specified element from the set:

```js
import cube from '@gabrielrufino/cube'

const set = new cube.Set(1, 2, 3, 4)
set.delete(2)
console.log(set.data) // [ 1, 3, 4 ]
```

Use the method `.clear()` to remove all the elements in the set:

```js
import cube from '@gabrielrufino/cube'

const set = new cube.Set(1, 2, 3, 4)
set.clear()
console.log(set.data) // []
```

Use the method `.union()` to unite two different sets:

```js
import cube from '@gabrielrufino/cube'

const set1 = new cube.Set(1, 2, 3)
const set2 = new cube.Set(2, 3, 4)
const union = set1.union(set2)

console.log(union.data) // [ 1, 2, 3, 4 ]

// You can also use the static method for this operation:
console.log(cube.Set.union(set1, set2).data) // [ 1, 2, 3, 4 ]
```

Use the method `.intersection()` to find out the intersection set between two different sets:

```js
import cube from '@gabrielrufino/cube'

const set1 = new cube.Set(1, 2, 3, 4)
const set2 = new cube.Set(3, 4, 5, 6)
const intersection = set1.intersection(set2)

console.log(intersection.data) // [ 3, 4 ]

// You can also use the static method for this operation:
console.log(cube.Set.intersection(set1, set2).data) // [ 3, 4 ]
```

Use the method `.difference()` to find out the difference set between two different sets:

```js
import cube from '@gabrielrufino/cube'

const set1 = new cube.Set(1, 2, 3, 4)
const set2 = new cube.Set(3, 4, 5, 6)
const difference = set1.difference(set2)

console.log(difference.data) // [ 1, 2 ]

// You can also use the static method for this operation:
console.log(cube.Set.difference(set1, set2).data) // [ 1, 2 ]
```

Use the method `.isSubsetOf()` to find out if the set is subset of the specified set:

```js
import cube from '@gabrielrufino/cube'

const set1 = new cube.Set(1, 2)
const set2 = new cube.Set(1, 2, 3, 4)
const set3 = new cube.Set(3, 4, 5, 6)

console.log(set1.isSubsetOf(set2)) // true
console.log(set1.isSubsetOf(set3)) // false

// You can also use the static method for this operation:
console.log(cube.Set.isSubset(set1, set2)) // true
```

Use the method `.contains()` to find out if the set contains the specified set:

```js
import cube from '@gabrielrufino/cube'

const set1 = new cube.Set(1, 2, 3, 4)
const set2 = new cube.Set(2, 4)
const set3 = new cube.Set(3, 5)

console.log(set1.contains(set2)) // true
console.log(set1.contains(set3)) // false
```

#### Dictionary

You can initialize an empty dictionary or a dictionary with some elements:

```js
import cube from '@gabrielrufino/cube'

const dictionary1 = new cube.Dictionary()
const dictionary2 = new cube.Dictionary({
  first: 1,
  second: 2,
  third: 3,
  fourth: 4
})
```

Use the property `.data` to access the elements in the dictionary:

```js
import cube from '@gabrielrufino/cube'

const dictionary = new cube.Dictionary({
  first: 1,
  second: 2,
  third: 3,
  fourth: 4
})

console.log(dictionary.data) // { first: 1, second: 2, third: 3, fourth: 4 }
```

Use the property `.size` to get how many elements the dictionary has:

```js
import cube from '@gabrielrufino/cube'

const dictionary = new cube.Dictionary({
  first: 1,
  second: 2,
  third: 3,
  fourth: 4
})
console.log(dictionary.size) // 4
```

Use the property `.isEmpty` to find out is the dictionary is empty:

```js
import cube from '@gabrielrufino/cube'

const dictionary1 = new cube.Dictionary()
const dictionary2 = new cube.Dictionary({ first: 1  })

console.log(dictionary1.isEmpty) // true
console.log(dictionary2.isEmpty) // false
```

Use the property `.keys` to get the list of all dictionary keys:

```js
import cube from '@gabrielrufino/cube'

const dictionary = new cube.Dictionary({
  first: 1,
  second: 2,
  third: 3,
  fourth: 4
})
console.log(dictionary.keys) // [ 'first', 'second', 'third', 'fourth' ]
```

Use the property `.values` to get the list of all dictionary values:

```js
import cube from '@gabrielrufino/cube'

const dictionary = new cube.Dictionary({
  first: 1,
  second: 2,
  third: 3,
  fourth: 4
})
console.log(dictionary.values) // [ 1, 2, 3, 4 ]
```

Use the property `.pairs` to get the list of all key value pairs:

```js
import cube from '@gabrielrufino/cube'

const dictionary = new cube.Dictionary({
  first: 1,
  second: 2,
  third: 3,
  fourth: 4
})
console.log(dictionary.pairs) // [ [ 'first', 1 ], [ 'second', 2 ], [ 'third', 3 ], [ 'fourth', 4 ] ]
```

Use the method `.set()` to set a new key value pair in the dictionary:

```js
import cube from '@gabrielrufino/cube'

const dictionary = new cube.Dictionary({
  first: 1
})
dictionary.set('second', 2)
console.log(dictionary.data) // { first: 1, second: 2 }
```

Use the method `.remove()` to remove the key value pair of the specified key:

```js
import cube from '@gabrielrufino/cube'

const dictionary = new cube.Dictionary({
  first: 1,
  second: 2
})
dictionary.remove('first')
console.log(dictionary.data) // { second: 2 }
```

Use the method `.hasKey()` to find out if the dictionary has or not a key value pair with the specified key:

```js
import cube from '@gabrielrufino/cube'

const dictionary = new cube.Dictionary({
  first: 1
})
console.log(dictionary.hasKey('first')) // true
console.log(dictionary.hasKey('second')) // false
```

Use the method `.get()` to get the value of the specified key:

```js
import cube from '@gabrielrufino/cube'

const dictionary = new cube.Dictionary({
  first: 1
})
const value = dictionary.get('first')
console.log(value) // 1
```

Use the method `.clear()` to remove all the key value pairs from the dictionary:

```js
import cube from '@gabrielrufino/cube'

const dictionary = new cube.Dictionary({
  first: 1,
  second: 2,
  third: 3,
  fourth: 4
})
dictionary.clear()
console.log(dictionary.data) // {}
```

Use the method `.forEach()` to go through the dictionary with the specified callback:

```js
import cube from '@gabrielrufino/cube'

const dictionary = new cube.Dictionary({
  first: 1,
  second: 2,
  third: 3,
  fourth: 4,
})
dictionary.forEach((key, value) => {
  console.log(`Key: ${key}, Value: ${value}`)
})
/*
Key: first, Value: 1
Key: second, Value: 2
Key: third, Value: 3
Key: fourth, Value: 4
*/
```

#### Hash Table

You can initialize an empty hash table or a hash table with some elements:

```js
import cube from '@gabrielrufino/cube'

const hashTable1 = new cube.HashTable()
const hashTable2 = new cube.HashTable({
  first: 1,
  second: 2,
  third: 3,
  fourth: 4
})
```

Use the property `.data` to access the elements in the hash table:

```js
import cube from '@gabrielrufino/cube'

const hashTable = new cube.HashTable({
  first: 1,
  second: 2,
  third: 3,
  fourth: 4
})

console.log(hashTable.data) // { '36': 2, '39': 3, '52': 1, '64': 4 }
```

Use the property `.size` to get how many elements the hash table has:

```js
import cube from '@gabrielrufino/cube'

const hashTable = new cube.HashTable({
  first: 1,
  second: 2,
  third: 3,
  fourth: 4
})
console.log(hashTable.size) // 4
```

Use the method `.put()` to insert a new element in the hash table:

```js
import cube from '@gabrielrufino/cube'

const hashTable = new cube.HashTable({
  first: 1
})
hashTable.put('second', 2)
console.log(hashTable.data) // { '36': 2, '52': 1 }
```

Use the method `.get()` to get the value of the specified key:

```js
import cube from '@gabrielrufino/cube'

const hashTable = new cube.HashTable({
  first: 1,
  second: 2
})
const value = hashTable.get('first')

console.log(value) // 1
```

Use the method `.remove()` to remove the key value pair of the specified key:

```js
import cube from '@gabrielrufino/cube'

const hashTable = new cube.HashTable({
  first: 1,
  second: 2
})
hashTable.remove('second')

console.log(hashTable.data) // { '52': 1 }
```

##### Hash Table Separate Chaining

The `HashTableSeparateChaining` class has the same method of the `HashTable` class. The difference is on the collision strategy.

All the values are actually linked lists. This means that in case of conflict, the new element is pushed to the linked list.

```js
import cube from '@gabrielrufino/cube'

const hashTableSeparateChaining = new cube.HashTableSeparateChaining({
  first: 1
})

console.log(hashTableSeparateChaining.data)
/*
{
  '52': LinkedList {}
}
*/

console.log(hashTableSeparateChaining.data['52'].data)
/*
[
  {
    value: HashTableSeparateChainingElement { key: 'first', value: 1 },
    next: null
  }
]
*/

hashTableSeparateChaining.put('tsrif', -1)
console.log(hashTableSeparateChaining.data['52'].data)
/*
[
  {
    value: HashTableSeparateChainingElement { key: 'first', value: 1 },
    next: HashTableSeparateChainingElement { key: 'tsrif', value: -1 }
  },
  {
    value: HashTableSeparateChainingElement { key: 'tsrif', value: -1 },
    next: null
  }
]
*/
```

##### Hash Table Linear Probing

The `HashTableLinearProbing` class has the same method of the `HashTable` class. The difference is on the collision strategy.

In case of conflict, the position of the new element will be the next available position.

```js
import cube from '@gabrielrufino/cube'

const hashTableLinearProbing = new cube.HashTableLinearProbing({
  first: 1
}, {
  maxSize: 2
})

console.log(hashTableLinearProbing.data)
/*
{ '0': HashTableLinearProbingElement { key: 'first', value: 1 } }
*/

hashTableLinearProbing.put('tsrif', -1)
console.log(hashTableLinearProbing.data)
/*
{
  '0': HashTableLinearProbingElement { key: 'first', value: 1 },
  '1': HashTableLinearProbingElement { key: 'tsrif', value: -1 }
}
*/
```

#### Binary Search Tree

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

#### Min Heap

You can initialize an empty min heap or a min heap with some elements:

```js
import cube from '@gabrielrufino/cube'

const minHeap1 = new cube.MinHeap()
const minHeap2 = new cube.MinHeap({
  inputs: [4, 2, 1, 3, 5],
})
```

Use the property `.data` to access the elements in the min heap:

```js
import cube from '@gabrielrufino/cube'

const minHeap = new cube.MinHeap({
  inputs: [4, 2, 1, 3, 5],
})

console.log(minHeap.data) // [ 1, 3, 2, 4, 5 ]
```

Use the property `.size` to get how many elements the min heap has:

```js
import cube from '@gabrielrufino/cube'

const minHeap = new cube.MinHeap({
  inputs: [4, 2, 1, 3, 5],
})
console.log(minHeap.size) // 5
```

Use the property `.isEmpty` to find out if the min heap is empty:

```js
import cube from '@gabrielrufino/cube'

const minHeap1 = new cube.MinHeap()
const minHeap2 = new cube.MinHeap({
  inputs: [4, 2, 1, 3, 5],
})
console.log(minHeap1.isEmpty) // true
console.log(minHeap2.isEmpty) // false
```

Use the property `.min` to get the minimum element in the min heap:

```js
import cube from '@gabrielrufino/cube'

const minHeap = new cube.MinHeap({
  inputs: [4, 2, 1, 3, 5],
})
console.log(minHeap.min) // 1
```

Use the method `.insert()` to insert a new element in the min heap:

```js
import cube from '@gabrielrufino/cube'

const minHeap = new cube.MinHeap({
  inputs: [4, 2, 1, 3, 5],
})
minHeap.insert(6)

console.log(minHeap.data) // [ 1, 3, 2, 4, 5, 6 ]
```

Use the method `.extract()` to extract the min value of the min heap:

```js
import cube from '@gabrielrufino/cube'

const minHeap = new cube.MinHeap({
  inputs: [4, 2, 1, 3, 5]
})
const min = minHeap.extract()

console.log(min) // 1
console.log(minHeap.data) // [ 2, 4, 3, 5 ]
```

#### Max Heap

You can initialize an empty max heap or a max heap with some elements:

```js
import cube from '@gabrielrufino/cube'

const maxHeap1 = new cube.MaxHeap()
const maxHeap2 = new cube.MaxHeap({
  inputs: [4, 2, 1, 3, 5],
})
```

Use the property `.data` to access the elements in the max heap:

```js
import cube from '@gabrielrufino/cube'

const maxHeap = new cube.MaxHeap({
  inputs: [4, 2, 1, 3, 5],
})

console.log(maxHeap.data) // [ 5, 4, 1, 2, 3 ]
```

Use the property `.size` to get how many elements the max heap has:

```js
import cube from '@gabrielrufino/cube'

const maxHeap = new cube.MaxHeap({
  inputs: [4, 2, 1, 3, 5],
})
console.log(maxHeap.size) // 5
```

Use the property `.isEmpty` to find out if the max heap is empty:

```js
import cube from '@gabrielrufino/cube'

const maxHeap1 = new cube.MaxHeap()
const maxHeap2 = new cube.MaxHeap({
  inputs: [4, 2, 1, 3, 5],
})
console.log(maxHeap1.isEmpty) // true
console.log(maxHeap2.isEmpty) // false
```

Use the property `.max` to get the maximum element in the max heap:

```js
import cube from '@gabrielrufino/cube'

const maxHeap = new cube.MaxHeap({
  inputs: [4, 2, 1, 3, 5],
})
console.log(maxHeap.max) // 5
```

Use the method `.insert()` to insert a new element in the max heap:

```js
import cube from '@gabrielrufino/cube'

const maxHeap = new cube.MaxHeap({
  inputs: [4, 2, 1, 3, 5],
})
maxHeap.insert(6)

console.log(maxHeap.data) // [ 6, 4, 5, 2, 3, 1 ]
```

Use the method `.extract()` to extract the max value of the max heap:

```js
import cube from '@gabrielrufino/cube'

const maxHeap = new cube.MaxHeap({
  inputs: [4, 2, 1, 3, 5]
})
const max = maxHeap.extract()

console.log(max) // 5
console.log(maxHeap.data) // [ 4, 3, 1, 2 ]
```
