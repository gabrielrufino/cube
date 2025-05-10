interface IDeck<T> {
  addFront: (_element: T) => T
  addBack: (_element: T) => T
  removeFront: () => T | undefined
  removeBack: () => T | undefined
  peekFront: () => T | undefined
  peekBack: () => T | undefined
}

export default IDeck
