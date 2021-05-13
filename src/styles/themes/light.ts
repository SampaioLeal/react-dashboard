import { createMuiTheme } from "@material-ui/core/styles";

export const lightTheme = createMuiTheme({
  palette: {
    text: {
      primary: "#333333",
    },
    primary: {
      main: "#3fb3d0",
    },
  },
  overrides: {
    MuiPaper: {
      rounded: {
        borderRadius: 10,
        backgroundColor: "#ffffffde",
      },
    },
    MuiCssBaseline: {
      "@global": {
        body: {
          backgroundImage:
            "linear-gradient(90deg, rgb(255 190 123) 0%, rgb(63 179 208) 100%)",
        },
      },
    },
  },
});
