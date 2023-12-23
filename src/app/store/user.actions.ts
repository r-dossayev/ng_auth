import { createAction } from '@ngrx/store';
import {User} from "../models/User";

// export const increment = createAction('[Counter] Increment count');
//
// export const decrement = createAction('[Counter] Decrement count');
//
// export const reset = createAction('[Counter] Reset count');
// const payload = { count: 0 };
//
//  type CounterActions = ReturnType<typeof increment> | ReturnType<typeof decrement> | ReturnType<typeof reset>;

export const addUser = createAction('[User] Add User', );
export const loginUser = createAction('[User] Login User', );
export const logoutUser = createAction('[User] Logout User', );
// export const addMessage = createAction('[User] Add Message', (message: any) => ({ message }));
// export const deleteMessage = createAction('[User] Delete Message', (message: any) => ({ message }));
// export const addBook = createAction('[User] Add Book', (book: any) => ({ book }));
// export const deleteBook = createAction('[User] Delete Book', (book: any) => ({ book }));
// export const updateBook = createAction('[User] Update Book', (book: any) => ({ book }));
// export const addBookToCart = createAction('[User] Add Book To Cart', (book: any) => ({ book }));
// export const deleteBookFromCart = createAction('[User] Delete Book From Cart', (book: any) => ({ book }));
// export const addBookToFavorite = createAction('[User] Add Book To Favorite', (book: any) => ({ book }));
// export const deleteBookFromFavorite = createAction('[User] Delete Book From Favorite', (book: any) => ({ book }));


export type UserActions = ReturnType<typeof addUser> | ReturnType<typeof loginUser> | ReturnType<typeof logoutUser>;
// export type UserActions = ReturnType<typeof addUser> | ReturnType<typeof loginUser> | ReturnType<typeof logoutUser> | ReturnType<typeof addMessage> | ReturnType<typeof deleteMessage> | ReturnType<typeof addBook> | ReturnType<typeof deleteBook> | ReturnType<typeof updateBook> | ReturnType<typeof addBookToCart> | ReturnType<typeof deleteBookFromCart> | ReturnType<typeof addBookToFavorite> | ReturnType<typeof deleteBookFromFavorite>;
