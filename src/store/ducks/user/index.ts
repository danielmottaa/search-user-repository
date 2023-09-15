import { createAction, createReducer } from "@reduxjs/toolkit";

export interface IUser {
  activeUser?: any;
}

const INITIAL_STATE: IUser = {};

export const userData = createAction<any>("@userdata");

export default createReducer(INITIAL_STATE, {
  [userData.type]: (state, action) => ({
    ...state,
    activeUser: action.payload,
  }),
});
