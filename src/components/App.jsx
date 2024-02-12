import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { refreshUser } from '../redux/auth';

import AppBar from './AppBar';
import RegisterPage from 'pages/RegisterPage';
import LoginPage from 'pages/LoginPage';
import HomePage from 'pages/HomePage';
import ShoppingCartPage from 'pages/ShoppingCartPage';
import RestrictedRoute from './RestrictedRoute';
import PrivateRoute from './PrivateRoute';
import { useAuth } from 'hooks';

const { Routes, Route } = require('react-router-dom');

const App = () => {
    const dispatch = useDispatch();
    const { isRefreshing } = useAuth();

    useEffect(() => {
        dispatch(refreshUser());
    }, [dispatch]);
    return (
        <>
            {!isRefreshing && (
                <Routes>
                    <Route path="/" element={<AppBar />}>
                        <Route index element={<HomePage />} />
                        <Route
                            path="cart"
                            element={
                                <PrivateRoute redirectTo="/" component={<ShoppingCartPage />} />
                            }
                        />
                        <Route
                            path="register"
                            element={
                                <RestrictedRoute
                                    redirectTo="/"
                                    component={<RegisterPage />}
                                />
                            }
                        />
                        <Route
                            path="login"
                            element={
                                <RestrictedRoute
                                    redirectTo="/"
                                    component={<LoginPage />}
                                />
                            }
                        />
                    </Route>
                </Routes>
            )}
        </>
    );
};

export default App;
