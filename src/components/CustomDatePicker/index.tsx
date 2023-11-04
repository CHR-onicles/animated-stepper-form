/* eslint-disable import/no-duplicates */
import DatePicker from "react-datepicker";
import { BsCalendar } from "react-icons/bs";
import { setHours, setMinutes } from "date-fns";

import { StyledCustomDatePicker } from "./CustomDatePicker.styled";

import "react-datepicker/dist/react-datepicker.css";


interface CustomDatePickerProps {
  startDate: Date | undefined;
  setStartDate: (arg: Date) => void;
  showTimeSelect?: boolean;
  isInline?: boolean;
  className?: string;
  isReadOnly?: boolean;
  id?: string;
  isFullWidth?: boolean;
  placeholder?: string;
  minDate?: Date;
  showYearDropdown?: boolean;
  required?: boolean;
  tabIndex?: number;
}

export const CustomDatePicker = ({
  startDate,
  setStartDate,
  showTimeSelect = false,
  isInline = false,
  className,
  isReadOnly = false,
  id,
  isFullWidth = true,
  placeholder,
  minDate = new Date(1900, 0, 1),
  showYearDropdown = false,
  required = false,
  tabIndex,
}: CustomDatePickerProps) => {
  // console.log("[From Date picker]", startDate);

  return (
    <StyledCustomDatePicker
      className={className}
      $isInline={isInline}
      $isReadOnly={isReadOnly}
      $isFullWidth={isFullWidth}>
      {isInline ? null : <BsCalendar className="calendar-icon" />}
      <DatePicker
        id={id}
        tabIndex={tabIndex}
        required={required}
        selected={startDate}
        onChange={date => {
          setStartDate(date!);
          // console.log(date);
        }}
        minDate={minDate}
        showTimeSelect={showTimeSelect}
        inline={isInline}
        minTime={setHours(setMinutes(new Date(), 0), 9)}
        maxTime={setHours(setMinutes(new Date(), 30), 17)}
        readOnly={isReadOnly}
        dateFormat={`dd/MM/yyyy${showTimeSelect ? ",HH:mm" : ""}`}
        timeFormat="HH:mm"
        placeholderText={placeholder}
        showYearDropdown={showYearDropdown}
        dropdownMode="select"
      />
    </StyledCustomDatePicker>
  );
};
