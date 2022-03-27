'use strict';

const numberOfFilms = +prompt('Cколько фильмов вы уже просмотрели', '');


const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

let a = prompt('Один изи последних просмотренных фильмов', '');
let b = prompt('На сколько его оцените', '');
let c = prompt('Один изи последних просмотренных фильмов', '');
let d = prompt('На сколько его оцените', '');

personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;

console.log(personalMovieDB);