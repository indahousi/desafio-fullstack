import express from 'express'
import morgan from 'morgan'
import bodyParser from 'body-parser'

import routes from './routes'

import apiVersion from './commons/middlewares/api-version'

const morganFormat = ':remote-addr - :method :url :status :response-time ms - :res[content-length]'

class App {
  public express: express.Application

  public constructor() {
    this.express = express()

    this.middlewares()
    this.configs()
  }

  private configs(): void {
    this.express.use(routes)
    this.express.disable('x-powered-by')
  }

  private middlewares(): void {
    this.express.use(express.json())
    this.express.use(bodyParser.urlencoded({ extended: false }))
    this.express.use(bodyParser.json())
    this.express.use(morgan(morganFormat))
    this.express.use(apiVersion)
  }
}

export default new App().express
