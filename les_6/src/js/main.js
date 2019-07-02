'use strict'

let values = {
    budgetValue: document.getElementsByClassName('budget-value')[0],
    dayBudgetValue: document.getElementsByClassName('daybudget-value')[0],
    levelValue: document.getElementsByClassName('level-value')[0],
    expensesValue: document.getElementsByClassName('expenses-value')[0],
    optionalExpensesValue: document.getElementsByClassName('optionalexpenses-value')[0],
    incomeValue: document.getElementsByClassName('income-value')[0],
    inMonthSavingsComeValue: document.getElementsByClassName('monthsavings-value')[0],
    yearSavingsValue: document.getElementsByClassName('yearsavings-value')[0]
};

let buttons = {
    start: document.getElementById('start'),
    confirmExpenses: document.getElementsByTagName('button')[0],
    confirmOptionalExpenses: document.getElementsByTagName('button')[1],
    countBudget: document.getElementsByTagName('button')[2]
};

let data = {
    expenses: document.querySelectorAll('.expenses-item'),
    optionalExpenses: document.querySelectorAll('.optionalexpenses-item'),
    income: document.querySelector('.choose-income')
};

let savings = {
    savingsCheck: document.querySelector('#savings'),
    savingsSum: document.querySelector('#sum'),
    savingsPercent: document.querySelector('#percent')
};

let date = {
    year: document.querySelector('.year-value'),
    months: document.querySelector('.month-value'),
    day: document.querySelector('.day-value')
};

function start() {
    money = +prompt("Ваш бюджет на месяц?", "");
    time = prompt("Введите дату в формате YYYY-MM-DD", "");

    if (isNaN(money) || money == "") {
        start();
    }
}

let money, time;

start();

let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: true,
};

let functions = {
    chooseExpenses: function() {
        let expense, cost;
        do {
            expense = prompt("Введите обязательную статью расходов в этом месяце", "");
            cost = +prompt("Во сколько обойдется?", "");
        } while (expense == "" || expense == "" || expense == null || cost == null);
        appData.expenses[expense] = cost;
    },

    detectDayBudget: function() {
        appData.dayBudget = +(appData.budget / 30).toFixed();
        alert("Ежедневный бюджет: " + appData.dayBudget);
    },

    detectLevel: function() {
        if (appData.dayBudget <= 100) {
            console.log("Низкий уровень достатка");
        } else if (appData.dayBudget <= 2000) {
            console.log("Средний уровень достатка");
        } else {
            console.log("Высокий уровень достатка");
        }
    },

    checkSavings: function() {
        if (appData.savings) {
            let save = +prompt("Каковы ваши накопления?"),
                percent = +prompt("Под какой процент?");
            appData.monthIncome = save / 100 / 12 * percent;
            alert("Ваш доход за месяц: " + appData.monthIncome);
        }
    },

    chooseOptExpenses: function(num) {
        let optExpense;
        do {
            optExpense = prompt("Статья необязательных расходов?");
        } while (optExpense == null || optExpense == "");
        appData.optionalExpenses[num] = optExpense;
    },

    chooseIncome: function() {
        let items;
        do {
            items = prompt("Введи дополниетльные источники дохода (через запятую)");
        } while (typeof(items) != 'string' || items == null || items == "");
        appData.income = items.split(', ');
        appData.income.push(prompt("Может что-то ещё?"));
        appData.income.sort();
        alert("Способы доп. заработка:")
        appData.income.forEach(
            function(item, i) {
                alert(i + 1 + ": " + item);
            }
        );
    }
};

for (let i = 0; i < 2; ++i) {
    functions.chooseExpenses();
}

functions.detectDayBudget();

functions.detectLevel();

functions.checkSavings();

for (let i = 0; i < 3; ++i) {
    functions.chooseOptExpenses(i + 1);
}

functions.chooseIncome();

console.log("Наша программа включает в себя данные:");
for (const key in appData) {
    console.log(key + ": " + appData[key]);
}