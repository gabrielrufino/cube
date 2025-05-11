import type LinkedList from '../LinkedList'

interface IHashTableSeparateChainingData<T> {
  [key: number]: LinkedList<T>
}

export default IHashTableSeparateChainingData
