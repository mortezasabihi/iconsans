import { Box, Card, CardContent, Typography } from "@mui/material";
import { blue } from "@mui/material/colors";
import { useSnackbar } from "notistack";

interface Props {
  name: string;
  svg: string;
}

const Icon: React.FC<Props> = ({ name, svg }) => {
  const { enqueueSnackbar } = useSnackbar();

  const handleCopy = async () => {
    await navigator.clipboard.writeText(name);

    enqueueSnackbar(`${name} copied`, {
      variant: "success",
    });
  };

  return (
    <>
      <Card
        variant="outlined"
        sx={{
          cursor: "pointer",
          ":hover": {
            bgcolor: blue[400],
          },
        }}
        onClick={handleCopy}
      >
        <CardContent
          sx={{
            pb: "16px!important",
          }}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              width: "100%",
              mb: 4,
            }}
            width={50}
            height={50}
            dangerouslySetInnerHTML={{ __html: svg }}
          />
          <Typography variant="body2" align="center">
            {name}
          </Typography>
        </CardContent>
      </Card>
    </>
  );
};

export default Icon;
