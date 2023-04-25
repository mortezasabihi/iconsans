import { Box, Container, Stack, Typography } from "@mui/material";
import CodeBlock from "./CodeBlock";

const Hero: React.FC = () => {
  return (
    <Box
      sx={{
        bgcolor: "background.paper",
        pt: 8,
        pb: 6,
      }}
    >
      <Container maxWidth="md">
        <Typography
          component="h2"
          variant="h2"
          align="center"
          color="text.primary"
          gutterBottom
        >
          <Typography component="strong" variant="h2" fontWeight="bold">
            Iconsans
          </Typography>{" "}
          - +320 Free Icons for your next project
        </Typography>
        <Typography
          variant="h5"
          align="center"
          color="text.secondary"
          paragraph
        >
          Iconsans is a collection of over 320 free icons designed for use in
          your next project. This package offers separate versions for{" "}
          <strong>Vue</strong> and <strong>React</strong>, making it easy for
          developers and designers to access a wide range of icons that can be
          used in a variety of applications.
        </Typography>

        <Stack
          direction={{ xs: "column", sm: "row" }}
          alignItems="center"
          justifyContent="center"
          spacing={{ xs: 4, sm: 8 }}
          mt={10}
        >
          <Box>
            <Typography fontWeight="bold" color="#42b883">
              Vue:
            </Typography>
            <CodeBlock>npm i @iconsans/vue</CodeBlock>
          </Box>
          <Box>
            <Typography fontWeight="bold" color="#00d8ff">
              React:
            </Typography>
            <CodeBlock>npm i @iconsans/react</CodeBlock>
          </Box>
        </Stack>
      </Container>
    </Box>
  );
};

export default Hero;
