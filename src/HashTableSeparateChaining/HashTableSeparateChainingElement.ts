export default class HashTableSeparateChainingElement<T> {
  constructor(
    public key: string,
    public value: T,
  ) {}

  private [Symbol.toPrimitive](type: 'default' | 'number' | 'string'): boolean | number | string {
    const primitives = {
      default: true,
      number: 2,
      string: `{ ${this.key} => ${this.value}}`,
    }

    return primitives[type]
  }
}
