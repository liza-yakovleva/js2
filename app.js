"use strict";

// age check
let userAge = + prompt("Введіть свій вік :");
if (userAge >= 18 && userAge <= 45) {
  alert("Вік підходить");
}
else {
  alert("Вік не підходить");
}

//  what quarter of an hour
let userNumber = + prompt("Введіть своє число від 0 до 59 :");
if (userNumber >= 0 && userNumber <= 14) {
  alert("Перша четвертина години");
}
else if (userNumber >= 15 && userNumber <= 30) {
  alert("Друга четвертина години");
}
else if (userNumber >= 31 && userNumber <= 45) {
  alert("Третя четвертина години");
}
else if (userNumber >= 46 && userNumber <= 59) {
  alert("Четверта четвертина години");
}
else  {
  alert("Число не підходить");
}

// right or wrong
let a = + prompt("Введіть своє число a :");
let b = + prompt("Введіть своє число b :");
if (a > 3 && a < 12 && b > 5 && b < 13) {
  alert("вірно");
}
else {
  alert("не вірно");
}

// Deposit calculator
let userName = prompt("Введіть ваше ім'я", "Іван");
let userSum = +prompt("Введіть суму вашего депозиту в грн", "10");
let userTerm = +prompt("Введіть термін дії депозиту у місяцях", "6");
let sumProfitFive = userSum * 0.15 * userTerm / 12;
let sumProfitSix = userSum * 0.16 * userTerm / 12;
let sumProfitSeven = userSum * 0.17 * userTerm / 12;
if (userTerm < 6) {
  alert("Шановний " + userName + ". Ви внесли " + userSum +
    " грн під 15% річних, на термін " + userTerm +
    " місяців. За цей період часу Ви заробите " + sumProfitFive + " грн.");
}
if (userTerm >= 6 && userTerm <= 9) {
  alert("Шановний " + userName + ". Ви внесли " + userSum +
    " грн під 16% річних, на термін " + userTerm +
    " місяців. За цей період часу Ви заробите " + sumProfitSix + " грн.");
}
if (userTerm > 9) {
  alert("Шановний " + userName + ". Ви внесли " + userSum +
    " грн під 17% річних, на термін " + userTerm +
    " місяців. За цей період часу Ви заробите " + sumProfitSeven + " грн.");
}