# Cube - Graph

You can initialize an empty graph or a graph with some elements:

```js
import cube from '@gabrielrufino/cube'

const graph1 = new cube.Graph()
const graph2 = new cube.Graph({
  inputs: {
    A: ['B', 'C', 'D'],
    B: ['A', 'C'],
    C: ['A', 'B'],
    D: ['A'],
  }
})
```

Use the property `.data` to access the elements in the graph:

```js
import cube from '@gabrielrufino/cube'

const graph = new cube.Graph({
  inputs: {
    A: ['B', 'C', 'D'],
    B: ['A', 'C'],
    C: ['A', 'B'],
    D: ['A'],
  }
})

console.log(graph.data)
/*
{
  A: [ 'B', 'C', 'D' ],
  B: [ 'A', 'C' ],
  C: [ 'A', 'B' ],
  D: [ 'A' ]
}
*/
```

Use the property `.size` to get how many elements the graph has:

```js
import cube from '@gabrielrufino/cube'

const graph = new cube.Graph({
  inputs: {
    A: ['B', 'C', 'D'],
    B: ['A', 'C'],
    C: ['A', 'B'],
    D: ['A'],
  }
})
console.log(graph.size) // 4
```

Use the property `.nodes` to get a list of all the nodes in the graph:

```js
import cube from '@gabrielrufino/cube'

const graph = new cube.Graph({
  inputs: {
    A: ['B', 'C', 'D'],
    B: ['A', 'C'],
    C: ['A', 'B'],
    D: ['A'],
  }
})
console.log(graph.nodes) // [ 'A', 'B', 'C', 'D' ]
```

Use the property `.edges` to get a list of all the links between nodes in the graph:

```js
import cube from '@gabrielrufino/cube'

const graph = new cube.Graph({
  inputs: {
    A: ['B', 'C', 'D'],
    B: ['A', 'C'],
    C: ['A', 'B'],
    D: ['A'],
  }
})
console.log(graph.edges)
/*
[
  [ 'A', 'B' ],
  [ 'A', 'C' ],
  [ 'A', 'D' ],
  [ 'B', 'C' ]
]
*/
```

Use the method `.insert()` to insert a new node in the graph:

```js
import cube from '@gabrielrufino/cube'

const graph = new cube.Graph({
  inputs: {
    A: ['B', 'C', 'D'],
    B: ['A', 'C'],
    C: ['A', 'B'],
    D: ['A'],
  }
})
graph.insert('E')

console.log(graph.data)
/*
{
  A: [ 'B', 'C', 'D' ],
  B: [ 'A', 'C' ],
  C: [ 'A', 'B' ],
  D: [ 'A' ],
  E: []
}
*/

console.log(graph.nodes) // [ 'A', 'B', 'C', 'D', 'E' ]
```

Use the method `.connect()` to connect two disconnected nodes:

```js
import cube from '@gabrielrufino/cube'

const graph = new cube.Graph({
  inputs: {
    A: ['B', 'C', 'D'],
    B: ['A', 'C'],
    C: ['A', 'B'],
    D: ['A'],
    E: []
  }
})

console.log(graph.data)
/*
{
  A: [ 'B', 'C', 'D' ],
  B: [ 'A', 'C' ],
  C: [ 'A', 'B' ],
  D: [ 'A' ],
  E: []
}
*/

graph.connect('A', 'E')

console.log(graph.data)
/*
{
  A: [ 'B', 'C', 'D', 'E' ],
  B: [ 'A', 'C' ],
  C: [ 'A', 'B' ],
  D: [ 'A' ],
  E: [ 'A' ]
}
*/
```

Use the method `.breadthFirstSearch()` to walk through all the graph:

```js
import cube from '@gabrielrufino/cube'

const graph = new cube.Graph({
  inputs: {
    A: ['B', 'C', 'D'],
    B: ['A', 'C'],
    C: ['A', 'B'],
    D: ['A'],
  }
})

graph.breadthFirstSearch('A', value => {
  console.log(value)
})
/*
A
B
C
D
*/
```

Use the method `.getDistancesFrom()` to get the distance between the specified node and the rest of nodes:

```js
import cube from '@gabrielrufino/cube'

const graph = new cube.Graph({
  inputs: {
    A: ['B', 'C', 'D'],
    B: ['A', 'C'],
    C: ['A', 'B'],
    D: ['A'],
  }
})

const distances = graph.getDistancesFrom('B')
console.log(distances)
/*
{
  A: 1,
  B: 0,
  C: 1,
  D: 2
}
*/
```
