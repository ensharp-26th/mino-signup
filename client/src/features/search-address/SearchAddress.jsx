import React from 'react';
import KakaoPostcodeEmbed from 'react-daum-postcode';

import Modal from '../../components/Modal/Modal';
import Button from '../../components/Button/Button';

// 주소 검색기능 코드출처: https://www.npmjs.com/package/react-daum-postcode
function SearchAddress() {
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

        return <KakaoPostcodeEmbed onComplete={handleComplete("")} />;
    };

    return (
        <Modal>
            {Postcode()}
            <Button text="제출하기" />
        </Modal>
    );
}

export default SearchAddress;