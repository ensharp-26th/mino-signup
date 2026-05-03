import './AddressForm.css';

import InputBox from '../../components/InputBox/InputBox';

function AddressForm() {
    return(
        <div className="address-form">
            <span>주소</span>
            <InputBox type="text" placeholder="클릭하여 주소 검색" />
            <InputBox type="text" placeholder="상세주소" />
        </div>
    );
}

export default AddressForm;