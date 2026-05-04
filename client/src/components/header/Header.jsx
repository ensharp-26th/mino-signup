import './Header.css';

function Header({ text }) {
    return(
        <header className="header">
            {text}
        </header>
    ); 
}

export default Header;