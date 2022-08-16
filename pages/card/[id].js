import { useRouter } from "next/router";
import CardForm from "../../src/components/CardForm";
import { useFetch } from "../../src/hooks/useFetch";
import { getLeanCardById } from "../../src/components/services/leanCardsService";
import { getAllCategories } from "../../src/components/services/categoryServices";

export async function getServerSideProps(context) {
  const leanCard = await getLeanCardById(context.params.id);
  const categories = await getAllCategories();

  return {
    props: {
      leanCard,
      categories,
    },
  };
}

export default function EditCard({ leanCard, categories }) {
  const router = useRouter();
  const fetchAPI = useFetch();


  async function handleSubmit(data) {
    await fetchAPI(`/api/leanCards/${leanCard.id}`, {
      method: "PUT",
      body: JSON.stringify(data),
    });

    router.push("/");
  }

  return (
    <>
      <h1>Edit card</h1>
      <CardForm
        onSubmit={handleSubmit}
        leanCard={leanCard}
        categories={categories}
      />
    </>
  );
}
