import React, { Component as ReactComponent } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Form from './shared/Form';
import Label from './shared/Label';
import Input from './shared/Input';
import Button from './shared/Button';
import { addBudget } from '../redux/BudgetAcc/budgetAccActions';

class BudgetForm extends ReactComponent {
  static propTypes = {
    onSave: PropTypes.func.isRequired,
  };

  state = { budget: 0 };

  handleChange = e => {
    this.setState({
      budget: e.target.value,
    });
  };

  handleSubmit = e => {
    e.preventDefault();

    this.props.onSave(this.state.budget);

    this.setState({ budget: 0 });
  };

  render() {
    const { budget } = this.state;

    return (
      <Form onSubmit={this.handleSubmit}>
        <Label>
          Enter your total budget
          <Input type="number" value={budget} onChange={this.handleChange} />
        </Label>

        <Button label="Save" type="submit" />
      </Form>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  onSave: value => dispatch(addBudget(value)),
});

export default connect(null, mapDispatchToProps)(BudgetForm);
