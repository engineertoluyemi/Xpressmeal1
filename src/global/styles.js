import { Dimensions } from "react-native";
export const colors = {
  primary: "#e7550c",
  // primary: "#b00ce7",
  // primary: "#0ce734",
  secondary: "#ff8c52",
  tertiary: "#0c8bda",
  gray1: "#43484d",
  gray2: "#5e6977",
  gray3: "#86939e",
  gray4: "#bdc6cf",
  gray5: "#e1e8ee",
  cardComment: "#86939e",
  cardbackground: "#bbbbbb",
  white: "white",
  black: "black",
  red: "red",
  green: "green",
  lightGreen: "#66DF48",
  lightBlue: "#7cc",
  transparentDark: "#00000061",
  pageBackground: "purple",

  color1: "#E5E3F1",
  color2: "#5C5A5B",
  color3: "#B5B5B5",
  color4: "#A6A184",
  color5: "#A29CF5",

  c1: "#D9C8C0",
  c2: "#F4717F",
  c3: "#DAD8D9",
  c4: "#EBE2E3",

  a1: "#DBDCF8",
  a2: "#92B2FD",
  a3: "#AD7FFB",
  a4: "#F594B7",
  a5: "#CCD0F6",
};

export const SCREEN_WIDTH = Dimensions.get("window").width;
export const SCREEN_HEIGHT = Dimensions.get("window").height;

export const parameters = {
  headerHeight: 50,
  primaryButton: {
    backgroundColor: colors.primary,
    alignContent: "center",
    justifyContent: "center",
    borderRadius: 12,
    borderWidth: 1,
    borderColor: colors.gray3,
    height: 50,
    paddingHorizontal: 20,
    width: "100%",
  },
  buttonTitle: {
    color: colors.white,
    fontSize: 20,
    fontWeight: "bold",
    alignItems: "center",
    justifyContent: "center",
    marginTop: -3,
  },
};

export const titleText = {
  color: "white",
  fontSize: 20,
  fontWeight: "bold",
};

export const title = {
  color: colors.primary,
  fontSize: 18,
  fontWeight: "800",
};

export const fonts = {
  ios: {
    regular: "System",
    light: "System",
    lightItalic: "System",
    bold: "System",
    boldItalic: "System",
    black: "System",
    blackItalic: "System",
  },
  android: {
    regular: "Roboto",
    italic: "Roboto-Italic",
    thin: "Roboto-Thin",
    thiItalic: "Roboto-ThinItalic",
    light: "Roboto-light",
    lightItalic: "Roboto-LightItalic",
    medium: "Roboto-Medium",
    mediumItalic: "Roboto-MediumItalic",
    bold: "Roboto",
    boldItalic: "Roboto-BoldItalic",
    condensed: "RobotoCondensed-Regular",
    condensedItalic: "RobotoCondensed-Italic",
  },
};
