import './NameForm.css';

import InputBox from '../../components/InputBox/InputBox';

function NameForm() {
    return (
        <div className="name-form">
            <legend>이름</legend>
            <InputBox type="text" placeholder="" />
        </div>
    );
}

export default NameForm;