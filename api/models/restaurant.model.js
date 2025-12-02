const { DataTypes } = require('sequelize')
const { sequelize } = require('../utils/db')

const Restaurant = sequelize.define('Restaurant', 
    {
    
        nom: { type: DataTypes.STRING,
            allowNull: false,
            },
        adresse: {
        type: DataTypes.STRING,
            },
        type_nourriture: {
            type: DataTypes.STRING,
            allowNull: false
        }
    },
    { 
        tableName: 'restaurants',
        timestamps: true
    }
)

module.exports = Restaurant


// const mongoose = require('mongoose')
// const {Schema} = mongoose

// const RestaurantSchema = new Schema({
//     name: {
//         type: String,
//         required: true,
//     }
// },{timestamps: true}
// )

// module.exports = mongoose.model('Restaurant', RestaurantSchema)

