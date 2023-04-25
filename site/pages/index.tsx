import { Header, Hero, IconsList } from "@/components";
import { Container } from "@mui/material";
import type { GetStaticProps } from "next";

interface Props {
  data: {
    name: string;
    svg: string;
  }[];
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

export const getStaticProps: GetStaticProps = async () => {
  try {
    const response = await fetch("http://localhost:3000/api/icons");
    const data = await response.json();
    return {
      props: {
        data,
      },
    };
  } catch (error) {
    return { props: { data: [] } };
  }
};
