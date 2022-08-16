import StyledCard from "./StyledCard";
import Link from "next/link";
import StyledLink from "./StyledLink";

export default function Card({ card, categories }) {

  return (
    <StyledCard key={card.id}>
      <p>{card.topic}</p>
      <p>{card.author}</p>
      {categories.filter((category)=> {
        console.log(category.id)
        console.log(card.category)
        category.id === card.category ? <p>Works!</p> : console.log('Does work!')
      })}
      <p></p>
      <Link href={`/card/${card.id}`}>
        <StyledLink>Edit</StyledLink>
      </Link>
      <Link href={`/delete/${card.id}`}>
        <StyledLink>Delete</StyledLink>
      </Link>
    </StyledCard>
  );
}
