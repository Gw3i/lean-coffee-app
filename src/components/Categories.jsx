import { getAllCategories } from "./services/categoryServices";

export async function getServerSideProps() {
  const categories = await getAllCategories();

  return {
    props: { categories },
  };
}

export default function Categories({ categories }) {
  return (
    <>
      <ul>
        {categories?.map((category) => {
          <li key={category.id}>{category.name}</li>;
        })}
      </ul>
    </>
  );
}
