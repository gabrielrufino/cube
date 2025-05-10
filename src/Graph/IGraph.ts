interface IGraph {
  get isDirected(): boolean
  get data(): { [key: string]: string[] }
  get size(): number
  get nodes(): string[]
  get edges(): [string, string][]
  insert: (_node: string) => string | null
  // Remove(_node: string): string | null;
  connect: (_node1: string, _node2: string) => [string, string]
  // Disconnect(_node1: string, _node2: string): [string, string] | null;
  breadthFirstSearch: (_startNode: string, _callback: (_node: string) => void) => void
  getDistancesFrom: (_node: string) => { [key: string]: number }
}

export default IGraph
