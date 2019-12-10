import uuidv1 from 'uuid/v1';

import { ADD_BUDGET, ADD_EXPENSE, DEL_EXPENSE } from './budgetAccTypes';

export const addBudget = value => {
  return {
    type: ADD_BUDGET,
    payload: {
      value: Number(value),
    },
  };
};

export const addExpense = ({ name, amount }) => {
  return {
    type: ADD_EXPENSE,
    payload: {
      expense: {
        id: uuidv1(),
        name,
        amount: Number(amount),
      },
    },
  };
};

export const delExpense = id => {
  return {
    type: DEL_EXPENSE,
    payload: {
      id,
    },
  };
};
