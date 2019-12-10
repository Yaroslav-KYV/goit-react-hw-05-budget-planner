import { createSelector } from 'reselect';

export const getBudget = state => state.account.budget;

export const getAllExpenses = state => state.account.expenses;

export const getExpensesTotal = createSelector(getAllExpenses, expenses =>
  expenses.reduce((total, expense) => total + expense.amount, 0),
);

export const makeGetExpenseById = () =>
  createSelector([getAllExpenses, (state, id) => id], (expenses, id) =>
    expenses.find(expense => expense.id === id),
  );

export const getBalance = state => getBudget(state) - getExpensesTotal(state);
