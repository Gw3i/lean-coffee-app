import { useRouter } from "next/router";
import CardForm from "../../src/components/CardForm";
import { useFetch } from "../../src/hooks/useFetch";
import { getLeanCardById } from "../../src/components/services/leanCardsService";
import DeleteCard from "../../src/components/DeleteCard";

export async function getServerSideProps(context) {
  const leanCard = await getLeanCardById(context.params.id);

  return {
    props: {
      leanCard,
    },
  };
}

export default function EditCard({ leanCard }) {
  const router = useRouter();
  const fetchAPI = useFetch();

  async function handleDelete() {
    await fetchAPI(`/api/leanCards/${leanCard.id}`, {
      method: "DELETE",
    });

    router.push("/");
  }

  return (
    <>
      <h1>Delete card</h1>
      <DeleteCard card={leanCard} onDelete={handleDelete} />
    </>
  );
}
