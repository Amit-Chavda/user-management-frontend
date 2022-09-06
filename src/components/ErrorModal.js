import { Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import Button from 'react-bootstrap/Button';

export default function ErrroModal(props) {
    let isErrorModal = props.isErrorModal
    let errorObject = props.errorObject
    let hideModal=props.onClickHide;
    return (
        <Modal
            style={{ color: 'red' }}
            size="lg"
            isOpen={isErrorModal}>

            <ModalHeader>
                {errorObject.statusCode} : {errorObject.title}
            </ModalHeader>
            <ModalBody>
                {errorObject.message}
                {'\n'}
            </ModalBody>
            <ModalFooter>
                <Button
                    style={{ width: '80px' }}
                    variant="primary"
                    onClick={hideModal}>
                    Ok
                </Button>
            </ModalFooter>
        </Modal>
    );
}