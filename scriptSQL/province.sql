CREATE TABLE geography(
	 id  SERIAL PRIMARY KEY,
	 name_TH varchar(200) NOT NULL,
   name_EN varchar(200) NOT NULL,   
   created_date timestamp,
   created_by varchar(100),
   updated_date timestamp,
   updated_by varchar(100)
);

INSERT INTO geography VALUES 
(1, 'ภาคเหนือ', 'North',now(),'INIT',now(),'INIT'),
(2, 'ภาคกลาง', 'Central',now(),'INIT',now(),'INIT'),
(3, 'ภาคตะวันออกเฉียงเหนือ','North East',now(),'INIT',now(),'INIT'),
(4, 'ภาคตะวันตก','West',now(),'INIT',now(),'INIT'),
(5, 'ภาคตะวันออก','East',now(),'INIT',now(),'INIT'),
(6, 'ภาคใต้','Southern',now(),'INIT',now(),'INIT');


CREATE TABLE province (
  id SERIAL PRIMARY KEY,
  code varchar(2) NOT NULL,
  name_TH varchar(200) NOT NULL,
  name_EN varchar(200) NOT NULL,
  geoId INTEGER NOT NULL default '0',   
  created_date timestamp,
  created_by varchar(100),
  updated_date timestamp,
  updated_by varchar(100),
  FOREIGN KEY  (geoId) REFERENCES geography(id)
);

INSERT INTO province VALUES
(1, '10', 'กรุงเทพมหานคร', 'Bangkok', 2,now(),'INIT',now(),'INIT'),
(2, '11', 'สมุทรปราการ', 'Samut Prakan', 2,now(),'INIT',now(),'INIT'),
(3, '12', 'นนทบุรี', 'Nonthaburi', 2,now(),'INIT',now(),'INIT'),
(4, '13', 'ปทุมธานี', 'Pathum Thani', 2,now(),'INIT',now(),'INIT'),
(5, '14', 'พระนครศรีอยุธยา', 'Phra Nakhon Si Ayutthaya', 2,now(),'INIT',now(),'INIT'),
(6, '15', 'อ่างทอง', 'Ang Thong', 2,now(),'INIT',now(),'INIT'),
(7, '16', 'ลพบุรี', 'Loburi', 2,now(),'INIT',now(),'INIT'),
(8, '17', 'สิงห์บุรี', 'Sing Buri', 2,now(),'INIT',now(),'INIT'),
(9, '18', 'ชัยนาท', 'Chai Nat', 2,now(),'INIT',now(),'INIT'),
(10, '19', 'สระบุรี', 'Saraburi', 2,now(),'INIT',now(),'INIT'),
(11, '20', 'ชลบุรี', 'Chon Buri', 5,now(),'INIT',now(),'INIT'),
(12, '21', 'ระยอง', 'Rayong', 5,now(),'INIT',now(),'INIT'),
(13, '22', 'จันทบุรี', 'Chanthaburi', 5,now(),'INIT',now(),'INIT'),
(14, '23', 'ตราด', 'Trat', 5,now(),'INIT',now(),'INIT'),
(15, '24', 'ฉะเชิงเทรา', 'Chachoengsao', 5,now(),'INIT',now(),'INIT'),
(16, '25', 'ปราจีนบุรี', 'Prachin Buri', 5,now(),'INIT',now(),'INIT'),
(17, '26', 'นครนายก', 'Nakhon Nayok', 2,now(),'INIT',now(),'INIT'),
(18, '27', 'สระแก้ว', 'Sa Kaeo', 5,now(),'INIT',now(),'INIT'),
(19, '30', 'นครราชสีมา', 'Nakhon Ratchasima', 3,now(),'INIT',now(),'INIT'),
(20, '31', 'บุรีรัมย์', 'Buri Ram', 3,now(),'INIT',now(),'INIT'),
(21, '32', 'สุรินทร์', 'Surin', 3,now(),'INIT',now(),'INIT'),
(22, '33', 'ศรีสะเกษ', 'Si Sa Ket', 3,now(),'INIT',now(),'INIT'),
(23, '34', 'อุบลราชธานี', 'Ubon Ratchathani', 3,now(),'INIT',now(),'INIT'),
(24, '35', 'ยโสธร', 'Yasothon', 3,now(),'INIT',now(),'INIT'),
(25, '36', 'ชัยภูมิ', 'Chaiyaphum', 3,now(),'INIT',now(),'INIT'),
(26, '37', 'อำนาจเจริญ', 'Amnat Charoen', 3,now(),'INIT',now(),'INIT'),
(27, '39', 'หนองบัวลำภู', 'Nong Bua Lam Phu', 3,now(),'INIT',now(),'INIT'),
(28, '40', 'ขอนแก่น', 'Khon Kaen', 3,now(),'INIT',now(),'INIT'),
(29, '41', 'อุดรธานี', 'Udon Thani', 3,now(),'INIT',now(),'INIT'),
(30, '42', 'เลย', 'Loei', 3,now(),'INIT',now(),'INIT'),
(31, '43', 'หนองคาย', 'Nong Khai', 3,now(),'INIT',now(),'INIT'),
(32, '44', 'มหาสารคาม', 'Maha Sarakham', 3,now(),'INIT',now(),'INIT'),
(33, '45', 'ร้อยเอ็ด', 'Roi Et', 3,now(),'INIT',now(),'INIT'),
(34, '46', 'กาฬสินธุ์', 'Kalasin', 3,now(),'INIT',now(),'INIT'),
(35, '47', 'สกลนคร', 'Sakon Nakhon', 3,now(),'INIT',now(),'INIT'),
(36, '48', 'นครพนม', 'Nakhon Phanom', 3,now(),'INIT',now(),'INIT'),
(37, '49', 'มุกดาหาร', 'Mukdahan', 3,now(),'INIT',now(),'INIT'),
(38, '50', 'เชียงใหม่', 'Chiang Mai', 1,now(),'INIT',now(),'INIT'),
(39, '51', 'ลำพูน', 'Lamphun', 1,now(),'INIT',now(),'INIT'),
(40, '52', 'ลำปาง', 'Lampang', 1,now(),'INIT',now(),'INIT'),
(41, '53', 'อุตรดิตถ์', 'Uttaradit', 1,now(),'INIT',now(),'INIT'),
(42, '54', 'แพร่', 'Phrae', 1,now(),'INIT',now(),'INIT'),
(43, '55', 'น่าน', 'Nan', 1,now(),'INIT',now(),'INIT'),
(44, '56', 'พะเยา', 'Phayao', 1,now(),'INIT',now(),'INIT'),
(45, '57', 'เชียงราย', 'Chiang Rai', 1,now(),'INIT',now(),'INIT'),
(46, '58', 'แม่ฮ่องสอน', 'Mae Hong Son', 1,now(),'INIT',now(),'INIT'),
(47, '60', 'นครสวรรค์', 'Nakhon Sawan', 2,now(),'INIT',now(),'INIT'),
(48, '61', 'อุทัยธานี', 'Uthai Thani', 2,now(),'INIT',now(),'INIT'),
(49, '62', 'กำแพงเพชร', 'Kamphaeng Phet', 2,now(),'INIT',now(),'INIT'),
(50, '63', 'ตาก', 'Tak', 4,now(),'INIT',now(),'INIT'),
(51, '64', 'สุโขทัย', 'Sukhothai', 2,now(),'INIT',now(),'INIT'),
(52, '65', 'พิษณุโลก', 'Phitsanulok', 2,now(),'INIT',now(),'INIT'),
(53, '66', 'พิจิตร', 'Phichit', 2,now(),'INIT',now(),'INIT'),
(54, '67', 'เพชรบูรณ์', 'Phetchabun', 2,now(),'INIT',now(),'INIT'),
(55, '70', 'ราชบุรี', 'Ratchaburi', 4,now(),'INIT',now(),'INIT'),
(56, '71', 'กาญจนบุรี', 'Kanchanaburi', 4,now(),'INIT',now(),'INIT'),
(57, '72', 'สุพรรณบุรี', 'Suphan Buri', 2,now(),'INIT',now(),'INIT'),
(58, '73', 'นครปฐม', 'Nakhon Pathom', 2,now(),'INIT',now(),'INIT'),
(59, '74', 'สมุทรสาคร', 'Samut Sakhon', 2,now(),'INIT',now(),'INIT'),
(60, '75', 'สมุทรสงคราม', 'Samut Songkhram', 2,now(),'INIT',now(),'INIT'),
(61, '76', 'เพชรบุรี', 'Phetchaburi', 4,now(),'INIT',now(),'INIT'),
(62, '77', 'ประจวบคีรีขันธ์', 'Prachuap Khiri Khan', 4,now(),'INIT',now(),'INIT'),
(63, '80', 'นครศรีธรรมราช', 'Nakhon Si Thammarat', 6,now(),'INIT',now(),'INIT'),
(64, '81', 'กระบี่', 'Krabi', 6,now(),'INIT',now(),'INIT'),
(65, '82', 'พังงา', 'Phangnga', 6,now(),'INIT',now(),'INIT'),
(66, '83', 'ภูเก็ต', 'Phuket', 6,now(),'INIT',now(),'INIT'),
(67, '84', 'สุราษฎร์ธานี', 'Surat Thani', 6,now(),'INIT',now(),'INIT'),
(68, '85', 'ระนอง', 'Ranong', 6,now(),'INIT',now(),'INIT'),
(69, '86', 'ชุมพร', 'Chumphon', 6,now(),'INIT',now(),'INIT'),
(70, '90', 'สงขลา', 'Songkhla', 6,now(),'INIT',now(),'INIT'),
(71, '91', 'สตูล', 'Satun', 6,now(),'INIT',now(),'INIT'),
(72, '92', 'ตรัง', 'Trang', 6,now(),'INIT',now(),'INIT'),
(73, '93', 'พัทลุง', 'Phatthalung', 6,now(),'INIT',now(),'INIT'),
(74, '94', 'ปัตตานี', 'Pattani', 6,now(),'INIT',now(),'INIT'),
(75, '95', 'ยะลา', 'Yala', 6,now(),'INIT',now(),'INIT'),
(76, '96', 'นราธิวาส', 'Narathiwat', 6,now(),'INIT',now(),'INIT'),
(77, '97', 'บึงกาฬ', 'Buogkan', 3,now(),'INIT',now(),'INIT');
