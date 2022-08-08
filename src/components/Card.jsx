import StyledCard from "./StyledCard";
import Link from "next/link";
import StyledLink from "./StyledLink";

export default function Card({ card }) {
  return (
    <StyledCard key={card.id}>
      <p>{card.topic}</p>
      <p>{card.author}</p>
      <Link href={`/card/${card.id}`}>
        <StyledLink>Edit</StyledLink>
      </Link>
      <Link href={`/delete/${card.id}`}>
        <StyledLink>Delete</StyledLink>
      </Link>
    </StyledCard>
  );
}
