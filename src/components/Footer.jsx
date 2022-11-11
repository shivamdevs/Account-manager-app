import { Link } from 'react-router-dom';
import css from './styles/footer.module.css';

function Footer(props) {
    return (
        <div className={css.footer}>
            <div className={css.flexbox}>
                <div>© Shivam Devs 2022</div>
                <div>
                    <Link to="/about">About</Link>
                    <Link to="/docs">Documentation</Link>
                    <Link to="/privacy">Privacy policy</Link>
                    <Link to="/privacy/terms">Terms of Use</Link>
                    <Link to="/privacy/cookies">Cookies policy</Link>
                </div>
            </div>
        </div>
    );
}

export default Footer;