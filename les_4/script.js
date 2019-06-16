'use strict'

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
    functions: {
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
                    alert(i+1 + ": " + item);
                }
            );
        }
    }
};

for (let i = 0; i < 2; ++i) {
    appData.functions.chooseExpenses();
}

appData.functions.detectDayBudget();

appData.functions.detectLevel();

appData.functions.checkSavings();

for (let i = 0; i < 3; ++i) {
    appData.functions.chooseOptExpenses(i + 1);
}

appData.functions.chooseIncome();