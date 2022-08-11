import StyledCategoryList from "./StyledCategoryList";
import StyledUl from "./StyledUl";

export default function Categories({ categories }) {
  return (
    <>
      <StyledUl>
        {categories.map((category) => {
          return (
            <StyledCategoryList key={category.id}>
              {category.name}
            </StyledCategoryList>
          );
        })}
      </StyledUl>
    </>
  );
}
