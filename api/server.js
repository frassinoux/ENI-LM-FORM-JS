require('dotenv').config({path: '.env.local'})

const express = require('express')
const app = express()

//logger permet de notifier les accès à l'API
const morgan = require('morgan')
app.use(morgan('short'))

// Protection par domaine(origine)
const cors = require('cors')
app.use(cors())



// Suite de 12 outils de sécurité supplémentaires
const helmet = require('helmet')
app.use(helmet())

// Port d'écoute de l'API
const port = 3000

const {connectToDatabase} = require('./utils/db')
connectToDatabase()

// Routes
const restaurantRoute = require('./routes/restaurants.route')

// brancher la route
app.use('/restaurants',restaurantRoute)

//création api
app.get('/',(req,res) => {
return res.send('Hello API !')
})

app.listen(port,() => {
    console.log(`Serveur en écoute sur le port ${port}`)
})

