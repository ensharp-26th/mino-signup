import KakaoPostcodeEmbed from 'react-daum-postcode';

import Modal from '../../components/Modal/Modal';
import Button from '../../components/Button/Button';

function SearchAddress({ showModal, setShowModal, setAddress }) {
    const setSearchAddressModal = () => {
        setShowModal(!showModal);
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
            setAddress(fullAddress);
        };

        return <KakaoPostcodeEmbed onComplete={handleComplete} />;
    };

    return (
        <Modal className="search-address">
            {Postcode()}
            <Button type="button" onClick={setSearchAddressModal} text="제출하기"/>
        </Modal>
    );
}

export default SearchAddress;