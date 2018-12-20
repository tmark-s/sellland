CREATE VIEW allsellland AS SELECT CONCAT(seller.firstname, seller.lastname) AS name, zone.name_th AS zone_name_th,
zone.name_en AS zone_name_en, sellland.created_date, land.rai, land.ngan, land.wa FROM sellland 
INNER JOIN seller ON sellland.seller_id = seller.id
INNER JOIN land ON sellland.land_id = land.id LEFT OUTER JOIN zone ON land.zone_id = zone.id