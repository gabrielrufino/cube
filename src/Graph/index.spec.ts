import {describe, it, expect, jest} from '@jest/globals';
import faker from 'faker';

import Graph from './';
import GraphNodeNotFoundError from './GraphNodeNotFoundError';

describe('Graph', () => {
	it('Should create an empty graph without problems', () => {
		const graph = new Graph();

		expect(graph.data).toEqual({});
		expect(graph.size).toBe(0);
	});

	it('Should create a filled graph without problems', () => {
		const graph = new Graph({
			inputs: {
				A: ['B', 'C', 'D'],
				B: ['A', 'C'],
				C: ['A', 'B'],
				D: ['A'],
			},
		});

		expect(graph.data).toEqual({
			A: ['B', 'C', 'D'],
			B: ['A', 'C'],
			C: ['A', 'B'],
			D: ['A'],
		});
		expect(graph.size).toBe(4);
	});

	it('Should throw an error when receive a link with a non existent node', () => {
		expect(() => {
			// eslint-disable-next-line no-new
			new Graph({
				inputs: {
					A: ['B'],
					B: ['C'],
					C: [],
				},
			});
		}).not.toThrow(new GraphNodeNotFoundError('C'));

		expect(() => {
			// eslint-disable-next-line no-new
			new Graph({
				inputs: {
					A: ['B'],
					B: ['C'],
				},
			});
		}).toThrow(new GraphNodeNotFoundError('C'));
	});

	describe('.isDirected', () => {
		it('Should be true when the graph is directed', () => {
			const graph = new Graph({
				isDirected: true,
			});

			expect(graph.isDirected).toBe(true);
		});

		it('Should be false when the graph is not directed', () => {
			const graph = new Graph({
				isDirected: false,
			});

			expect(graph.isDirected).toBe(false);
		});
	});

	describe('.nodes', () => {
		it('Should be the graph nodes', () => {
			const graph = new Graph({
				inputs: {
					A: ['B'],
					B: ['C'],
					C: [],
				},
			});

			expect(graph.nodes.sort()).toEqual(['A', 'B', 'C'].sort());
		});
	});

	describe('.edges', () => {
		it('Should be the correct edges when the graph is directed', () => {
			const graph = new Graph({
				inputs: {
					A: ['B'],
					B: ['A', 'C'],
					C: [],
				},
				isDirected: true,
			});

			expect(graph.edges).toEqual([
				['A', 'B'],
				['B', 'A'],
				['B', 'C'],
			]);
		});

		it('Should be the correct edges when the graph is not directed', () => {
			const graph = new Graph({
				inputs: {
					A: ['B'],
					B: ['A', 'C'],
					C: ['B'],
				},
				isDirected: false,
			});

			expect(graph.edges).toEqual([
				['A', 'B'],
				['B', 'C'],
			]);
		});
	});

	describe('.insert()', () => {
		it('Should insert a new node in the graph', () => {
			const graph = new Graph();
			graph.insert('A');

			expect(graph.data).toEqual({
				A: [],
			});
			expect(graph.size).toBe(1);
		});

		it('Should return the inserted node', () => {
			const graph = new Graph();
			const returned = graph.insert('A');

			expect(returned).toBe('A');
		});

		it('Should change nothing if the node is already in the graph', () => {
			const graph = new Graph({
				inputs: {
					A: ['B'],
					B: ['A'],
				},
			});
			graph.insert('A');

			expect(graph.data).toEqual({
				A: ['B'],
				B: ['A'],
			});
			expect(graph.size).toBe(2);
		});

		it('Should return null when the node is already in the graph', () => {
			const graph = new Graph({
				inputs: {
					A: ['B'],
					B: ['A'],
				},
			});
			const returned = graph.insert('A');

			expect(returned).toBeNull();
		});
	});

	describe('.connect()', () => {
		it('Should connect two different nodes', () => {
			const graph = new Graph({
				inputs: {
					A: [],
					B: [],
				},
			});
			graph.connect('A', 'B');

			expect(graph.data).toEqual({
				A: ['B'],
				B: ['A'],
			});
			expect(graph.size).toBe(2);
		});

		it('Should throw an error when the first node is not in the graph', () => {
			const graph = new Graph({
				inputs: {
					B: [],
				},
			});

			expect(() => {
				graph.connect('A', 'B');
			}).toThrow(new GraphNodeNotFoundError('A'));
		});

		it('Should throw an error when the second node is not in the graph', () => {
			const graph = new Graph({
				inputs: {
					A: [],
				},
			});

			expect(() => {
				graph.connect('A', 'B');
			}).toThrow(new GraphNodeNotFoundError('B'));
		});

		it('Should connect only the first node to the second when the graph is directed', () => {
			const graph = new Graph({
				isDirected: true,
				inputs: {
					A: [],
					B: [],
				},
			});
			graph.connect('A', 'B');

			expect(graph.data).toEqual({
				A: ['B'],
				B: [],
			});
			expect(graph.size).toBe(2);
		});

		it('Should return the inserted edge', () => {
			const graph = new Graph({
				isDirected: true,
				inputs: {
					A: [],
					B: [],
				},
			});
			const returned = graph.connect('A', 'B');

			expect(returned).toEqual(['A', 'B']);
		});
	});

	describe('.breadthFirstSearch', () => {
		it('Should traverse all the graph', () => {
			const keys = new Array(10).fill(undefined).map(faker.datatype.string);
			const graph = new Graph();

			for (const key of keys) {
				graph.insert(key);
			}

			for (const key1 of keys) {
				for (const key2 of keys) {
					if (Math.random() > 0.5) {
						graph.connect(key1, key2);
					}
				}
			}

			const callback = jest.fn();
			graph.breadthFirstSearch(keys[0], callback);

			expect(callback).toBeCalledTimes(keys.length);
			for (const key of keys) {
				expect(callback).toBeCalledWith(key);
			}
		});

		it('Should throw an error when the start node is not in the graph', () => {
			const graph = new Graph({
				inputs: {
					A: ['B'],
					B: ['A'],
				},
			});

			expect(() => {
				graph.breadthFirstSearch('C', jest.fn());
			}).toThrow(new GraphNodeNotFoundError('C'));
		});
	});

	describe('.getDistancesFrom()', () => {
		it('Should return the distances from the origin to the others nodes', () => {
			const graph = new Graph({
				inputs: {
					A: ['C', 'D', 'E'],
					B: ['C', 'E'],
					C: ['A', 'B'],
					D: ['A'],
					E: ['A', 'B'],
				},
			});
			const returned = graph.getDistancesFrom('B');

			expect(returned).toEqual({
				A: 2,
				B: 0,
				C: 1,
				D: 3,
				E: 1,
			});
		});

		it('Should throw an error when the origin node is not in the graph', () => {
			const graph = new Graph({
				inputs: {
					A: ['B'],
					B: ['A'],
				},
			});

			expect(() => {
				graph.getDistancesFrom('C');
			}).toThrow(new GraphNodeNotFoundError('C'));
		});
	});
});
