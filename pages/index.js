import Head from "next/head";
import Nav from "../src/components/Nav";
import { getAllLeanCards } from "../src/components/services/leanCardsService";

export async function getStaticProps() {
  const leanCards = await getAllLeanCards();

  return {
    props: { leanCards },
  };
}

export default function Home() {
  return (
    <>
      <Head>
        <title>Lean Coffee App</title>
      </Head>
      <Nav />
    </>
  );
}
