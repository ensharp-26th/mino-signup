import './Card.css';

import Header from'../Header/Header';

function Card({ name, children }) {
    return(
        <div className="wrapper">
            <div className="card">
                <form className="inner" name={name}>
                    {children}
                </form>
            </div>
        </div>
    );
}

export default Card;