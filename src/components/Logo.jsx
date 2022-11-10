import css from './styles/logo.module.css';

function Logo(props) {
    return (
        <div className={css.wrapper}>
            <div className={css.image}>
                <img src="/logo192.png" alt="" />
            </div>
            <div className={css.text}>Account Manager</div>
        </div>
    );
}

export default Logo;