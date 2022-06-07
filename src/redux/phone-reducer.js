import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import actions from './phone-actions';

const filter = createReducer('', {
  [actions.changeFilter]: (_, { payload }) => payload,
});

export default combineReducers({ filter });
