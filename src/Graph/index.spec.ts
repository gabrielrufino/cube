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
