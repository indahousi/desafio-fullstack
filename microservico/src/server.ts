import 'dotenv/config'
import app from './app'
import Logger from './commons/helpers/logger'

import './database'

const port = process.env.PORT || 4000

app.listen(port, () => Logger.info(`Server initialized on port: ${port}`))
