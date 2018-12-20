const { Pool } = require('pg')
const config = require('../config/config')

const pool = new Pool({
    connectionString: config.databaseUrl,
})

class ZoneController {
    static async getList(zoneId) {
        try {
            let strQuery = `
            SELECT * FROM zone
            `;
            strQuery += zoneId ? ` WHERE id = ` + zoneId : ` `;
            strQuery += `
            ORDER BY id
            `;
            const { rows } = await pool.query(strQuery);
            return rows;
        }
        catch (err) {

        }
    }

    static async getPolygon(zoneId) {
        try {
            let strQuery = `
            SELECT 
            z.*,string_agg(ltln, ', ') AS strltln
            FROM zone z 
            LEFT JOIN (
                           SELECT id,concat('{"lat":',ST_X(p.point),',"lng":', ST_Y(p.point),'}')  as ltln
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

    static async getOfferedLandInZone(zoneId) {
        try {
            let strQuery = `
           SELECT id,rai,ngan,wa,concat('{"lat":',ST_X(location),',"lng":', ST_Y(location),'}') ltln,price_per_wa  FROM land
            `;
            strQuery += zoneId ? ` WHERE zone_id = ` + zoneId : ` `;
            const { rows } = await pool.query(strQuery);
            return rows;
        }
        catch (err) {

        }
    }

    static async getViewOfferedDataInZone(zoneId) {
        try {
            let strQuery = `
            SELECT asl.* FROM allsellland asl Right join land l on l.id = asl.land_id
            `;
            strQuery += zoneId ? ` WHERE l.zone_id = ` + zoneId : ` `;
            const { rows } = await pool.query(strQuery);
            return rows;
        }
        catch (err) {

        }
    }
}
module.exports = ZoneController