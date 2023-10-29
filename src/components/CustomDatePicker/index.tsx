/* eslint-disable import/no-duplicates */
import DatePicker, { registerLocale } from "react-datepicker";
import { BsCalendar } from "react-icons/bs";
import { setHours, setMinutes } from "date-fns";
import { enGB } from "date-fns/locale";

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
}: CustomDatePickerProps) => {
  // console.log("[From Date picker]", startDate);

  return (
    <StyledCustomDatePicker
      id={id}
      className={className}
      $isInline={isInline}
      $isReadOnly={isReadOnly}
      $isFullWidth={isFullWidth}>
      {isInline ? null : <BsCalendar className="calendar-icon" />}
      <DatePicker
        locale={enGB}
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
