import winston from 'winston'

const logLevel = process.env.LOG_LEVEL || 'debug'

const Logger = winston.createLogger({
  level: logLevel,
  transports: [
    new winston.transports.Console({
      format: winston.format.combine(
        winston.format.colorize({ all: true }),
        winston.format.simple(),
      ),
    }),
  ],
})

export default Logger
