import StyledForm from "./StyledForm";
import Link from "next/link";
import { useState } from "react";

export default function CardForm({ onSubmit, leanCard }) {
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
        <label htmlFor="topic">
          Topic
          <input
            name="topic"
            id="topic"
            type="text"
            placeholder={leanCard.topic}
            value={topic}
            onChange={(event) => {
              setTopic(event.target.value);
            }}
          />
        </label>
        <label htmlFor="author">
          Author
          <input
            name="author"
            id="author"
            type="text"
            placeholder={leanCard.author}
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
