import React from 'react';
import PropTypes from 'prop-types';
import ExpensesTablePartContainer from './ExpensesTablePart/ExpensesTablePartContainer';
import { Table } from '../../styledComponents/allComponents.styled';

const ExpensesTable = ({ items }) => (
  <Table>
    <thead>
      <tr>
        <th>Expense name</th>
        <th>Expense amount</th>
        <th />
      </tr>
    </thead>
    <tbody>
      {items.map(({ id }) => (
        <ExpensesTablePartContainer key={id} id={id} />
      ))}
    </tbody>
  </Table>
);

ExpensesTable.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
};

export default ExpensesTable;
