import KakaoPostcodeEmbed from 'react-daum-postcode';

import Modal from '../../components/Modal/Modal';
import Button from '../../components/Button/Button';

import { useState } from 'react';

function SearchAddress({ isOpened, setIsOpened }) {
    const setModal = () => {
        setIsOpened(!isOpened);
    }

    const Postcode = () => {
        const handleComplete = (data) => {
            let fullAddress = data.address;
            let extraAddress = '';

            if (data.addressType === 'R') {
                if (data.bname !== '') {
                    extraAddress += data.bname;
                }
                if (data.buildingName !== '') {
                    extraAddress += extraAddress !== '' ? `, ${data.buildingName}` : data.buildingName;
                }
                fullAddress += extraAddress !== '' ? ` (${extraAddress})` : '';
            }

            console.log(fullAddress);
        };

        return <KakaoPostcodeEmbed onComplete={handleComplete()} />;
    };
    // useState cnrk

    return (
        <Modal className="search-address">
            {Postcode()}
            <Button type="button" text="제출하기" onClick={setModal}/>
        </Modal>
    );
}

export default SearchAddress;