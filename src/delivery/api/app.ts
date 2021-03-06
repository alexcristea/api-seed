import { RouteUnavailableMiddleware } from './middleware/RouteUnavailableMiddleware'
import { ErrorHandlerMiddleware } from './middleware/ErrorHandlerMiddleware'
import { HelloWorldController } from './controller/HelloWorldController'

const dotenv = require('dotenv')
dotenv.config()

const hostname = process.env.HOSTNAME ?? '0.0.0.0'
const port = parseInt(process.env.PORT ?? '8080')

const express = require('express')
const app = express()
app.use(express.json())

app.get('/say-hello/:name', HelloWorldController)

app.use(RouteUnavailableMiddleware)
app.use(ErrorHandlerMiddleware)

app.listen(port, hostname, () => {
  console.log(`> Server running at http://${hostname}:${port}/`)
})
