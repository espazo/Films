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
        <App/>
    </React.StrictMode>
);

store.dispatch(MovieAction.fetchMovies({
    page: 2,
})).then(() => {
    store.dispatch(MovieAction.deleteMovie('6663e9fadc66c3a3ca827fbd'));
});
