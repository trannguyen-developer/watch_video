const mongoose = require('mongoose');

async function connect() {
    try {
        console.log('test1');
        await mongoose.connect('mongodb://localhost:27017/watchVideo_dev', {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('Connect successfully!!!');
    } catch (error) {
        console.log('Connect failure!!!');
    }
}

module.exports = { connect };
