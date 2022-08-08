import StyledForm from "./StyledForm";
import Link from "next/link";
import { useState } from "react";
import StyledLabel from "./StyledLabel";

export default function CardForm({ onSubmit, leanCard }) {
  const [topic, setTopic] = useState(leanCard?.topic || "");
  const [author, setAuthor] = useState(leanCard?.author || "");

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
        <StyledLabel htmlFor="topic">
          Topic
          <input
            required
            name="topic"
            id="topic"
            type="text"
            value={topic}
            onChange={(event) => {
              setTopic(event.target.value);
            }}
          />
        </StyledLabel>
        <StyledLabel htmlFor="author">
          Author
          <input
            required
            name="author"
            id="author"
            type="text"
            value={author}
            onChange={(event) => {
              setAuthor(event.target.value);
            }}
          />
        </StyledLabel>
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
