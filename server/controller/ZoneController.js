const { Pool } = require('pg')
const config = require('../config/config')

const pool = new Pool({
    connectionString: config.databaseUrl,
})

class ZoneController {
    static async getList() {
        try {
            const { rows } = await pool.query('SELECT * FROM zone');
            return rows;
        }
        catch (err) {

        }
    }

    static async getPolygon(zoneId) {
        try {
            let strQuery = `
            SELECT 
            z.*,string_agg(ln, ', ') AS actor_list
            FROM zone z 
            LEFT JOIN (
                           SELECT id,concat('{"lat":',ST_X(p.point),',"lng":', ST_Y(p.point),'}')  as ln
                           FROM 
                               (SELECT id,(ST_DumpPoints(border)).geom AS point FROM zone Group By id) p
                    ) latlng
            ON latlng.id = z.id`;
            strQuery += zoneId ? ` WHERE z.id = ` + zoneId : ` `;
            strQuery += `
            GROUP BY z.id
            ORDER BY z.id
            `;
            const { rows } = await pool.query(strQuery);
            return rows;
        }
        catch (err) {

        }
    }
}
module.exports = ZoneController