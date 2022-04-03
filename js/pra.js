'use strict';

let numberOfFilms;

function start() {
    numberOfFilms = +prompt('Cколько фильмов вы уже просмотрели', '');

    while(numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt('Cколько фильмов вы уже просмотрели', '');
    }
} 
start();

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

function showMyDB(hidden) {
    if(!hidden) {
        console.log(personalMovieDB);
    }
}

showMyDB(personalMovieDB.privat);

function rememberOfFilms() {
    for(let i = 0; i < 2; i++) {
        let a = prompt('Один изи последних просмотренных фильмов', '');
        let b = prompt('На сколько его оцените', '');
    
        if( a != null && b != null && a != '' && b != '' && a.length < 50 ) {
            personalMovieDB.movies[a] = b;
            console.log('работает');
        } else {
            console.log('ошибка');
            i--;
        }
    }
}
rememberOfFilms();

function detectPersonalLevel() {
    if(personalMovieDB.count < 10) {
        console.log('Просмотрено мало фильмов');
    } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
        console.log('Вы классический зритель');
    } else if (personalMovieDB.count >= 30) {
        console.log('Вы киноман');
    } else {
        console.log('Произошла ошибка');
    }
}

detectPersonalLevel();

function writeYourGenres() {
    for(let i = 1; i <= 3; i++){
        /* const genres = prompt(`Ваш любимы жанр под номером ${i}`);
        personalMovieDB.genres[i-1] = genres; */
        personalMovieDB.genres[i-1] = prompt(`Ваш любимы жанр под номером ${i}`);
    } 
}
writeYourGenres();


/* console.log(personalMovieDB); */