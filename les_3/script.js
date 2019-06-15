'use strict'

let money = +prompt("Ваш бюджет на месяц?", "");

let time = prompt("Введите дату в формате YYYY-MM-DD", "");

let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: false
};

for (let i = 0; i < 2; ++i) {
    let expense = prompt("Введите обязательную статью расходов в этом месяце", ""),
        cost = +prompt("Во сколько обойдется?", "");

    if ((typeof (expense) === "string") && (expense != null) && (cost != null) 
        && (expense != null) && (cost != null) && (expense.length <= 50)) {
        appData.expenses[expense] = cost;
    }
}

// let i = 0;
// while (i < 2) {
//     let expense = prompt("Введите обязательную статью расходов в этом месяце", ""),
//         cost = +prompt("Во сколько обойдется?", "");

//     if ((typeof (expense) === "string") && (expense != null) && (cost != null) 
//         && (expense != null) && (cost != null) && (expense.length <= 50)) {
//         appData.expenses[expense] = cost;
//     }
//     ++i;
// }

// i = 0;
// do {
//     let expense = prompt("Введите обязательную статью расходов в этом месяце", ""),
//         cost = +prompt("Во сколько обойдется?", "");

//     if ((typeof (expense) === "string") && (expense != null) && (cost != null) 
//         && (expense != null) && (cost != null) && (expense.length <= 50)) {
//         appData.expenses[expense] = cost;
//     }
//     ++i;
// } while (i < 2);

appData.dayBudget = appData.budget / 30;

alert("Ежедневный бюджет: " + appData.dayBudget);

if (appData.dayBudget <= 100) {
    console.log("Низкий уровень достатка");
} else if (appData.dayBudget <= 2000) {
    console.log("Средний уровень достатка");
} else {
    console.log("Высокий уровень достатка");
}