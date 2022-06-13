# Cube - Dictionary

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
