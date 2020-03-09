import React from 'react';
import { Route, Redirect } from 'react-router-dom'

const SecureRoute = ({ component: Component, ...rest }) => {

    function checkToken() {
        if (localStorage.getItem('token')) {
            return true
        } else {
            return false
        }
    }

    return (
        <Route {...rest} render={props =>
            !checkToken() ? (
                <Redirect to='/login' />
            ) : (
                    <Component {...props} />
                )
        }
        />
    );
};

export default SecureRoute;