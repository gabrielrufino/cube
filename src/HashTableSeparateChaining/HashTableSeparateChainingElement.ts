/* eslint-disable no-useless-constructor */
/* eslint-disable no-unused-vars */

export default class HashTableSeparateChainingElement<T> {
	constructor(
		public key: string,
		public value: T,
	) {}

	private[Symbol.toPrimitive](type: string): string | number | null {
		if (type === 'string') {
			return `{ ${this.key} => ${this.value}}`;
		}

		if (type === 'number') {
			return 2;
		}

		return null;
	}
}
