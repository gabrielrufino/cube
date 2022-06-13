# Cube - Min Heap

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
