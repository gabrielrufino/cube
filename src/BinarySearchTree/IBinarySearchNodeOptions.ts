interface IBinarySearchNodeOptions<T> {
  inputs?: T[]
  lessThanOrEqualTo?: (_value1: T, _value2: T) => boolean
}

export default IBinarySearchNodeOptions
