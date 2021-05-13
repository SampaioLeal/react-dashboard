import { CssBaseline, Grid, Typography } from "@material-ui/core";
import { makeStyles, ThemeProvider } from "@material-ui/core/styles";
import { AppContent } from "./components/AppContent";
import Content from "./components/Content";
import NavBar from "./components/NavBar";
import NumericDisplay from "./components/NumericDisplay";
import { lightTheme } from "./styles/themes/light";

const useStyles = makeStyles(() => ({
  title: {
    fontWeight: "bold",
  },
  numDisplayRoot: {
    display: "flex",
  },
  numDisplayIcon: {
    width: 100,
    height: 100,
  },
}));

function App() {
  const classes = useStyles();

  return (
    <ThemeProvider theme={lightTheme}>
      <CssBaseline />

      <AppContent>
        <NavBar />

        <Content>
          <Grid container spacing={4}>
            <Grid item xs={12}>
              <Typography variant="h5" className={classes.title}>
                Dashboard
              </Typography>
            </Grid>

            <Grid item sm={6} md={3}>
              <NumericDisplay color="#5B93FF" />
            </Grid>
            <Grid item sm={6} md={3}>
              <NumericDisplay color="#5B93FF" />
            </Grid>
            <Grid item sm={6} md={3}>
              <NumericDisplay color="#5B93FF" />
            </Grid>
            <Grid item sm={6} md={3}>
              <NumericDisplay color="#5B93FF" />
            </Grid>
          </Grid>
        </Content>
      </AppContent>
    </ThemeProvider>
  );
}

export default App;
