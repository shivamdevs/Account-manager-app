import { Link } from 'react-router-dom';
import css from './styles/logo.module.css';

function Logo(props) {
    return (
        <Link to="/" className={css.wrapper}>
            <div className={css.image}>
                <img src="/logo192.png" alt="" />
            </div>
            <div className={css.text}>Account Manager</div>
        </Link>
    );
}

export default Logo;