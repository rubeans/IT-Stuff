const mongoose = require("mongoose")

async function database_connection() {
    try {
        console.log('connecting to database...')
        await mongoose.connect(process.env.DATABASE_URI)
        console.log('database connected!')
    } catch (error) {
        console.log(`Error trying to connect database: ${error}`)
    }
}

module.exports = database_connection