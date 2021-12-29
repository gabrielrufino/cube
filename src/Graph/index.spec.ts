import {describe, it, expect} from '@jest/globals';

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

	it('Lab', () => {
		const graph = new Graph({
			inputs: {
				A: ['B'],
				B: ['C'],
				C: [],
			},
		});

		console.log(
			graph.data,
		);
	});
});
