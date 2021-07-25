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
      <NavLink to="/list">
        <i className="fas fa-scroll"></i> View Current Employees
      </NavLink>
      <SubTitle> Create Employee </SubTitle>
      <TextInput
        label="First Name"
        type="text"
        onSetInput={(value) => {
          setNewEmployee({ ...newEmployee, firstName: value });
        }}
      />
      <TextInput
        label="Last Name"
        type="text"
        onSetInput={(value) => {
          setNewEmployee({ ...newEmployee, lastName: value });
        }}
      />
      <TextInput
        label="Date of Birth"
        type="date"
        onSetInput={(value) => {
          setNewEmployee({ ...newEmployee, dateOfBirth: value });
        }}
      />
      <TextInput
        label="Start Date"
        type="date"
        onSetInput={(value) => {
          setNewEmployee({ ...newEmployee, startDate: value });
        }}
      />

      <InputCategory name="Address">
        <TextInput
          label="Street"
          type="text"
          onSetInput={(value) => {
            setNewEmployee({ ...newEmployee, street: value });
          }}
        />
        <TextInput
          label="City"
          type="text"
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
          type="number"
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
      <Button onClick={() => createNewEmployee(newEmployee)}>Save</Button>
    </CreateEmployeeContainer>
  );
};
