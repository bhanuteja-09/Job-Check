import { configureStore } from "@reduxjs/toolkit";

import adminReducer from "";

const store = configureStore({
  reducer: { admin: adminReducer },
});

export default store;
