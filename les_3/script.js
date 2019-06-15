'use strict'

//Перечень функций
function start() {
    money = +prompt("Ваш бюджет на месяц?", "");
    time = prompt("Введите дату в формате YYYY-MM-DD", "");

    if (isNaN(money) || money == "") {
        start();
    }
}

function chooseExpenses() {
    let expense, cost;
    do {
        expense = prompt("Введите обязательную статью расходов в этом месяце", "");
        cost = +prompt("Во сколько обойдется?", "");
    } while (expense == "" || expense == "" || expense == null || cost == null);
    appData.expenses[expense] = cost;
}

function detectDayBudget() {
    appData.dayBudget = +(appData.budget / 30).toFixed();
    alert("Ежедневный бюджет: " + appData.dayBudget);
}

function detectLevel() {
    if (appData.dayBudget <= 100) {
        console.log("Низкий уровень достатка");
    } else if (appData.dayBudget <= 2000) {
        console.log("Средний уровень достатка");
    } else {
        console.log("Высокий уровень достатка");
    }
}

function checkSavings() {
    if (appData.savings) {
        let save = +prompt("Каковы ваши наклоения?"),
            percent = +prompt("Под какой процент?");
        appData.monthIncome = save / 100 / 12 * percent;
        alert("Ваш доход за месяц: " + appData.monthIncome);
    }
}

function chooseOptExpenses(num) {
    let optExpense;
    do {
        optExpense = prompt("Статья необязательных расходов?");
    } while (optExpense == null || optExpense == "");
    appData.optionalExpenses[num] = optExpense;
}

let money, time;

start();

let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: true
};

for (let i = 0; i < 2; ++i) {
    chooseExpenses();
}

detectDayBudget();

detectLevel();

checkSavings();

for (let i = 0; i < 3; ++i) {
    chooseOptExpenses(i + 1);
}