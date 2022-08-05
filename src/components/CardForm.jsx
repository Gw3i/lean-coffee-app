import StyledForm from "./StyledForm";
import Link from "next/link";

export default function CardForm() {
  return (
    <>
      <StyledForm>
        <label>
          Topic
          <input type="text" />
        </label>
        <label>
          Author
          <input type="text" />
        </label>
        <button type="submits">Submit</button>
      </StyledForm>
      <Link href="/">
        <a>
          <button>Cancel</button>
        </a>
      </Link>
    </>
  );
}
