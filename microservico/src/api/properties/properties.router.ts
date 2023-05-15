import { Router } from 'express'
import { validate } from '../../commons/middlewares/request-validator'
import PropertiesController from './properties.controller'
import { idRule } from './validator/properties.validation'

const propertiesRouter = Router()
const { index, show } = PropertiesController

propertiesRouter.get('/properties', index)
propertiesRouter.get('/properties/:id', validate(idRule), show)

export default propertiesRouter
