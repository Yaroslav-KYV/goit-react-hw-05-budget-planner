import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import {
  getBudget,
  getExpensesTotal,
  getBalance,
} from '../../redux/BudgetAcc/budgetAccSelectors';
import Stats from '../Stats';

const Container = styled.section`
  display: inline-flex;
  justify-content: space-between;
  align-items: center;
`;

const Values = ({ budget, expensesTotal, balance }) => (
  <Container>
    <Stats label="Budget" value={budget} isPositive />
    <Stats label="Expenses" value={expensesTotal} />
    <Stats label="Balance" value={balance} isPositive={balance >= 0} />
  </Container>
);

Values.propTypes = {
  expensesTotal: PropTypes.number.isRequired,
  budget: PropTypes.number.isRequired,
  balance: PropTypes.number.isRequired,
};

const mapStateToProps = state => ({
  budget: getBudget(state),
  expensesTotal: getExpensesTotal(state),
  balance: getBalance(state),
});

export default connect(mapStateToProps)(Values);
