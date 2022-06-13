# Cube - Hash Table

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
