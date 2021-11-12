import {Stack} from '..';

export default class Algorithms {
	public static decimalToBinary(n: number) {
		const stack = new Stack();

		while (n > 0) {
			const rem = Math.floor(n % 2);
			stack.push(rem);
			n = Math.floor(n / 2);
		}

		let binary = '';
		while (!stack.isEmpty) {
			// eslint-disable-next-line no-unsafe-optional-chaining
			binary += stack.pop()?.toString();
		}

		return binary;
	}
}
