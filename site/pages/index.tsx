import { Header, Hero, IconsList } from "@/components";
import { Container } from "@mui/material";
import iconsList from "public/icons.json";

type Icon = {
  name: string;
  svg: string;
};

export default function Index() {
  const icons: Icon[] = iconsList;

  return (
    <>
      <Header />

      <Hero />

      <Container component="main" sx={{ mt: 4 }}>
        <IconsList icons={icons} />
      </Container>
    </>
  );
}
