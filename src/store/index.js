import { configureStore } from "@reduxjs/toolkit";
import { createLogicMiddleware } from "redux-logic";

import { authAxios, baseAxios } from "../services/axios";

import authReducer from "./auth/slice";
import authLogics from "./auth/logic";

const logicDependencies = {
  authAxios,
  baseAxios,
};

const logicsArray = [...authLogics];

const logicMiddleware = createLogicMiddleware(logicsArray, logicDependencies);

export default store = configureStore({
  reducer: {
    auth: authReducer,
  },
  middleware: [logicMiddleware],
});
