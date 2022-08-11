import Head from "next/head";
import Card from "../src/components/Card";
import StyledMain from "../src/components/StyledMain";
import Nav from "../src/components/Nav";
import { getAllLeanCards } from "../src/components/services/leanCardsService";
import Categories from "../src/components/Categories";
import { getAllCategories } from "../src/components/services/categoryServices";

export async function getServerSideProps() {
  const leanCards = await getAllLeanCards();
  const categories = await getAllCategories();

  return {
    props: { leanCards, categories },
  };
}

export default function Home({ leanCards, categories }) {
  return (
    <>
      <Head>
        <title>Lean Coffee App</title>
      </Head>
      <h1>Lean Coffee App</h1>
      <Nav />
      <StyledMain>
        <Categories categories={categories} />
        {leanCards.map((card) => {
          return <Card key={card.id} card={card} categories={categories}/>;
        })}
      </StyledMain>
    </>
  );
}
