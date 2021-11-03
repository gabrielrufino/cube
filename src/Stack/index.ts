import DataStructure from '../../build/DataStructure';

export default class Stack<T = number> extends DataStructure<T> {
	constructor(...inputs: T[]) {
		super(inputs);
	}
}
