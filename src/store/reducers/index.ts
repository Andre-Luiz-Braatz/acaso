import { combineReducers, Reducer } from "@reduxjs/toolkit";
import userReducer, { UserProps } from './user';

export interface RootState {
    user: UserProps;
}

const reducers: Reducer<RootState> = combineReducers<RootState>({
    user: userReducer,
});

export default reducers;