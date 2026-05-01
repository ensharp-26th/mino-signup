import './Header.css';

function Header({ title }) {
    return(
        <header className="header">
            {title}
        </header>
    ); 
}

export default Header;