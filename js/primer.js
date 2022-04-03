'use strict';

// lear. функции
// Функция min(a, b)

/* function min (a, b) {
    if(a > b) {
        console.log(a);
    } else if (b > a) {
        console.log(b);
    } else if (b == a) {
        console.log('000');
    } else {
        console.log('ошибка');
    }
}

min(10, 2);
min(8, 13);
min(0,0);
min('a', 0); */

// Функция pow(x,n)
/* 
function min(a, b) {
    return Math.pow(a, b);
}

let a = +prompt('a?', '');
let b = +prompt('b?', '');

if( b < 1) {
    alert('ошибка');
} else {
    alert(min(a,b));
} */

/* Функции-коллбэки в JavaScript */

/* ⋕js.Pm.FA.Clb.1 */

/* let arr1 = [2,3,4,5];

function each(arr, callback) {
    let newArr = [];

    for(let elem of arr) {
        newArr.push(callback(elem));
    }
    return newArr;
}

let res = each(arr1, function(num){
    return num ** 2;
});

console.log(res); */

/* ⋕js.Pm.FA.Clb.2 */
/* let arr1 = ['ab', 'cd', 'gf'];

function each(arr, callback) {
    let newArr = [];

    for(let elem of arr){
        newArr.push(callback(elem));
    }
    return newArr;
}

function rev(str) {
    return str.split("").reverse().join("");
}

let res = each(arr1, rev);
console.log(res); */

/* ⋕js.Pm.FA.Clb.3 */
/* let arr1 = ['ab', 'cd', 'gf'];
function each(arr, callback) {
    let newArr = [];

    for(let elem of arr){
        newArr.push(callback(elem));
    }
    return newArr;
}

function ucFirst(str) {
    if (!str) return str;

    return str[0].toUpperCase() + str.slice(1);
}

let res = each(arr1, ucFirst);
console.log(res); */

/* ⋕js.Pm.FA.Clb.4 */

/* function cube(num) {
    return num ** 3;
}
function each(arr, callback) {
    let newArr = [];

    for(let elem of arr) {
        newArr.push(callback(elem));
    }
    return newArr;
}

let res = each([2,3,4,5], cube);
console.log(res); */

/*  */
/* function ask(question, yes, no) {
    if (confirm(question)) yes()
    else no();
}

ask(
    "Вы согласны?",
    () => { alert("Вы согласились."); },
    () => { alert("Вы отменили выполнение."); }
  ); */

/* ⋕js.Pm.FA.AF.1 */  
/* let result = every([1, 2, 3, 4, 5], elem => elem > 0 );  */

/* ⋕js.Pm.FA.AF.2 */
/* 
let result = every([1, 2, 3, 4, 5], (elem, index) => elem * index > 10); */

/* ⋕js.Pm.FA.AF.3 */
/* 
let arr = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];

let result = each(arr, (elem, index) => elem * index > 10 ); */


