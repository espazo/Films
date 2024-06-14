import React from 'react';
import Layout from './pages/Layout';
import {BrowserRouter, Route} from "react-router-dom";

function App() {
    return (
        <BrowserRouter>
            <Route path='/' component={Layout}></Route>
        </BrowserRouter>
    );
}

export default App;
