import { combineReducers } from "redux";

import userReducer from './userReducer';
import commentsReducer from "./commentReducer";

export const rootReducer = combineReducers({ user: userReducer, comments: commentsReducer });