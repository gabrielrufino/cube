# Cube - Deck

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
