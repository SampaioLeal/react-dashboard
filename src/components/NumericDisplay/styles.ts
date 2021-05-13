import { lighten, makeStyles } from "@material-ui/core";
import { NumericDisplayProps } from ".";

export const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    padding: theme.spacing(3),
  },
  icon: (props: NumericDisplayProps) => ({
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: props.color,
    backgroundColor: lighten(props.color, 0.7),
    borderRadius: "50%",
    padding: theme.spacing(2),

    width: 60,
    height: 60,
    marginRight: theme.spacing(2),
  }),
  textContainer: {
    width: "100%",
  },
  value: {
    fontWeight: "bold",
  },
  description: {
    color: "gray",
    fontWeight: "bold",
  },
}));
