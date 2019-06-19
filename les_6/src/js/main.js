// Интегрировать в основной код?

'use strict'

let start = document.getElementById('start');

// Main Values
let
    budgetValue = document.getElementsByClassName('budget-value')[0],
    dayBudgetValue = document.getElementsByClassName('daybudget-value')[0],
    levelValue = document.getElementsByClassName('level-value')[0],
    expensesValue = document.getElementsByClassName('expenses-value')[0],
    optionalExpensesValue = document.getElementsByClassName('optionalexpenses-value')[0],
    incomeValue = document.getElementsByClassName('income-value')[0],
    inMonthSavingsComeValue = document.getElementsByClassName('monthsavings-value')[0],
    yearSavingsValue = document.getElementsByClassName('yearsavings-value')[0];

// Buttons
let
    confirmExpenses = document.getElementsByTagName('button')[0],
    confirmOptionalExpenses = document.getElementsByTagName('button')[1],
    countBudget = document.getElementsByTagName('button')[2];

// Data
let
    expenses = document.querySelectorAll('.expenses-item'),
    optionalExpenses = document.querySelectorAll('.optionalexpenses-item'),
    income = document.querySelector('.choose-income');

// Savings
let
    savingsCheck = document.querySelector('#savings'),
    savingsSum = document.querySelector('#sum'),
    savingsPercent = document.querySelector('#percent');

// Date
let
    year = document.querySelector('.year-value'),
    months = document.querySelector('.month-value'),
    day = document.querySelector('.day-value');