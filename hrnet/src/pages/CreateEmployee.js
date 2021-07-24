/* eslint-disable no-unused-vars */
import React, { useState } from "react";

import {
  CreateEmployeeContainer,
  PageTitle,
  NavLink,
  SubTitle,
  Button,
} from "../assets/Theme";
import { TextInput } from "../components/TextInput";
import { DateInput } from "../components/DateInput";
import { SelectInput } from "../components/SelectInput";
import { InputCategory } from "../components/InputCategory";
import { stateList } from "../assets/data/stateList";
import { departmentList } from "../assets/data/departmentList";

// eslint-disable-next-line react/prop-types
export const CreateEmployee = ({ createNewEmployee }) => {
  const [newEmployee, setNewEmployee] = useState({});

  return (
    <CreateEmployeeContainer>
      <PageTitle>HRnet</PageTitle>
      <NavLink to="/list"> View Current Employees </NavLink>
      <SubTitle> Create Employee </SubTitle>
      <TextInput
        label="First Name"
        onSetInput={(value) => {
          setNewEmployee({ ...newEmployee, firstName: value });
        }}
      />
      <TextInput
        label="Last Name"
        onSetInput={(value) => {
          setNewEmployee({ ...newEmployee, lastName: value });
        }}
      />
      <DateInput
        label="Date of Birth"
        onSetInput={(value) => {
          setNewEmployee({ ...newEmployee, dateOfBirth: value });
        }}
      />
      <DateInput
        label="Start Date"
        onSetInput={(value) => {
          setNewEmployee({ ...newEmployee, startDate: value });
        }}
      />

      <InputCategory name="Address">
        <TextInput
          label="Street"
          onSetInput={(value) => {
            setNewEmployee({ ...newEmployee, street: value });
          }}
        />
        <TextInput
          label="City"
          onSetInput={(value) => {
            setNewEmployee({ ...newEmployee, city: value });
          }}
        />
        <SelectInput
          label="State"
          options={stateList}
          onSetInput={(value) => {
            setNewEmployee({ ...newEmployee, state: value });
          }}
        />
        <TextInput
          label="Zip Code"
          onSetInput={(value) => {
            setNewEmployee({ ...newEmployee, zipCode: value });
          }}
        />
      </InputCategory>

      <SelectInput
        label="Department"
        options={departmentList}
        onSetInput={(value) => {
          setNewEmployee({ ...newEmployee, department: value });
        }}
      />
      <Button onClick={() => createNewEmployee(newEmployee)}> Save </Button>
    </CreateEmployeeContainer>
  );
};
