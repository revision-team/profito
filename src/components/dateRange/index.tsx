import React, { useState, useContext } from "react";
import { Button, Modal } from "react-rainbow-components";
import Range from "./range";
import { Store } from "store";
import { SetDateRange, SetSelectedDateRange } from "store/actions";

export default function DateRange() {
  const [openModal, setOpenModal] = useState(false);
  const { state, dispatch } = useContext(Store);
  const { dateRange, selectedRange } = state;

  const toggleOpenModal = () => setOpenModal(!openModal);

  const handleCancel = () => {
    dispatch(SetDateRange(selectedRange));
    toggleOpenModal();
  };

  const handleSave = () => {
    dispatch(SetSelectedDateRange(dateRange));
    toggleOpenModal();
  };

  return (
    <React.Fragment>
      <Button onClick={toggleOpenModal}>Select Dates</Button>
      {/* TODO: clarify modal */}
      <Modal
        isOpen={openModal}
        onRequestClose={handleCancel}
        size='large'
        footer={
          <div className='rainbow-flex rainbow-justify_spread'>
            <Button label='Cancel' variant='neutral' onClick={handleCancel} />
            <Button label='Save' variant='brand' onClick={handleSave} />
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
