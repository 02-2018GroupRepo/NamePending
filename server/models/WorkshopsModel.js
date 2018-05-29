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
    
    static getWorkshopsByIds(favoritesArr) {
        let workshopIds = favoritesArr.map(favorite => favorite.workshopId);
        return new Promise((resolve, reject) => {
            console.log(workshopIds);
            connection.query("SELECT * FROM workshops WHERE id IN (?)", [workshopIds], (err, results) => {
                if (err) reject(err);
                else resolve(results);
            });
        });
    }
    
    static getWorkshopById(workshopId) {
        return new Promise((resolve, reject) => {
            connection.query("SELECT * FROM workshops WHERE id = ?", [workshopId], (err, results) => {
                if (err) reject(err);
                else resolve(results);
            });
        });
    } 
}

module.exports = WorkshopsModel;