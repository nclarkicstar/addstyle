CREATE TABLE elements (
   id BIGSERIAL NOT NULL PRIMARY KEY,
   name VARCHAR(50) NOT NULL,
   description TEXT NOT NULL, 
   value INT NOT NULL check(value >=1 and value=5)
);

CREATE TABLE elements (
   id BIGSERIAL NOT NULL PRIMARY KEY,
   scorecard_id BIGINT NOT NULL REFERENCES scorecards(id),
   name VARCHAR(50) NOT NULL,
   description TEXT NOT NULL, 
   weight INT NOT NULL
);
