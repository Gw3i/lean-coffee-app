import Head from "next/head";
import Card from "../src/components/Card";
import StyledMain from "../src/components/StyledMain";
import Nav from "../src/components/Nav";
import { getAllLeanCards } from "../src/components/services/leanCardsService";

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
      <h1>Lean Coffee App</h1>
      <Nav />
      <StyledMain>
        {leanCards.map((card) => {
          return <Card key={card.id} card={card} />;
        })}
      </StyledMain>
    </>
  );
}
