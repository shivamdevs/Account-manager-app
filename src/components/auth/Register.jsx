import css from './../styles/auth.module.css';

function Register(props) {
    props.setTitle("Register");
    return (
        <div className={css.auth}>
            <div className={css.container}>
                <div className={css.title}>Welcome here!</div>
                <div className={css.comment}>Create an Account to start using the amazing features of Account Manager.</div>
                <img className={css.image} src="/assets/images/register_o7id.svg" alt="" />
            </div>
            <div className={css.container}>
                <form className={css.form} action="" method="post">
                    <div className={css.title}>Sign in</div>
                    <div className={css.group}>
                        <label htmlFor="email">Email Address</label>
                        <input type="email" id='email' autoComplete='email' autoFocus required />
                        <div className={css.error}></div>
                    </div>
                    <div className={css.group}>
                        <label htmlFor="password">Password</label>
                        <input type="password" id='password' autoComplete='current-password' required />
                        <div className={css.error}></div>
                    </div>
                </form>
            </div>
        </div>
    );
}
export default Register;