import './Card.css';

function Card({ children }) {
    return(
        <div className="card-wrapper">
            <div className="card">
                <div className="card-inner">
                    {children}
                </div>
            </div>
        </div>
    );
}

export default Card;