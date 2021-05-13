import { makeStyles } from "@material-ui/core";
import { lighten } from "@material-ui/core/styles";
import { NavItemProps } from "./Item";

export const useNavStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    maxWidth: 250,
    height: "100%",
    boxShadow: "none",
    borderRadius: 0,
  },
  logoContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: theme.spacing(4),
  },
  logo: {
    width: 60,
    marginRight: 5,
  },
  title: {
    fontWeight: "bold",
    marginLeft: 5,
  },
}));

export const useItemStyles = makeStyles((theme) => ({
  item: (props: NavItemProps) => ({
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
    padding: "10px 15px",
    color: props.active ? theme.palette.primary.main : theme.palette.grey[500],
    background: `linear-gradient(90deg, ${theme.palette.primary.main} -30%, rgba(255,255,255,0) 10%)`,
    backgroundRepeat: "no-repeat",
    backgroundPosition: props.active ? 0 : -100,
    transition: theme.transitions.create(["background", "color"], {
      duration: theme.transitions.duration.short,
    }),
    "&:hover": {
      backgroundPosition: 0,
      color: theme.palette.primary.main,
    },
  }),
  itemTitle: {
    fontWeight: "bold",
    marginLeft: theme.spacing(2),
    width: "100%",
  },
  badge: {
    padding: "2px 6px",
    borderRadius: 20,
    fontWeight: "bold",
    color: theme.palette.error.main,
    backgroundColor: lighten(theme.palette.error.main, 0.7),
  },
}));
