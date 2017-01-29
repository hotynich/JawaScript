/**
 * Created by User on 29.01.2017.
 */
// function result() {
//     var a = prompt('введите число', '');
//     var b = prompt('введите степень', '');
//     var c = Math.pow(a, b);
//     console.log(c);
// }
// result();
var name1 = prompt('имя 1', '');
var name2 = prompt('имя 2', '');
var name3 = prompt('имя 3', '');
var name4 = prompt('имя 4', '');
var name5 = prompt('имя 5', '');

var peopleName = [name1, name2, name3, name4, name5];

var login = prompt('введите логин', '');

if (login == name1) {
    alert (name1 + ", вы успешно вошли.");
}else if (login == name2) {
    alert (name2 + ", вы успешно вошли.");
}else if (login == name3) {
    alert (name3 + ", вы успешно вошли.");
}else if (login == name4) {
    alert (name4 + ", вы успешно вошли.");
}else if (login == name5) {
    alert (name5 + ", вы успешно вошли.");
}else alert('ошибка входа');