const db = require('../db')

class ZoneController {
    static async list() {
        try {
            const { rows } = await db.query('SELECT * FROM zone');
            return rows;
        }
        catch (err) {

        }
    }
}
module.exports = ZoneController