import type { FastifyInstance } from 'fastify'

import { verifyJWT } from '../../middlewares/verify-jwt'
import { create } from './create.controller'
import { validate } from './validate.controller'
import { history } from './history.controller'
import { metrics } from './metrics'

export async function checkInsRoutes(app: FastifyInstance) {
  app.addHook('onRequest', verifyJWT)

  app.post('/gyms/:gymId/check-ins', create)
  app.patch('/check-ins/:checkInId/validate', validate)

  app.get('/check-ins/history', history)
  app.get('/check-ins/metrics', metrics)
}