interface IMinHeapOptions<T> {
  lessThanOrEqualTo?: (_value1: T, _value2: T) => boolean
  inputs?: Readonly<T[]>
}

export default IMinHeapOptions
