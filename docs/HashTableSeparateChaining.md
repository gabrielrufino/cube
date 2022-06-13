# Cube - Hash Table Separate Chaining

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
