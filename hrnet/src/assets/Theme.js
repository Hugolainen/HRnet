import baseStyled, { createGlobalStyle } from "styled-components";
import { Link } from "react-router-dom";

const themeFonts = {
  roboto: "Roboto, sans-serif",
  ubuntu: "Ubuntu, sans-serif",
};

const themeColors = {
  primaryBlue: "#32D7F0",
  secondaryGrey: "#878787",

  robinEggBlue: "#01bfd9",
  bayOfMany: "#23527C",
  foam: "#e7fafd",

  grey235: "rgb(235, 235, 235)",
  grey240: "rgb(240, 240, 240)",
  grey250: "rgb(250, 250, 250)",
};

export const theme = {
  colors: {
    pageTitle: themeColors.primaryBlue,
    pageSubTitle: themeColors.secondaryGrey,
    text: themeColors.secondaryGrey,
    textLink: themeColors.robinEggBlue,
    textLinkHover: themeColors.bayOfMany,

    buttonFont: themeColors.bayOfMany,
    buttonBg: themeColors.digiBlue,
    buttonBorder: themeColors.bayOfMany,
    buttonHoverFont: "white",
    buttonHoverBg: themeColors.robinEggBlue,
    buttonHoverBorder: themeColors.bayOfMany,

    inputFont: themeColors.secondaryGrey,
    inputBorder: themeColors.secondaryGrey,
    inputBoxShadow: themeColors.secondaryGrey,
    inputFocusBorder: themeColors.primaryBlue,
    inputFocusBoxShadow: themeColors.primaryBlue,

    tableHeaderText: themeColors.robinEggBlue,
    tableBodyText: themeColors.secondaryGrey,
    tableRowBg1: "white",
    tableRowBg2: themeColors.grey240,
    tableRowFirstCellBg1: themeColors.grey250,
    tableRowFirstCellBg2: themeColors.grey235,
    tableRowHoverBg: themeColors.primaryBlue,
    tableRowFirstCellHoverBg: themeColors.robinEggBlue,
    tableBorder: themeColors.secondaryGrey,
  },
  fonts: {
    roboto: themeFonts.roboto,
    ubuntu: themeFonts.ubuntu,
  },
  fontSizes: {
    pageTitle: "36px",
    pageSubTitle: "24px",
    text: "14px",

    tableHeader: "14px",
    tableBody: "13px",

    label: "14px",
    input: "14px",
  },
  containerSizes: {
    table: "900px",
    form: "320px",
  },
};

export const styled = baseStyled;
export const GlobalStyle = createGlobalStyle`
  html, body {
    height: 100%;
    width: 100%;
  }

  body {
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
`;

/*
 * Page containers
 */
export const CreateEmployeeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: ${(props) => props.theme.containerSizes.form};
  width: 100%;
  height: 100%;
  margin-top: 1rem;
  padding-left: 1em;
  padding-right: 1em;
`;

export const CurrentEmployeeContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: ${(props) => props.theme.containerSizes.table};
  height: 100%;
  margin-top: 1rem;
  padding-left: 1em;
  padding-right: 1em;
`;

/*
 * Text
 */
export const PageTitle = styled.h1`
  font-size: ${(props) => props.theme.fontSizes.pageTitle};
  text-align: center;
  color: ${(props) => props.theme.colors.pageTitle};
  padding-bottom: 0.5rem;
  border-bottom: 1px solid ${(props) => props.theme.colors.pageTitle};
  margin-bottom: 1rem;
  font-weight: bold;
`;

export const SubTitle = styled.h2`
  font-size: ${(props) => props.theme.fontSizes.pageSubTitle};
  color: ${(props) => props.theme.colors.pageSubTitle};
  text-align: center;

  margin-bottom: 1rem;
  font-weight: medium;
`;

export const NavLink = styled(Link)`
  color: ${(props) => props.theme.colors.textLink};
  text-align: center;
  text-decoration: underline;
  cursor: pointer;
  :hover {
    color: ${(props) => props.theme.colors.textLinkHover};
  }
`;

/*
 * Inputs
 */
export const InputContainer = styled.div`
  margin: 5px auto;
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const Label = styled.label`
  margin-bottom: 5px;
  font-weight: bold;
  font-size: ${(props) => props.theme.fontSizes.label};
`;

export const Input = styled.input`
  margin-bottom: 10px;
  padding: 5px;
  border: 1px solid ${(props) => props.theme.colors.inputBorder};
  border-radius: 5px;
  font-size: ${(props) => props.theme.fontSizes.input};
  :focus {
    outline: 0;
    border-color: ${(props) => props.theme.colors.inputFocusBorder};
    box-shadow: 0 3px 1px -2px ${(props) => props.theme.colors.inputFocusBoxShadow};
  }
`;

export const Select = styled.select`
  margin-bottom: 10px;
  padding: 5px;
  border-color: ${(props) => props.theme.colors.inputBorder};
  border-radius: 5px;
  font-size: ${(props) => props.theme.fontSizes.input};
  :focus {
    outline: 0;
    border-color: ${(props) => props.theme.colors.inputFocusBorder};
    box-shadow: 0 3px 1px -2px ${(props) => props.theme.colors.inputFocusBoxShadow};
  }
`;

export const Button = styled.button`
  cursor: pointer;
  background-color: ${(props) => props.theme.colors.buttonBg};
  border-radius: 6px;
  padding: 5px 10px;
  width: fit-content;
  align-self: center;
  border: 2px solid ${(props) => props.theme.colors.buttonBorder};
  color: ${(props) => props.theme.colors.buttonFont};
  font-weight: bold;
  font-size: 20px;
  :hover {
    background-color: ${(props) => props.theme.colors.buttonHoverBg};
    border-color: ${(props) => props.theme.colors.buttonHoverBorder};
    color: ${(props) => props.theme.colors.buttonHoverFont};
  }
`;

/*
 * Table
 */
export const TableContainer = styled.div``;

export const StyledTable = styled.table`
  width: 100%;
  color: black;
  border-bottom: 1px solid grey;
  border-spacing: 0px;
`;

export const TableHeader = styled.thead`
  font-size: ${(props) => props.theme.fontSizes.tableHeader};
  color: ${(props) => props.theme.colors.tableHeaderText};
  background-color: white;
  font-weight: bold;
`;

export const TableHeaderCell = styled.th`
  cursor: pointer;
  text-align: left;
  border-bottom: 1px solid ${(props) => props.theme.colors.tableBorder};
`;

export const TableBody = styled.tbody`
  font-size: ${(props) => props.theme.fontSizes.tableBody};
  color: ${(props) => props.theme.colors.tableBodyText};
`;

export const TableRow = styled.tr`
  height: 1.5rem;
  background-color: ${(props) =>
    props.isEvenIndex
      ? props.theme.colors.tableRowBg1
      : props.theme.colors.tableRowBg2};
  td {
    padding-left: 5px;
  }
  td:first-child {
    background-color: ${(props) =>
      props.isEvenIndex
        ? props.theme.colors.tableRowFirstCellBg1
        : props.theme.colors.tableRowFirstCellBg2};
  }
  :hover {
    background-color: ${(props) => props.theme.colors.tableRowHoverBg};
    color: white;
    td:first-child {
      background-color: ${(props) =>
        props.theme.colors.tableRowFirstCellHoverBg};
    }
  }
`;

/*
 * Table aside
 */
export const TableAsideItemContainer = styled.div`
  display: flex;
  gap: 10px;
  margin: 10px 0;
`;

export const TableNavButton = styled.button`
  cursor: ${(props) => (props.isDisabled ? "default" : "pointer")};
  display: ${(props) => (props.isDisabled ? "none" : "block")};
  font-weight: bold;
  border-radius: 5px;
  padding: 10px;
  min-width: 40px;
  background-color: ${(props) =>
    props.isActive ? props.theme.colors.tableBorder : "transparent"};
  }
  border: ${(props) => (props.isActive ? "1 solid grey" : "0")};
  color: ${(props) =>
    props.isActive ? "white" : props.theme.colors.tableBodyText};

  :hover {
    background-color: ${(props) => props.theme.colors.tableBorder};
    color: white;
    outline: 0;
  }
`;
