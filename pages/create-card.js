import Head from "next/head";
import { useRouter } from "next/router";
import CardForm from "../src/components/CardForm";
import { useFetch } from "../src/hooks/useFetch";

export default function CreateCard() {
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
      <CardForm onSubmit={handleSubmit} />
    </>
  );
}
