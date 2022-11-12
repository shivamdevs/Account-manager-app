import css from './../styles/auth.module.css';

function Recover(props) {
    props.setTitle("Recover");
    return (
        <div className={css.auth}>
            <div className={css.container}>
                <div className={css.title}>Welcome Reset!</div>
                <div className={css.comment}>Reset your Account to continue using the amazing features of Account Manager.</div>
                <img className={css.image} src="/assets/images/recover_hxwm.svg" alt="" />
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
export default Recover;