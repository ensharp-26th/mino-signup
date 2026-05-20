import './ActionSuccess.css';

import SuccessCheck from '../../../../assets/images/SuccessCheck.png';

function ActionSuccess({ detail }) {
    return (
        <div className="action-success">
            <img className="check" src={SuccessCheck} />
            {detail}
        </div>
    );
}

export default ActionSuccess;