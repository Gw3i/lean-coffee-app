import StyledLi from "./StyledLi";
import StyledUl from "./StyledUl";

export default function Categories({ categories }) {
  return (
    <>
      <StyledUl>
        {categories.map((category) => {
          return <StyledLi key={category.id}>{category.name}</StyledLi>;
        })}
      </StyledUl>
    </>
  );
}
