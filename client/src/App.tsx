import React from 'react';
import _Layout from './pages/_Layout';
import {BrowserRouter, Route} from "react-router-dom";
import {Provider} from 'react-redux';
import {store} from './redux/store'

function App() {
    return (
        <Provider store={store}>
            <BrowserRouter>
                <Route path='/' component={_Layout}></Route>
            </BrowserRouter>
        </Provider>
    );
}

export default App;
