import css from './../styles/auth.module.css';

function Signin(props) {
    props.setTitle("Sign in")
    return (
        <div className={css.auth}>
            <div className={css.container}>
                <div className={css.title}>Welcome Back!</div>
                <div className={css.comment}>Login to your Account to continue to use the amazing features of Account Manager.</div>
                <img className={css.image} src="/assets/images/login_pdn4.svg" alt="" />
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
export default Signin;