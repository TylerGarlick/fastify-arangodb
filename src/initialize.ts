import { Database } from 'arangojs'
import bootstrap from './bootstrap'

export interface InitializeConfiguration {
  url: string
  databaseName: string
  username?: string
  password?: string
  collections: string[]
  shouldBootstrap: boolean
}

export default async function (configuration: InitializeConfiguration = { url: '', databaseName: '', collections: [], shouldBootstrap: false }) {
  const db = new Database({
    url: configuration.url,
    databaseName: configuration.databaseName,
    auth: {
      username: configuration.username,
      password: configuration.password
    }
  } as any)

  if (configuration.shouldBootstrap) {
    await bootstrap({})
  }


  return {
    db,
    collections: configuration.collections.map(collection => ({
      [`${collection}`]: db.collection(collection as string)
    })).flat()
  }
}
