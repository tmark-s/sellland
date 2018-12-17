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

CREATE TABLE sellLand(
    id  SERIAL PRIMARY KEY,
    sellerId INTEGER,
    landId INTEGER,
    created_date timestamp,
    created_by varchar(100) NOT NULL,
    updated_date timestamp,
    updated_by varchar(100) NOT NULL,
    FOREIGN KEY (sellerId) REFERENCES seller (id),
    FOREIGN KEY (landId) REFERENCES land (id)
);

CREATE TABLE land(
    id  SERIAL PRIMARY KEY,
    border polygon,
    rai INTEGER,
    ngan INTEGER,
    wa INTEGER,
    price_per_wa money,
    road varchar(200),
    zoneId INTEGER,
    provinceId INTEGER,
    districtId INTEGER,
    sub_districtId INTEGER,
    landSlide varchar(200),
    landCertificate varchar(200),
    mapOfLand varchar(200),
    created_date timestamp,
    created_by varchar(100) NOT NULL,
    updated_date timestamp,
    updated_by varchar(100) NOT NULL,
    FOREIGN KEY (provinceId) REFERENCES province (id),
    FOREIGN KEY (districtId) REFERENCES district (id),
    FOREIGN KEY (sub_districtId) REFERENCES subdistrict (id)
);