import React, { useState, useContext } from "react";
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
      <Range />
    </React.Fragment>
  );
}
