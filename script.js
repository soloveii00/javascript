
const personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
    start: function() {
        personalMovieDB.count = +prompt('Сколько  фильмов вы уже посмотрели?', '');
    
        while (personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
            personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?',  '');
                } 
    },
    remeberMyFilms: function() {
        for (let i = 0; i < 2; i++) {
            const a = prompt('Один из последних просмотренных фильмов?', ''),
                  b = prompt('На сколько оцените его?', '');
        
                  if (a != null && b != null && a != '' && b != '' && a.length < 50) {
                    personalMovieDB.movies[a] = b;
                    console.log('done');
                  } else {
                      console.log('error');
                      i--;         
                }       
            }
        },
        detectPersonalLevel: function() {
            if (personalMovieDB.count < 10) {
                console.log("Просмотрено мало фильмов");
            } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
                console.log ("Вы классческий зритель");
            } else if (personalMovieDB.count >= 30) {
                console.log ("Вы киноман");
            } else {
                console.log("Произошла ошибка");
            }
        },
    showMyDB: function(hiden) {
        if (personalMovieDB.privat == false) {
            console.log(personalMovieDB);
        }
    },
    toggleVisibleMyDB: function() {
if(personalMovieDB.privat) {
    personalMovieDB.privat = false;
} else {
    personalMovieDB.privat = true;
}
    },
    writeYourGenres: function() {
        for (let i = 1; i < 2; i++) {
            // let genre =  prompt(`Ваш любимый жанр под номером ${i}`);

            // if (genre === '' || genre === null) {
            //     console.log('Вы ввели некорректные данные или не ввели вовсе');
            // } else {
            //     personalMovieDB.genres[i - 1] = genre;
            // }  
            let genres = prompt(`ВВедите ваши любимые жанры через запятую`).toLocaleLowerCase();
            
            if (genres === '' || genres === null) {
                    console.log('Вы ввели некорректные данные или не ввели вовсе');
                } else {
                    personalMovieDB.genres = genres.split(', ');
                    personalMovieDB.genres.sort();
                }  
        }

        personalMovieDB.genres.forEach((item, i) => { 
            console.log(`Любимый жанр ${1} - это ${item}`);
        });
    }
};