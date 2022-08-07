import { useRouter } from "next/router";
import CardForm from "../../src/components/CardForm";
import { useFetch } from "../../src/hooks/useFetch";
import { getLeanCardById } from "../../src/components/services/leanCardsService";

export async function getServerSideProps(context) {
  const leanCard = await getLeanCardById(context.params.id);

  return {
    props: {
      leanCards: leanCard,
    },
  };
}

export default function EditCard({ leanCard }) {
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
      <CardForm onSubmit={handleSubmit} />
    </>
  );
}
