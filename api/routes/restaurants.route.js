const restaurantModel = require('../models/restaurant.model')
const { openConnectionToDatabase } = require('../utils/db')

const router = require('express').Router()

router.get('/', async (req, res) => {
  try {
    // ouvrir la connection à MariaDB
    await openConnectionToDatabase()
    // On récupère les restaurants depuis la base de données
    const result = await restaurantModel.findAll()
    // console.log(result)

    // fermer la connection à MariaDB
    // await closeConnectionToDatabase()
    // On retourne la liste de restaurants dans le réponse de l'API
    return res.status(200).json({
      message: 'OK',
      data: result
    })
  } catch (error) {
    console.error(error)

    // On renvoit l'erreur
    return res.status(500).json({
      error
    })
  }
}
)

module.exports = router
