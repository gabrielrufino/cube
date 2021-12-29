interface IGraph {
	get isDirected(): boolean;
	get data(): { [key: string]: string[] };
	get size(): number;
	get nodes(): string[];
	get edges(): [string, string][];
	insert(_node: string): string | null;
	connect(_node1: string, _node2: string): [string, string];
	breadthFirstSearch(_startNode: string, _callback: (_node: string) => void): void;
}

export default IGraph;
