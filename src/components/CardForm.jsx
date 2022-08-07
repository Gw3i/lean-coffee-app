import StyledForm from "./StyledForm";
import Link from "next/link";
import { useState } from "react";

export default function CardForm({ onSubmit, leanCards }) {
  const [topic, setTopic] = useState("");
  const [author, setAuthor] = useState("");

  function handleSubmit(event) {
    event.preventDefault();

    onSubmit({
      topic,
      author,
    });
  }

  return (
    <>
      <StyledForm onSubmit={handleSubmit}>
        <label>
          Topic
          <input
            type="text"
            value={topic}
            onChange={(event) => {
              setTopic(event.target.value);
            }}
          />
        </label>
        <label>
          Author
          <input
            type="text"
            value={author}
            onChange={(event) => {
              setAuthor(event.target.value);
            }}
          />
        </label>
        <button type="submit" variant="submit">
          Submit
        </button>
      </StyledForm>
      <Link href="/">
        <a>
          <button>Cancel</button>
        </a>
      </Link>
    </>
  );
}
