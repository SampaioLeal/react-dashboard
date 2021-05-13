import { useStyles } from "./styles";

interface Props {
  children?: React.ReactNode;
}

export default function Content({ children }: Props) {
  const classes = useStyles();

  return <div className={classes.root}>{children}</div>;
}
