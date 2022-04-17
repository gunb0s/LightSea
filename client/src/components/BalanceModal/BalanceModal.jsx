import { Modal, Button } from "react-bootstrap";

const BalanceModal = ({ show, setShow, balance }) => {
  return (
    <Modal
      show={show}
      onHide={() => {
        setShow(false);
      }}
      backdrop="static"
      keyboard={false}
    >
      <Modal.Header closeButton>
        <Modal.Title>Balance</Modal.Title>
      </Modal.Header>
      <Modal.Body>{`Your balance is ${balance}`}</Modal.Body>
      <Modal.Footer>
        <Button
          variant="secondary"
          onClick={() => {
            setShow(false);
          }}
        >
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default BalanceModal;
