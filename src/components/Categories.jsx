export default function Categories({ categories }) {
  console.log(categories);
  return (
    <>
      <ul>
        {categories.map((category) => {
          return <li key={category.id}>{category.name}</li>;
        })}
      </ul>
    </>
  );
}
