import React, { useState } from "react";
import { DateRangePicker } from "react-date-range";
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file

export default function Range(props) {
  const [selected, setSelected] = useState({
    startDate: new Date(),
    endDate: new Date(),
    key: "selection",
  });

  const changeDates = (ranges) => setSelected(ranges.selection);

  return (
    <DateRangePicker
      ranges={[selected]}
      months={2}
      direction='horizontal'
      showDateDisplay={false}
      onChange={changeDates}
    />
  );
}
