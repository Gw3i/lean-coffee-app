import Head from "next/head";
import Card from "../src/components/Card";
import StyledMain from "../src/components/StyledMain";
import Nav from "../src/components/Nav";
import { getAllLeanCards } from "../src/components/services/leanCardsService";
import StyledCard from "../src/components/StyledCard";
import Link from "next/link";

export async function getStaticProps() {
  const leanCards = await getAllLeanCards();

  return {
    props: { leanCards },
  };
}

export default function Home({ leanCards }) {
  return (
    <>
      <Head>
        <title>Lean Coffee App</title>
      </Head>
      <Nav />
      <StyledMain>
        {/* <Card /> */}
        {leanCards.map((card) => {
          return <Card key={card.is} card={card} />;
        })}
      </StyledMain>
    </>
  );
}
