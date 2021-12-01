import { FastifyInstance, FastifyPluginOptions } from 'fastify'
import fp from 'fastify-plugin'

import initialize from './initialize'
import bootstrap from './bootstrap'

export {
  initialize,
  bootstrap
}

export default fp(async (fastify: FastifyInstance, options: FastifyPluginOptions) => {



})
