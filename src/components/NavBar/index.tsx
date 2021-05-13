import { Grid, Paper, Typography } from "@material-ui/core";
import DashboardIcon from "@material-ui/icons/Dashboard";
import NavItem from "./Item";
import { useNavStyles } from "./styles";

export default function NavBar() {
  const classes = useNavStyles();

  return (
    <Paper className={classes.root}>
      <div className={classes.logoContainer}>
        <img className={classes.logo} src="/logo192.png" alt="React Logo" />
        <Typography variant="h5" className={classes.title}>
          React
        </Typography>
      </div>
      <Grid container spacing={0}>
        <NavItem active Icon={DashboardIcon} title="Dashboard" />
        <NavItem Icon={DashboardIcon} title="Analytics" />
        <NavItem Icon={DashboardIcon} title="Invoice" />
        <NavItem Icon={DashboardIcon} title="Schedule" />
        <NavItem Icon={DashboardIcon} title="Calendar" />
        <NavItem Icon={DashboardIcon} title="Messages" />
        <NavItem Icon={DashboardIcon} title="Notification" amount={45} />
        <NavItem Icon={DashboardIcon} title="Settings" />
      </Grid>
    </Paper>
  );
}
