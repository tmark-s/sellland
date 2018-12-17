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
    name_TH varchar(250) NOT NULL,
    name_EN varchar(250) NOT NULL,
    location point,
    border polygon,
    created_date timestamp,
    created_by varchar(100) NOT NULL,
    updated_date timestamp,
    updated_by varchar(100) NOT NULL
)

INSERT INTO zone(name_TH,name_EN,created_date,created_by,updated_date,updated_by) VALUES 
('สนามเป้า - รัชโยธิน','Sanampao - Ratchayothin',now(),'INIT',now(),'INIT'),
('อนุสาวรีย์ - ราชเทวี - สยาม - ปทุมวัน','Victory Monument - Ratchathewi - Siam - Patthumwan',now(),'INIT',now(),'INIT');

CREATE TABLE land(
    id  SERIAL PRIMARY KEY,
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
    FOREIGN KEY (sub_district_id) REFERENCES subdistrict (id)
)

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
)
