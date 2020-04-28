import React, { useContext } from "react";
import { DateRangePicker } from "react-date-range";
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file
import { Store } from "store";
import { SetDateRange } from "store/actions";

export default function Range() {
  const { state, dispatch } = useContext(Store);

  const changeDates = (ranges) => dispatch(SetDateRange(ranges.selection));

  return (
    <DateRangePicker
      ranges={[state.dateRange]}
      months={2}
      direction='horizontal'
      showDateDisplay={false}
      onChange={changeDates}
    />
  );
}
