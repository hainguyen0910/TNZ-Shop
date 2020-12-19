import { configureStore } from '@reduxjs/toolkit';
// import { getDefaultMiddleware } from '@reduxjs/toolkit';
// const customizedMiddleware = getDefaultMiddleware({
//   serializableCheck: false,
// });

const rootReducer = {};

const store = configureStore({
  reducer: rootReducer,
  // middleware: [...customizedMiddleware],
});
export default store;
