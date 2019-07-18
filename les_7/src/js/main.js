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

let appData = {
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: false,
};

let functions = {
    start: function () {
        let time = prompt("Введите дату в формате YYYY-MM-DD", ""),
            money = +prompt("Ваш бюджет на месяц?", "");

        if (isNaN(money) || money == "") {
            functions.start();
        }

        time = new Date(Date.parse(time));
        appData.budget = money;
        appData.timeData = time;

        values.budgetValue.textContent = money.toFixed();
        date.year.value = time.getFullYear();
        date.months.value = time.getMonth() + 1;
        date.day.value = time.getDate();
    },

    chooseExpenses: function () {
        let sum = 0;

        for (let i = 0; i < data.expenses.length; i += 2) {
            console.log(data.expenses[i].value);
            console.log(+data.expenses[i + 1].value);
            let expense = data.expenses[i].value,
                cost = +data.expenses[i + 1].value;

            if (expense == "" || cost == "" || expense == null || cost == null) {
                --i;
            } else {
                sum += cost;
                appData.expenses[expense] = cost;
            }
        }

        values.expensesValue.textContent = sum;
    },

    detectDayBudget: function () {
        if (appData.budget != undefined) {
            let expenses = 0;
            for (let key in appData.expenses) {
                expenses += +appData.expenses[key];
            }
            appData.dayBudget = +(((appData.budget - expenses) / 30).toFixed(2));
            values.dayBudgetValue.textContent = appData.dayBudget;
            functions.detectLevel();
        } else {
            values.dayBudgetValue.textContent = 'Сначала нажмите кнопку "Начать расчёт"';
        }
    },

    detectLevel: function () {
        if (appData.dayBudget <= 100) {
            values.levelValue.textContent = "Низкий";
        } else if (appData.dayBudget <= 2000) {
            values.levelValue.textContent = "Средний";
        } else {
            values.levelValue.textContent = "Высокий";
        }
    },

    checkSavings: function (save, percent) {
        if (appData.savings) {
            if (isNaN(save) || isNaN(percent)) {
                values.inMonthSavingsComeValue.textContent = 'Пожалуйста, введи в оба поля числа';
                values.yearSavingsValue.textContent = 'Пожалуйста, введи в оба поля числа';
            } else {
                appData.monthIncome = save / 100 / 12 * percent;
                values.inMonthSavingsComeValue.textContent = appData.monthIncome.toFixed(2);

                appData.yearIncome = save / 100 * percent;
                values.yearSavingsValue.textContent = appData.yearIncome.toFixed(2);
            }
        } else {
            values.inMonthSavingsComeValue.textContent = 'Поставь галочку около поля "Есть ли накопления"';
            values.yearSavingsValue.textContent = 'Поставь галочку около поля "Есть ли накопления"';
        }
    },

    chooseOptExpenses: function () {
        for (let i = 0; i < data.optionalExpenses.length; ++i) {
            appData.optionalExpenses[i] = data.optionalExpenses[i].value;
            values.optionalExpensesValue.textContent += appData.optionalExpenses[i] + ', ';
        }
    },

    chooseIncome: function () {
        let items = data.income.value;
        appData.income = items.split(', ');
        values.incomeValue.textContent = items;
    }
};

buttons.start.addEventListener('click', functions.start);

buttons.confirmExpenses.addEventListener('click', functions.chooseExpenses);

buttons.confirmOptionalExpenses.addEventListener('click', functions.chooseOptExpenses);

buttons.countBudget.addEventListener('click', functions.detectDayBudget);

data.income.addEventListener('input', functions.chooseIncome);

savings.savingsCheck.addEventListener('click', () => {
    appData.savings = !appData.savings;
    let sum = +savings.savingsSum.value,
        percent = +savings.savingsPercent.value;
    functions.checkSavings(sum, percent);
});

savings.savingsSum.addEventListener('input', () => {
    let sum = +savings.savingsSum.value,
        percent = +savings.savingsPercent.value;
    functions.checkSavings(sum, percent);
});

savings.savingsPercent.addEventListener('input', () => {
    let sum = +savings.savingsSum.value,
        percent = +savings.savingsPercent.value;
    functions.checkSavings(sum, percent);
});