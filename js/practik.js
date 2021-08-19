' use strict ';

const personalMovieDB = {
    count : 0,
    movie : {},
    actors : {},
    genres : [],
    privat : false,
    start : function() {
        personalMovieDB.count = +prompt('Сколько фильмов вы смотрели?');
    
        while (personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count)){
            personalMovieDB.count = +prompt('Сколько фильмов вы смотрели?');
        }
    },
    rememberMyFilms : function() {
        for (let i = 0; i < 2; i++){
            const a = prompt('Один из последних просмотренных фильмов?');
            const b = prompt('На сколько оцените его?');
        
            if( a != null && b != null && a != '' && b != '' && a.length < 50 ){
                personalMovieDB.movie[a] = b; 
            } else {
                i--;
            }   
        }
    },
    detectPersonalLevel: function() {
        if (personalMovieDB.count < 10){
            console.log('Посмотрено мало фильмов');
        } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30){
            console.log('Вы классический зритель');
        } else if (personalMovieDB.count >= 30){
            console.log('Вы киноман');
        } else {
            console.log('Ошибка');
        }  
    },
    showMyDB : function(hidden) {
        if(!hidden){
            console.log(personalMovieDB);
        }
    },
    toggleVisibleDB : function() {
        if(personalMovieDB.privat){
            personalMovieDB.privat = false;
        } else {
            personalMovieDB.privat = true;
        }
    },
    writeYourGenres : function() {

        for(let i = 1; i <= 3; i++){
            const genre = (`Ваш любимый жанр под номером ${i}`);

            if(genre == '' || genre == null) {
                console.log('Вы велли не коректные данные или не ввели их вовсе');
                i--;
            } else {
                personalMovieDB.genres[i-1] = genre;
            }

        }

        personalMovieDB.genres.forEach((item, i) => {
            console.log(`Любимый жанр ${i + 1}, начиная с 1) - это ${item}`);
        });
    }

};
