import './Card.css';

import Header from'../header/Header';

function Card({ children }) {
    return(
        <div className="wrapper">
            <div className="card">
                <div className="inner">
                    {children}
                </div>
            </div>
        </div>
    );
}

export default Card;