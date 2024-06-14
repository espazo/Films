import React from 'react';
import _Layout from './pages/_Layout';
import {BrowserRouter, Route} from "react-router-dom";

function App() {
    return (
        <BrowserRouter>
            <Route path='/' component={_Layout}></Route>
        </BrowserRouter>
    );
}

export default App;
