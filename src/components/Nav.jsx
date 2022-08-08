import StyledLink from "./StyledLink";
import Link from "next/link";

export default function Nav() {
  return (
    <>
      <Link href="/create-card">
        <StyledLink>Add new Card</StyledLink>
      </Link>
    </>
  );
}
