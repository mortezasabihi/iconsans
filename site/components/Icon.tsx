import { Box, Card, CardContent, Typography } from "@mui/material";
import { blue } from "@mui/material/colors";

interface Props {
  name: string;
  svg: string;
}

const Icon: React.FC<Props> = ({ name, svg }) => {
  return (
    <Card
      variant="outlined"
      sx={{
        cursor: "pointer",
        ":hover": {
          bgcolor: blue[400],
        },
      }}
    >
      <CardContent
        sx={{
          pb: "16px!important",
        }}
      >
        <Box
          sx={{ display: "flex", justifyContent: "center", mb: 4 }}
          dangerouslySetInnerHTML={{ __html: svg }}
        />
        <Typography variant="body2" align="center">
          {name}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default Icon;
