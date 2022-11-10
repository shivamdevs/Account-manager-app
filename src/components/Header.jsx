import Logo from "./Logo";

function Header(props) {
    return (
        <header className="header">
            <div className="flexbox">
                <Logo />
            </div>
        </header>
    );
}

export default Header;