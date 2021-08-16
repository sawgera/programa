' use strict ';

let numerOfFilms;

function start () {
    numerOfFilms = +prompt('Сколько фильмов вы смотрели?');

    while (numerOfFilms == '' || numerOfFilms == null || isNaN(numerOfFilms)){
        numerOfFilms = +prompt('Сколько фильмов вы смотрели?');
    }
}

start();

const personalMovieDB = {
    count : numerOfFilms,
    movie : {},
    actors : {},
    genres : [],
    privat : false
};


function rememberMyFilms() {
    for (let i = 0; i < 2; i++){
        const a = prompt('Один из последних просмотренных фильмов?');
        const b = prompt('На сколько оцените его?');
    
        if( a != null && b != null && a != '' && b != '' && a.length < 50 ){
            personalMovieDB.movie[a] = b; 
        } else {
            i--;
        }   
    }
}

rememberMyFilms();

function detectPersonalLevel() {
    if (personalMovieDB.count < 10){
        console.log('Посмотрено мало фильмов');
    } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30){
        console.log('Вы классический зритель');
    } else if (personalMovieDB.count >= 30){
        console.log('Вы киноман');
    } else {
        console.log('Ошибка');
    }  
}

detectPersonalLevel();

function showMyDB(hidden) {
    if(!hidden){
        console.log(personalMovieDB);
    }
}

showMyDB(personalMovieDB.privat);

function writeYourGenres() {

    for(let i = 1; i <= 3; i++){
        const genre = (`Ваш любимый жанр под номером ${i}`);
        personalMovieDB.genres[i-1] = genre;
    }
}

writeYourGenres();