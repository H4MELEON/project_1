'use strict'

let money, time;

function start() {
    money = +prompt("Ваш бюджет на месяц?", "");
    time = prompt("Введите дату в формате YYYY-MM-DD", "");

    if (isNaN(money) || money == "") {
        start();
    }
}
start();

let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: false
};

function chooseExpenses() {
    for (let i = 0; i < 2; ++i) {
        let expense = prompt("Введите обязательную статью расходов в этом месяце", ""),
            cost = +prompt("Во сколько обойдется?", "");
    
        if ((typeof (expense) === "string") && (expense != null) && (cost != null)
            && (expense != null) && (cost != null) && (expense.length <= 50)) {
            appData.expenses[expense] = cost;
        } else {
            --i;
        }
    }
}
chooseExpenses();

function detectDayBudget() {
    appData.dayBudget = +(appData.budget / 30).toFixed(2);
    alert("Ежедневный бюджет: " + appData.dayBudget);
}
detectDayBudget();

if (appData.dayBudget <= 100) {
    console.log("Низкий уровень достатка");
} else if (appData.dayBudget <= 2000) {
    console.log("Средний уровень достатка");
} else {
    console.log("Высокий уровень достатка");
}