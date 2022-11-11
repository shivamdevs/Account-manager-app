import { Route, Routes } from "react-router-dom";
import Logo from "./Logo";

import css from './styles/header.module.css';

import Button from './Button';

function Header(props) {
    return (
        <header className={css.header}>
            <div className={css.flexbox}>
                <Logo />
                <Routes>
                    <Route exact path='/' element={<Home />} />
                    <Route path='/dashboard' element={<Dashboard />} />
                    <Route path='/login' element={<Auth />} />
                    <Route path='/register' element={<Auth />} />
                    <Route path='/recover' element={<Auth />} />
                </Routes>
            </div>
        </header>
    );
}

export default Header;

function Dashboard(props) {

}

function Auth(props) {
    return (<>Nothing</>);
}

function Home(props) {
    return (
        <div className={css.btns}>
            <Button to="/login" style={{fontSize: '18px'}} theme="light">Sign in</Button>
            <Button to="/register" style={{fontSize: '18px'}} theme="dark">Create Account</Button>
        </div>
    );
}