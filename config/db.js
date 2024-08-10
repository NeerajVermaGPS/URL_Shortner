const mongoose = require('mongoose');

const dbConnection = async (db_url) => {
    return mongoose.connect(db_url)
}

module.exports = {
    dbConnection
}