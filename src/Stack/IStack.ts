interface IStack<T> {
  push: (_element: T) => T
  pop: () => T | undefined
  peek: () => T | undefined
  clear: () => void
  get isEmpty(): boolean
}

export default IStack
