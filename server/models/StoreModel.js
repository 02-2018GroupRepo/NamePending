const connection = require('./db');

class StoreModel {

    static getAllStores() {

        return new Promise((resolve, reject) => {
            connection.query("SELECT * FROM stores", (err, results) => {
                if (err) reject(err);
                else resolve(results);
            });
        });
    } 
}

module.exports = StoreModel;
