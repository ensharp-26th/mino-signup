import './Card.css';

function Card({ name, children }) {
    return(
        <div className="wrapper">
            <div className="card">
                <div className="inner" name={name}>
                    {children}
                </div>
            </div>
        </div>
    );
}

export default Card;