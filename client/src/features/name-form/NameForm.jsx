import './NameForm.css';

import InputBox from '../../components/InputBox/InputBox';

function NameForm() {
    return (
        <div className="name-form">
            <span>이름</span>
            <InputBox type="text" placeholder="" />
        </div>
    );
}

export default NameForm;