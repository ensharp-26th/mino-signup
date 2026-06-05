import './Header.css';

function Header({ text, style }) {
    return(
        <header className="header" style={style}>
            {text}
        </header>
    ); 
}

export default Header;