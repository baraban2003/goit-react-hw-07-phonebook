import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
/* import logger from 'redux-logger'; */
import { setupListeners } from '@reduxjs/toolkit/query';
import phoneReducer from './phone-reducer';
import { contactApi } from './contactSlice';

const store = configureStore({
  reducer: {
    contacts: phoneReducer,
    [contactApi.reducerPath]: contactApi.reducer,
  },
  middleware: getDefaultMiddleware => [
    ...getDefaultMiddleware(),
    /* logger, */

    contactApi.middleware,
  ],

  //когда продакшн, дев тулзы не нужны
  devTools: process.env.NODE_ENV === 'development',
});

const storeForExport = {
  store,
};
setupListeners(store.dispatch);
export default storeForExport;
