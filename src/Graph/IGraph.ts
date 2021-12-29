interface IGraph {
	get data(): { [key: string]: string[] };
	get size(): number;
	insert(_node: string): string | null;
}

export default IGraph;
