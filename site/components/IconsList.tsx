import { Grid } from "@mui/material";
import Icon from "./Icon";

interface Props {
  icons: {
    name: string;
    svg: string;
  }[];
}

const IconsList: React.FC<Props> = ({ icons }) => {
  return (
    <Grid container spacing={2}>
      {icons.map(({ name, svg }, index) => (
        <Grid item md={2} sm={4} xs={6} key={index}>
          <Icon name={name} svg={svg} />
        </Grid>
      ))}
    </Grid>
  );
};

export default IconsList;
