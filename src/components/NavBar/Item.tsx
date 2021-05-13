import { Grid, Typography, SvgIconTypeMap } from "@material-ui/core";
import { OverridableComponent } from "@material-ui/core/OverridableComponent";
import { useItemStyles } from "./styles";

export interface NavItemProps {
  Icon: OverridableComponent<SvgIconTypeMap<{}, "svg">>;
  title: string;
  amount?: number;
  active?: boolean;
}

export default function NavItem(props: NavItemProps) {
  const classes = useItemStyles(props);

  return (
    <Grid item xs={12}>
      <div className={classes.item}>
        <props.Icon />
        <Typography className={classes.itemTitle}>{props.title}</Typography>
        {props.amount && (
          <Typography variant="caption" className={classes.badge}>
            {props.amount}
          </Typography>
        )}
      </div>
    </Grid>
  );
}
