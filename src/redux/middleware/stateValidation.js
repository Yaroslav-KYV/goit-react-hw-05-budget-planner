/* eslint-disable no-console */
import tv4 from 'tv4';
import stateSchema from '../../schemas/stateSchema.json';

const stateValidation = store => next => action => {
  next(action);

  const isValid = tv4.validate(store.getState(), stateSchema);

  if (!isValid) {
    console.warn('Invalid state schema detected!');
    console.log(tv4.error);
  }
};

export default stateValidation;
