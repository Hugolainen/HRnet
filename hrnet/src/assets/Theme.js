import baseStyled, { createGlobalStyle } from "styled-components";

const themeFonts = {
  roboto: "Roboto, sans-serif",
  ubuntu: "Ubuntu, sans-serif",
};

const themeColors = {
  digiBlue: "#32D7F0",
  digiGrey: "#878787",
};

export const theme = {
  colors: {
    fontPrimary: themeColors.digiGrey,
    bgPrimary: themeColors.digiBlue,

    title2: themeColors.digiBlue,
    title3: themeColors.digiGrey,
    text: themeColors.digiGrey,

    textLinkHover: themeColors.digiBlue,
    textError: themeColors.digiBlue,

    buttonBlueFont: themeColors.digiBlue,
    buttonBlueBg: themeColors.digiBlue,
    buttonBlueBorder: themeColors.digiBlue,
    buttonBlueHoverBg: themeColors.digiBlue,
    buttonBlueHoverBorder: themeColors.digiBlue,

    formInputFont: themeColors.digiBlue,
    formInputPlaceholderFont: themeColors.digiBlue,
    formInputBg: themeColors.digiBlue,
    formInputBorder: themeColors.digiBlue,
    formInputBoxShadow: themeColors.digiBlue,
    formInputFocusBorder: themeColors.digiBlue,
    formInputFocusBoxShadow: themeColors.digiBlue,
    formInputInvalidBorder: themeColors.digiBlue,
    formImageInputActive: themeColors.digiBlue,

    tableFont: themeColors.digiGrey,
    tableBorder: themeColors.digiBlue,
  },
  fonts: {
    roboto: themeFonts.roboto,
    ubuntu: themeFonts.ubuntu,
  },
  fontSizes: {
    small: "1em",
    medium: "2em",
    large: "3em",
    text: "14px",
    title: "36px",
    title2: "30px",
    title3: "24px",
    tableHeader: "14px",
    tableBody: "13px",
  },
  containerSizes: {
    table: "1000px",
    form: "400px",
  },
};

export const styled = baseStyled;
export const GlobalStyle = createGlobalStyle`
  html, body {
    height: 100%;
    width: 100%;
  }

  body {
    color: ${(props) => props.theme.colors.fontPrimary};
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
`;
