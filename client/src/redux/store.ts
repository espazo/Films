import {applyMiddleware, createStore} from 'redux';
import {IRootState, rootReducer} from "./reducers/RootReducer";
import logger from 'redux-logger';
import {thunk, ThunkMiddleware} from 'redux-thunk';

export const store = createStore(
    rootReducer as any,
    applyMiddleware(thunk as ThunkMiddleware<IRootState>, logger as any),
);

store.subscribe(() => {
    console.log(store.getState());
});
