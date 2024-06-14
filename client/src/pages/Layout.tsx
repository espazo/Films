import React from 'react';
import {NavLink, Route} from 'react-router-dom';
import Home from "./Home";
import MovieList from "./movie/MovieList";
import AddMovie from "./movie/AddMovie";
import EditMovie from "./movie/EditMovie";

const Layout: React.FC = function () {
    return (
        <div>
            <header>
                <ul>
                    <li>
                        <NavLink to='/'>index</NavLink>
                    </li>
                    <li>
                        <NavLink to='/movie'>movie list</NavLink>
                    </li>
                    <li>
                        <NavLink to='/movie/add'>add movie</NavLink>
                    </li>
                    <li>
                        <NavLink to='/movie/edit/1234'>edit movie</NavLink>
                    </li>
                </ul>
                <div>
                        <Route path='/' component={Home} exact={true}></Route>
                        <Route path='/movie' component={MovieList} exact={true}></Route>
                        <Route path='/movie/add' component={AddMovie}></Route>
                        <Route path='/movie/edit/:id' component={EditMovie as any}></Route>
                </div>
            </header>
        </div>
    );
};

export default Layout;
