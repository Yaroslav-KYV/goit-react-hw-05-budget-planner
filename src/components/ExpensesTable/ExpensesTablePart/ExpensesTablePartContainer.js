import { connect } from 'react-redux';
import { makeGetExpenseById } from '../../../redux/BudgetAcc/budgetAccSelectors';
import { delExpense } from '../../../redux/BudgetAcc/budgetAccActions';
import ExpensesTablePart from './ExpensesTablePart';

const makeMapStateToProps = () => {
  const getExpenseById = makeGetExpenseById();

  const mapStateToProps = (state, ownProps) => {
    const { name, amount } = getExpenseById(state, ownProps.id);

    return { name, amount };
  };

  return mapStateToProps;
};

const mapDispatchToProps = (dispatch, ownProps) => ({
  onRemove: () => dispatch(delExpense(ownProps.id)),
});

export default connect(
  makeMapStateToProps,
  mapDispatchToProps,
)(ExpensesTablePart);
