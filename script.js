'use strict'

let money = prompt("Ваш бюджет на месяц?");

let time = prompt("Введите дату в формате YYYY-MM-DD");;

let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: false
};

let question_1_1 = prompt("Введите обязательную статью расходов в этом месяце");
let question_1_2 = prompt("Во сколько обойдется?");
let question_2_1 = prompt("Введите обязательную статью расходов в этом месяце");
let question_2_2 = prompt("Во сколько обойдется?");

appData.expenses = {
    question_1_1: question_1_2,
    question_2_1: question_2_2
};

alert(appData.budget / 30);