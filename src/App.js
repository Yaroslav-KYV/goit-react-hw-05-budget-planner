import React from 'react';
import BudgetForm from './components/BudgetForm';
import ExpenseForm from './components/ExpenseForm';
import ExpensesTableContainer from './components/ExpensesTable/ExpensesTableContainer';
import Values from './components/Values';
import GlobalStyle from './variableStyle/globalStyle';
import { Container } from './styledComponents/allComponents.styled';

const App = () => {
  return (
    <>
      <GlobalStyle />
      <Container>
        <BudgetForm />
        <Values />
        <ExpenseForm />
        <ExpensesTableContainer />
      </Container>
    </>
  );
};

export default App;
