import './AddressForm.css';

import InputBox from '../../components/InputBox/InputBox';

function AddressForm() {

    return(
        <div className="address-form">
            <legend>주소</legend>
            <InputBox type="text" placeholder="클릭하여 주소 검색"/>
            <InputBox type="text" placeholder="상세주소" />
        </div>
    );
}

export default AddressForm;