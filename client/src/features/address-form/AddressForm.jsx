import './AddressForm.css';

import { useState } from 'react';

import InputBox from '../../components/InputBox/InputBox';
import SearchAddress from '../search-address/SearchAddress';

function AddressForm({ streetAddress, setStreetAddress, detailAddress, setDetailAddress }) {
    const [showAddressModal, setShowAddressModal] = useState(false);

    return(
        <div className="address-form">
            <legend>주소</legend>
            <InputBox type="text" value={streetAddress} placeholder="클릭하여 주소 검색" readOnly={true} onFocus={() => setShowAddressModal(true)}/>
            {showAddressModal && (<SearchAddress showAddressModal={showAddressModal} setShowAddressModal={setShowAddressModal} setStreetAddress={setStreetAddress} />)}
            <InputBox type="text" value={detailAddress} placeholder="상세주소" onChange={(e) => setDetailAddress(e.target.value)} />
        </div>
    );
}

export default AddressForm;