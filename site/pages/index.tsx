import { Header, Hero, IconsList } from "@/components";
import { Container } from "@mui/material";
import type { GetStaticProps } from "next";
import iconsList from "public/icons.json";

type Data = {
  name: string;
  svg: string;
}[];

interface Props {
  data: Data;
}

export default function Index({ data }: Props) {
  return (
    <>
      <Header />

      <Hero />

      <Container component="main" sx={{ mt: 4 }}>
        <IconsList icons={data} />
      </Container>
    </>
  );
}

export const getStaticProps: GetStaticProps = () => {
  let data: Data = iconsList;
  data = data.map((item) => ({
    ...item,
    name: item.name.charAt(0).toUpperCase() + item.name.slice(1),
    svg: item.svg
      .replace(`width=\"24\"`, `width=\"50\"`)
      .replace(`height=\"24\"`, `height=\"50\"`),
  }));
  return {
    props: {
      data: data,
    },
  };
};
