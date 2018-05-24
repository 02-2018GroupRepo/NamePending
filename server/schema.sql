CREATE TABLE users (
 id SERIAL,   
 email varchar(255),
 password varchar(255),
 phone varchar(255),
 first_name varchar(255),
 last_name varchar(255),
 address varchar(255)
); 
CREATE TABLE workshop(
 id Integer,   
 store_id Integer,
 description varchar(255),
 start_time date,
 end_time date,
 photo_url varchar(255),
 name varchar(255)
); 
CREATE TABLE stores(
 store_id Integer,   
 address varchar(255),
 name varchar(255),
 phone varchar(255),
--  latitude and longitude used for Google Maps
 lat Integer,
 lng Integer
); 