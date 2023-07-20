CREATE DATABASE omdbviewerdatabase;
USE omdbviewerdatabase;
CREATE TABLE MOVIE (
  Id int primary key auto_increment,
  Title varchar(255),
  Year varchar(255),
  imdbID varchar(255),
  Type varchar(255),
  Poster varchar(255),
  Categories varchar(255)
);