import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {store} from "./redux/store";
import MovieAction from "./redux/actions/MovieAction";

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

store.dispatch(MovieAction.setLoadingAction(true));
store.dispatch(MovieAction.setConditionAction({page: 2}));
