import type HashTableLinearProbingElement from './HashTableLinearProbingElement'

interface IHashTableLinearProbingData<T> {
  [index: number]: HashTableLinearProbingElement<T>
}

export default IHashTableLinearProbingData
