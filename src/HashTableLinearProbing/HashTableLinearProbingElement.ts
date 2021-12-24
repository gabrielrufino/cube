/* eslint-disable no-unused-vars */
/* eslint-disable no-useless-constructor */

export default class HashTableLinearProbingElement<T> {
	constructor(
		public key: string,
		public value: T,
	) {}

	[Symbol.toPrimitive](type: 'string' | 'number'): string | number | null {
		const options = {
			string:	`{ ${this.key} => ${this.value} }`,
			number: 2,
		};

		return options[type] || null;
	}
}
