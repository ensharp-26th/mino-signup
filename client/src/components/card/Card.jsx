import './Card.css';

import Header from'../Header/Header';

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