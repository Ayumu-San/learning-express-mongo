//getting started
const mongoose = require ('mongoose');

const mongoDB = async () => {
    try {
        await mongoose.connect('mongodb://localhost:27017/praktikum-uh-mk3', {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log('DB Connected');
    } catch (error) {
        console.error('DB Connection Error:', error);
        process.exit(1); // Keluar dari proses jika gagal konek
    }
};
module.exports = mongoDB