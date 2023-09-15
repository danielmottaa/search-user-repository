import { createAction, createReducer } from "@reduxjs/toolkit";

export interface IUser {
  activeUser: any[];
}

export const userData = createAction<any>("USERDATA");

const INITIAL_STATE = {
  activeUser: []
} as IUser;

export default createReducer(INITIAL_STATE, {
  [userData.type]: (state, action) => ({
    ...state,
    activeUser: action.payload,
  }),
});