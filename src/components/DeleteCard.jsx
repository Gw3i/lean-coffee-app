import StyledCard from "./StyledCard";
import StyledLink from "./StyledLink";
import Link from "next/link";
import StyledButton from "./StyledButton";

export default function DeleteCard({ card, onDelete }) {
  return (
    <>
      <StyledCard>
        <h2>Are you sure you want to delete this Card?</h2>
        <p>{card.topic}</p>
        <p>{card.author}</p>
        <StyledButton onClick={onDelete}>Submit</StyledButton>
        <Link href="/">
          <StyledLink>Cancel</StyledLink>
        </Link>
      </StyledCard>
    </>
  );
}
