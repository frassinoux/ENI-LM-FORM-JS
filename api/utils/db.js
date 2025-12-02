// const mongoose = require("mongoose")

//connecter avec Sequelize la MariaDB
const { Sequelize } = require('sequelize')

const sequelize = new Sequelize(
process.env.DATABASE_NAME,
process.env.DATABASE_USER,
process.env.DATABASE_PASSWORD,
{
    host: process.env.DATABASE_HOST,
    port: process.env.DATABASE_PORT,
    dialect: 'mariadb'
}
)

async function openConnectionToDatabase() {
    try { 
        await sequelize.authenticate()
        console.info('Connecté à MariaDB')

    }  catch (error) {
        console.error('Erreur de connection à MariaDB')
    console.error(error)        
    }  
}

async function closeConnectionToDatabase(prams) {
    try {
        await sequelize.close()
        console.info('Déconnecté de MariaDB')
         } 
          catch (error)
         {
            console.error('Erreur de déconnection à MariaDB')
            console.error(error)
        }
}

// async function connectToDatabase() {
// try {
// await mongoose.connect(process.env.DATABASE_CONNECTION_STRING) 
// console.info('Connection à la base de données réussie!')
// } catch (error) {
//     console.error(error)
// }
// }


module.exports = {
    sequelize,
    openConnectionToDatabase,
    closeConnectionToDatabase
    // connectToDatabase
}