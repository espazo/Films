import React from 'react';
import {NavLink, Route} from 'react-router-dom';
import Home from "./Home";
import MovieList from "./movie/MovieList";
import AddMovie from "./movie/AddMovie";
import EditMovie from "./movie/EditMovie";
import {Layout, Menu} from 'antd';

const {
    Header, Sider, Content,
} = Layout;

const _Layout: React.FC = function () {
    return (
        <div className="container">
            <Layout>
                <Header className="header">
                    <NavLink to='/'>
                        Manager System
                    </NavLink>
                </Header>
                <Layout>
                    <Sider>
                        <Menu mode='inline' theme='dark'>
                            <Menu.Item key='1'>
                                <NavLink to='/movie'>the list</NavLink>
                            </Menu.Item>
                            <Menu.Item key='2'>
                                <NavLink to='/movie/add'>add item</NavLink>
                            </Menu.Item>
                        </Menu>
                    </Sider>
                    <Content>
                        <div className='main'>
                            <Route path='/' component={Home} exact={true}></Route>
                            <Route path='/movie' component={MovieList} exact={true}></Route>
                            <Route path='/movie/add' component={AddMovie}></Route>
                            <Route path='/movie/edit/:id' component={EditMovie as any}></Route>
                        </div>
                    </Content>
                </Layout>
            </Layout>
            {/*<header>*/}
            {/*    <ul>*/}
            {/*        <li>*/}
            {/*            <NavLink to='/'>index</NavLink>*/}
            {/*        </li>*/}
            {/*        <li>*/}
            {/*            <NavLink to='/movie'>movie list</NavLink>*/}
            {/*        </li>*/}
            {/*        <li>*/}
            {/*            <NavLink to='/movie/add'>add movie</NavLink>*/}
            {/*        </li>*/}
            {/*        <li>*/}
            {/*            <NavLink to='/movie/edit/1234'>edit movie</NavLink>*/}
            {/*        </li>*/}
            {/*    </ul>*/}
            {/*</header>*/}
        </div>
    );
};

export default _Layout;
