interface IGraph {
	get data(): { [key: string]: string[] };
	get size(): number;
}

export default IGraph;
