import './AddressForm.css';

import InputBox from '../../components/InputBox/InputBox';
import SearchAddress from '../search-address/SearchAddress';
import { useState } from 'react';

function AddressForm() {
    const [isOpened, setIsOpened] = useState(false);

    const setModal = () => {
        setIsOpened(!isOpened);
    }

    const showModal = () => {
        if (isOpened) {
            return <SearchAddress isOpened={isOpened} setIsOpened={setIsOpened} />
        }
    }

    return(
        <div className="address-form">
            <legend>주소</legend>
            <InputBox type="text" placeholder="클릭하여 주소 검색" onFocus={setModal}/>
            {showModal()}
            <InputBox type="text" placeholder="상세주소" />
        </div>
    );
}

export default AddressForm;