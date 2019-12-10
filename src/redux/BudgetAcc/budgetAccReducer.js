import { combineReducers } from 'redux';
import { ADD_BUDGET, ADD_EXPENSE, DEL_EXPENSE } from './budgetAccTypes';

const budgetReducer = (state = 0, { type, payload }) => {
  switch (type) {
    case ADD_BUDGET:
      return payload.value;

    default:
      return state;
  }
};

const expenseReducer = (state = [], { type, payload }) => {
  switch (type) {
    case ADD_EXPENSE:
      return [...state, payload.expense];

    case DEL_EXPENSE:
      return state.filter(expense => expense.id !== payload.id);

    default:
      return state;
  }
};

export default combineReducers({
  budget: budgetReducer,
  expenses: expenseReducer,
});
