import './AddressForm.css';

import { useState } from 'react';

import InputBox from '../../components/InputBox/InputBox';
import SearchAddress from '../search-address/SearchAddress';

function AddressForm() {
    const [address, setAddress] = useState("");
    const [showModal, setShowModal] = useState(false);

    return(
        <div className="address-form">
            <legend>주소</legend>
            <InputBox type="text" value={address} placeholder="클릭하여 주소 검색" onFocus={() => setShowModal(true)}/>
            {showModal && (<SearchAddress showModal={showModal} setShowModal={setShowModal} setAddress={setAddress} />)}
            <InputBox type="text" placeholder="상세주소" />
        </div>
    );
}

export default AddressForm;