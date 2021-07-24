import React from "react";
import { Link } from "react-router-dom";
import { styled } from "../assets/Theme";
import { Table } from "../components/Table";

export const CurrentEmployees = (employeeList) => {
  const setFirstName = (value) => {
    console.log(value);
  };

  return (
    <CurrentEmployeeContainer>
      <PageTitle>HRnet</PageTitle>
      <div> Show + Search </div>
      <Table employeeList={employeeList.employeeList} />
      <div> Showing + nav </div>
      <Button onClick={setFirstName}> Save </Button>
      <NavLink to="/"> View Current Employees </NavLink>
    </CurrentEmployeeContainer>
  );
};

const CurrentEmployeeContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 900px;
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
