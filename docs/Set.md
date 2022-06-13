# Cube - Set

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
