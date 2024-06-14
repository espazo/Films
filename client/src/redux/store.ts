import {applyMiddleware, createStore} from 'redux';
import {rootReducer} from "./reducers/RootReducer";
import logger from 'redux-logger';

// export const store = createStore(
//     rootReducer,
//     applyMiddleware(logger),
// );

export const store = createStore(
    rootReducer,
);

store.subscribe(() => {
    console.log(store.getState());
});
