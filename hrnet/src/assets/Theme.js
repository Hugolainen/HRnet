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

  grey200: "rgb(200, 200, 200)",
  grey230: "rgb(230, 230, 230)",
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
    tableBg1: themeColors.grey230,
    tableBg2: themeColors.grey200,
    tableHoverBg: themeColors.grey200,
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
  max-width: ${(props) => props.theme.containerSizes.form};
  width: 100%;
  height: 100%;
  margin-top: 2rem;
  padding-left: 1em;
  padding-right: 1em;
`;

export const CurrentEmployeeContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: ${(props) => props.theme.containerSizes.table};
  height: 100%;
  margin-top: 2rem;
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
  border: 1px solid ${(props) => props.theme.colors.buttonBorder};
  color: ${(props) => props.theme.colors.buttonFont};
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

export const TableHeader = styled.tr`
  font-size: ${(props) => props.theme.fontSizes.tableHeader};
  color: ${(props) => props.theme.colors.tableHeaderText};
  background-color: white;
  font-weight: bold;
`;

export const TableHeaderCell = styled.th`
  cursor: pointer;
  border-bottom: 1px solid ${(props) => props.theme.colors.tableBorder};
`;

export const TableBody = styled.tbody`
  font-size: ${(props) => props.theme.fontSizes.tableBody};
  background-color: ${(props) => props.theme.colors.tableBg1};
  color: ${(props) => props.theme.colors.tableBodyText};
`;

export const TableRow = styled.tr`
  height: 1.5rem;
  background-color: ${(props) =>
    props.isEvenIndex ? props.theme.colors.tableHoverBg : "white"};
  td:first-child {
    background-color: red;
  }
  :hover {
    background-color: ${(props) => props.theme.colors.tableHoverBg};
    td:first-child {
      background-color: yellow;
    }
  }
`;
