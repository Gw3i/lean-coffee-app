import StyledButton from "./StyledButton";
import Link from "next/link";

export default function Nav() {
  return (
    <>
      <Link href="/create-card">
        <a>
          <StyledButton>Add new Card</StyledButton>
        </a>
      </Link>
    </>
  );
}
