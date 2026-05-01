import './Card.css';

import Header from'../header/Header';

function Card({ page }) {
    return(
        <div className={`card ${page}`}>
            <Header title="En# SignUp!!"/>
        </div>
    );
}

export default Card;