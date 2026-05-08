import './ActionSuccess.css';

import check72 from '../../assets/check72.png';

function ActionSuccess({ detail }) {
    return (
        <div className="action-success">
            <img className="check" src={check72} />
            {detail}
        </div>
    );
}

export default ActionSuccess;