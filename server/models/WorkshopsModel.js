const connection = require('./db');

class WorkshopsModel {

    static getAllWorkshops() {

        return new Promise((resolve, reject) => {
            connection.query("SELECT * FROM workshops", (err, results) => {
                if (err) reject(err);
                else resolve(results);
            });
        });
    } 
}

module.exports = WorkshopsModel;