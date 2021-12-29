interface IGraph {
	get isDirected(): boolean;
	get data(): { [key: string]: string[] };
	get size(): number;
	insert(_node: string): string | null;
	connect(_node1: string, _node2: string): [string, string];
}

export default IGraph;
