import React, { useState } from "react";
import { Button, Modal } from "react-rainbow-components";
import Range from "./range";
export default function DateRange() {
  const [openModal, setOpenModal] = useState(false);

  const toggleOpenModal = () => setOpenModal(!openModal);

  return (
    <React.Fragment>
      <Button onClick={toggleOpenModal}>Show Dates</Button>
      {/* TODO: clarify modal */}
      <Modal
        isOpen={openModal}
        onRequestClose={toggleOpenModal}
        size='large'
        footer={
          <div className='rainbow-flex rainbow-justify_spread'>
            <Button
              label='Cancel'
              variant='neutral'
              onClick={toggleOpenModal}
            />
            <Button label='Save' variant='brand' onClick={() => {}} />
          </div>
        }
      >
        <br />
        <div className='rainbow-flex rainbow-justify_spread'>
          <Range />
        </div>
      </Modal>
    </React.Fragment>
  );
}
