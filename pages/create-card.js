import Head from "next/head";
import { useRouter } from "next/router";
import CardForm from "../src/components/CardForm";
import { useFetch } from "../src/hooks/useFetch";
import { getAllCategories } from "../src/components/services/categoryServices";

export async function getServerSideProps() {
  const categories = await getAllCategories();

  return {
    props: {categories },
  };
}

export default function CreateCard({categories}) {
  const router = useRouter();
  const fetchAPI = useFetch();

  async function handleSubmit(data) {
    await fetchAPI("/api/leanCards/createCard", {
      method: "POST",
      body: JSON.stringify(data),
    });

    router.push("/");
  }

  return (
    <>
      <Head>Create new card</Head>
      <h1>Create new card</h1>
      <CardForm onSubmit={handleSubmit} categories={categories}/>
    </>
  );
}
