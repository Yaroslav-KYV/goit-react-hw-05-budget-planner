import React from 'react';
import { connect } from 'react-redux';
import ExpensesTable from './ExpensesTable';
import { getAllExpenses } from '../../redux/BudgetAcc/budgetAccSelectors';
import { delExpense } from '../../redux/BudgetAcc/budgetAccActions';

const ExpensesTableContainer = ({ items }) =>
  items.length > 0 && <ExpensesTable items={items} />;

const mapStateToProps = state => ({
  items: getAllExpenses(state),
});

const mapDispatchToProps = dispatch => ({
  onRemove: id => dispatch(delExpense(id)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ExpensesTableContainer);
