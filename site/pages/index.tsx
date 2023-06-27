import { Header, Hero, IconsList } from "@/components";
import { Container } from "@mui/material";
import iconsList from "public/icons.json";
import type { TIcon } from "@/types";

export default function Index() {
  const icons: TIcon[] = iconsList;

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
