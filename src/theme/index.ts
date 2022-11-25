import { extendTheme } from "native-base";

export const THEME = extendTheme({
  colors: {
    red: {
      light: "#FFABAD",
      default: "#D73035",
      dark: "#8A1114",
    },

    white: "#FFFFFF",

    gray: {
      100: "#F2F2F2",
      200: "#CCCCCC",
      300: "#999999",
      400: "#666666",
      500: "#333333",
    },

    black: {
      default: "#000000",
      opacity: "#00000050",
    },
  },

  fonts: {
    regular: "Inter_400Regular",
    semi_bold: "Inter_600SemiBold",
    bold: "Inter_700Bold",
  },

  fontSizes: {
    sm: 14,
    md: 16,
    lg: 18,
    xl: 24,
  },
});
