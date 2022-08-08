import StyledCard from "./StyledCard";
import StyledLink from "./StyledLink";
import Link from "next/link";

export default function DeleteCard({ card, onDelete }) {
  return (
    <>
      <StyledCard>
        <p>Are you sure you want to delete this Card?</p>
        <p>{card.topic}</p>
        <p>{card.author}</p>
        <button onClick={onDelete}>Submit</button>
        <Link href="/">
          <StyledLink>Cancel</StyledLink>
        </Link>
      </StyledCard>
    </>
  );
}
