'use strict';

const numberOfFilms = +prompt('Cколько фильмов вы уже просмотрели', '');


const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

if(personalMovieDB.count < 10) {
    console.log('Просмотрено мало фильмов');
} else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
    console.log('Вы классический зритель');
} else if (personalMovieDB.count >= 30) {
    console.log('Вы киноман');
} else {
    console.log('Произошла ошибка');
}

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

console.log(personalMovieDB);