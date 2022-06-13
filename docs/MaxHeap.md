
# Cube - Max Heap

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
