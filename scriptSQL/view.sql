CREATE VIEW allsellland
AS
    SELECT
        la.id as land_id,
        CONCAT(sl.firstname,' ', sl.lastname) AS seller_name,
        z.name_th AS zone_name_th,
        z.name_en AS zone_name_en,
        to_char( sla.created_date, 'DD-Mon-YYYY HH24:MI') AS created_date,
        la.rai,
        la.ngan,
        la.wa ,
        la.price_per_wa,
        ((la.rai*400)+(la.ngan*100)+la.wa)*la.price_per_wa as total_price
    FROM sellland sla
        INNER JOIN seller sl ON sla.seller_id = sl.id
        INNER JOIN land la ON sla.land_id = la.id
        LEFT OUTER JOIN zone z ON la.zone_id = z.id