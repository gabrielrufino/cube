interface IMaxHeapOptions<T> {
  greaterThanOrEqualTo?: (_value1: T, _value2: T) => boolean
  inputs?: Readonly<T[]>
}

export default IMaxHeapOptions
