import { Paper, Typography } from "@material-ui/core";
import FavoriteIcon from "@material-ui/icons/Favorite";
import { useStyles } from "./styles";

export interface NumericDisplayProps {
  color: string;
}

export default function NumericDisplay(props: NumericDisplayProps) {
  const classes = useStyles(props);
  return (
    <Paper elevation={0} className={classes.root}>
      <div className={classes.icon}>
        <FavoriteIcon />
      </div>

      <div className={classes.textContainer}>
        <Typography variant="h5" className={classes.value}>
          178+
        </Typography>
        <Typography variant="body1" className={classes.description}>
          Save Products
        </Typography>
      </div>
    </Paper>
  );
}
