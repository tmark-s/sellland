CREATE TABLE seller (
    id   SERIAL PRIMARY KEY,
    firstname varchar(100),
    lastname varchar(100),
    mobileNo varchar(10),
    email varchar(100),
    created_date timestamp,
    created_by varchar(100) NOT NULL,
    updated_date timestamp,
    updated_by varchar(100) NOT NULL
);

INSERT INTO seller (firstname,lastname,mobileNo,email,created_date,created_by,updated_date,updated_by) VALUES 
('สมชาย', 'ทองดี', '0811111111', 'test1@email.com',now(),'INIT',now(),'INIT'),
('กาหลง', 'ต้นกาฝาก', '0822222222', 'test2@email.com',now(),'INIT',now(),'INIT'),
('สุภาวดี', 'สินทรัพย์', '0833333333', 'test3@email.com',now(),'INIT',now(),'INIT');

CREATE TABLE zone (
    id SERIAL PRIMARY KEY,
    name_th varchar(250) NOT NULL,
    name_en varchar(250) NOT NULL,
    location geometry,
    border geometry,
    created_date timestamp,
    created_by varchar(100) NOT NULL,
    updated_date timestamp,
    updated_by varchar(100) NOT NULL
);

INSERT INTO zone(id,name_TH,name_EN,location,border,created_date,created_by,updated_date,updated_by) VALUES 
(1,'สนามเป้า - รัชโยธิน','Sanampao - Ratchayothin','POINT(13.754865 100.460169)','POLYGON((13.798217247162638 100.42515039062505,13.710179103329589 100.42377709960942,13.734192788581064 100.49656152343755,13.799550903523969 100.49312829589849,13.798217247162638 100.42515039062505))',now(),'INIT',now(),'INIT'),
(2,'อนุสาวรีย์ - ราชเทวี - สยาม - ปทุมวัน','Victory Monument - Ratchathewi - Siam - Patthumwan','POINT(13.850221 100.589945)','POLYGON((13.885555602433298 100.5322670898438,13.81355383485181 100.54256677246099,13.81155346758664 100.62359094238286,13.888888476842402 100.6476235351563,13.885555602433298 100.5322670898438))',now(),'INIT',now(),'INIT'),
(3,'ปลื้มจิต - ชิดลม - หลังสวน','Ploemchit - Chidlom - Langsuan','POINT(13.695159552466361 100.60230493164067)','POLYGON((13.762872577718069 100.58651208496099,13.67949137695135 100.53913354492192,13.627446527214655 100.60505151367192,13.71551569018384 100.66547631835942,13.762872577718069 100.58651208496099))',now(),'INIT',now(),'INIT');

CREATE TABLE land(
    id  SERIAL PRIMARY KEY,
	location point,
    border polygon,
    rai INTEGER,
    ngan INTEGER,
    wa INTEGER,
    price_per_wa money,
    road varchar(200),
    province_id INTEGER,
    district_id INTEGER,
    sub_district_id INTEGER,
    created_date timestamp,
    land_slide varchar(200),
    land_certificate varchar(200),
    map_of_land varchar(200),
    created_by varchar(100) NOT NULL,
    updated_date timestamp,
    updated_by varchar(100) NOT NULL,
    zone_id INTEGER,
    FOREIGN KEY (province_id) REFERENCES province (id),
    FOREIGN KEY (district_id) REFERENCES district (id),
    FOREIGN KEY (sub_district_id) REFERENCES sub_district (id)
);

CREATE TABLE sellLand(
    id  SERIAL PRIMARY KEY,
    seller_id INTEGER,
    land_id INTEGER,
    created_date timestamp,
    created_by varchar(100) NOT NULL,
    updated_date timestamp,
    updated_by varchar(100) NOT NULL,
    FOREIGN KEY (seller_id) REFERENCES seller (id),
    FOREIGN KEY (land_id) REFERENCES land (id)
);
