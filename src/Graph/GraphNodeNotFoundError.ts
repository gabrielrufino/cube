export default class GraphNodeNotFoundError extends Error {
	constructor(node: string) {
		super(`Node ${node} not found`);

		this.name = 'GraphNodeNotFoundError';
	}
}
