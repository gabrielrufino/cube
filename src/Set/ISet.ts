import type Set from './'

interface ISet<T> {
  get data(): T[]
  get size(): number
  has: (_elemet: T) => boolean
  add: (_element: T) => T | null
  delete: (_element: T) => T | null
  clear: (_element: T) => T[]
  union: (_set: Set<T>) => Set<T>
  intersection: (_set: Set<T>) => Set<T>
  difference: (_set: Set<T>) => Set<T>
  isSubsetOf: (_set: Set<T>) => boolean
  contains: (_set: Set<T>) => boolean
}

export default ISet
