const mongoose = require('mongoose');

module.exports = (DB) => {
    mongoose.connect(`mongodb://localhost/${DB}`)
        .then(() => console.log(`connected to ${DB} database`))
        .catch(err => console.log(`ERROR connecting to ${DB}`, err))
}

