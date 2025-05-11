import { faker } from '@faker-js/faker'
import { describe, expect, it } from 'vitest'

import GraphNodeNotFoundError from './GraphNodeNotFoundError'

describe(GraphNodeNotFoundError.name, () => {
  it('should instance the error', () => {
    const node = faker.string.sample()
    const error = new GraphNodeNotFoundError(node)

    expect(error.name).toBe('GraphNodeNotFoundError')
    expect(error.message).toBe(`Node ${node} not found`)
  })
})
