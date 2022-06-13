# Cube - Hash Table Linear Probing

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
