import { assert } from 'console'
import initialize, { InitializeConfiguration } from '../src/initialize'

describe(`initialize`, () => {

  beforeEach(async () => {

    const configuration: InitializeConfiguration = {
      databaseName: 'testing',
      shouldBootstrap: false,
      url: 'http://localhost:8529',
      username: `root`,
      password: `5orange5`,
      collections: []
    }

    const { db } = await initialize(configuration)

    expect(db.name).toBe('testing')
    expect(db).toBeTruthy()
  })

  it(`should connect`, async () => {
    expect(true).toBeTruthy()
  })



})
