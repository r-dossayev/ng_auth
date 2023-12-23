import * as CounterActions from './user.actions';
import {UserActions} from './user.actions';
import {User} from "../models/User";
import {createAction, createReducer, on} from "@ngrx/store";

const initialState: UserState = {
  count: 12345,
  users : [
    {
      firstName: 'Erjan',
      lastName: 'Bolathan',
      email: 'sss',
      password: 'sssss',
    },
  ],
  authUser: {
    firstName: 'Erjan',
    lastName: 'Bolathan',
    email: 'sss',
    password: 'sssss',
  }
  ,

};

export type UserState = {
  count: number,
  users: User[],
  authUser: User,
};


export const UserReducer = createReducer(
  initialState,
  on(createAction('[User] Login User',
    (user: User) => ({ ...user })
    ), (state, action) => ({ ...state, authUser: action })),
  // on(CounterActions.decrement, (state) => ({ count: state.count - 1})),
  // on(CounterActions.reset, (state) => ({ count: 0 }))
);

 // export function UserReducer( state: any= initialState, action:any) {
 //  switch (action.type) {
 //    case "WWWW":
 //      return [...initialState];
 //    case "UserActions.REMOVE_USER":
 //      return [...initialState];
 //    default:
 //      return initialState;
 //  }
 // }
