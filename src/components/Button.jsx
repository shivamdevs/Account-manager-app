import { Link } from 'react-router-dom';
import css from './styles/button.module.css';

function Button(props) {
    return (
        <Link to={props.to} className={`${css.button} ${css.link} ${props.theme ? css[props.theme] : ""}`} style={props.style || {}}>{props.children}</Link>
    );
}

export default Button;