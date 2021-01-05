import express      from 'express'
import dotenv       from 'dotenv'
import morgan       from 'morgan'
import connectDB    from './config/db.js'
import setLogColors from './middleware/setLogColors.js'

console.log('accessing server.js file'.file)

// Route files
import tickets from './routes/tickets.js'

// Load env variables
dotenv.config()

// Run database
connectDB()

const app = express()

// Development logging middleware
if(process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'))
}

// Use colors module globally
app.use(setLogColors)

// Mount routers
app.use('/tickets', tickets)

// Initialize server port
const PORT = process.env.PORT || 5000
app.listen(
  PORT, 
  console.log(
    `Server running in ${process.env.NODE_ENV} mode on port: ${PORT}`.yellow.bold
  )
)
