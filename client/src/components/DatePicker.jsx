import React from "react";
import { FormGroup, FormLabel } from "react-bootstrap";
import DatePicker from "react-datepicker";

const DatePickerField = ({ name, value, onChange }) => {
  return (
  <>
  <FormGroup className="d-flex flex-column">
    <FormLabel htmlFor={name}>Appointment Date:</FormLabel>
    <DatePicker className="form-control"
      selected={(value && new Date(value)) || null}
      onChange={val => {
        onChange(name, val);
      }}
    />
  </FormGroup>
    

    </>
  );
};

export default DatePickerField;
