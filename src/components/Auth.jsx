import { Route, Routes } from 'react-router-dom';
import css from './styles/auth.module.css';

import Login from './auth/login';
import Register from './auth/Register';
import Recover from './auth/Recover';

function Auth(props) {
    return (
        <div className={css.auth}>
            <Routes>
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/recover" element={<Recover />} />
            </Routes>
        </div>
    );
}
export default Auth;