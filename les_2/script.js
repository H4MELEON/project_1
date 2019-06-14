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

let expense_1 = prompt("Введите обязательную статью расходов в этом месяце");
let cost_1 = prompt("Во сколько обойдется?");
let expense_2 = prompt("Введите обязательную статью расходов в этом месяце");
let cost_2 = prompt("Во сколько обойдется?");

appData.expenses = {
    expense_1: cost_1,
    expense_2: cost_2
};

alert(appData.budget / 30);