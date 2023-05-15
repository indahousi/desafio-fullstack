/* eslint-disable linebreak-style */
import { Router } from 'express'

import healthcheckRouter from './api/healthcheck/healthcheck.router'
import propertiesRouter from './api/properties/properties.router'

const router = Router()

router.use(healthcheckRouter)
router.use(propertiesRouter)

export default router
