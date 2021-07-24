import React from "react";
import { Link } from "react-router-dom";
import { styled } from "../assets/Theme";
import { TextInput } from "../components/TextInput";
import { DateInput } from "../components/DateInput";
import { SelectInput } from "../components/SelectInput";
import { InputCategory } from "../components/InputCategory";

export const CreateEmployee = () => {
  const setFirstName = (value) => {
    console.log(value);
  };
  const testOptions = [{ name: "test" }, { name: "test2" }];

  return (
    <CreateEmployeeContainer>
      <PageTitle>HRnet</PageTitle>
      <NavLink to="/list"> View Current Employees </NavLink>
      <SubTitle> Create Employee </SubTitle>
      <TextInput label="First Name" onSetInput={setFirstName} />
      <TextInput label="Last Name" onSetInput={setFirstName} />
      <DateInput label="Date of Birth" onSetInput={setFirstName} />
      <DateInput label="Start Date" onSetInput={setFirstName} />

      <InputCategory name="Address">
        <TextInput label="Street" onSetInput={setFirstName} />
        <TextInput label="City" onSetInput={setFirstName} />
        <SelectInput
          label="State"
          options={testOptions}
          onSetInput={setFirstName}
        />
        <TextInput label="Zip Code" onSetInput={setFirstName} />
      </InputCategory>

      <SelectInput
        label="Department"
        options={testOptions}
        onSetInput={setFirstName}
      />
      <Button onClick={setFirstName}> Save </Button>
    </CreateEmployeeContainer>
  );
};

const CreateEmployeeContainer = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 320px;
  width: 100%;
  height: 100%;
  margin-top: 2rem;
  padding-left: 1em;
  padding-right: 1em;
`;

const PageTitle = styled.h1`
  font-size: ${(props) => props.theme.fontSizes.title1};
  text-align: center;
  padding-bottom: 0.5rem;
  border-bottom: 1px solid lightgrey;
  margin-bottom: 1rem;
  font-weight: bold;
`;

const SubTitle = styled.h2`
  font-size: ${(props) => props.theme.fontSizes.title2};
  text-align: center;

  margin-bottom: 1rem;
  font-weight: medium;
`;

const NavLink = styled(Link)`
  text-align: center;
  text-decoration: underline;
  cursor: pointer;
  color: blue;
`;

const Button = styled.button`
  cursor: pointer;
  background-color: lightgrey;
  border-radius: 6px;
  padding: 5px 10px;
  width: fit-content;
  align-self: center;
`;
