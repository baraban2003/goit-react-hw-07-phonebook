import { createAction } from '@reduxjs/toolkit';

const changeFilter = createAction('phone/setFilter');

const actions = {
  changeFilter,
};

export default actions;
