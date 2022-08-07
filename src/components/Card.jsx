import StyledCard from "./StyledCard";
import Link from "next/link";

export default function Card({ card }) {
  return (
    <StyledCard key={card.id}>
      <p>{card.topic}</p>
      <p>{card.author}</p>
      <Link href={`/card/${card.id}`}>
        <a>
          <button>Edit</button>
        </a>
      </Link>
    </StyledCard>
  );
}
