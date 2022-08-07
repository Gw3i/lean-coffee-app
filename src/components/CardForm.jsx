import StyledForm from "./StyledForm";
import Link from "next/link";
import { useState } from "react";
import StyledLabel from "./StyledLabel";
import { useRouter } from "next/router";

export default function CardForm({ onSubmit, leanCard }) {
  const [topic, setTopic] = useState("");
  const [author, setAuthor] = useState("");
  const [value, setValue] = useState("");

  function handleSubmit(event) {
    event.preventDefault();

    onSubmit({
      topic,
      author,
    });
  }

  const router = useRouter();
  console.log(router.route);

  return (
    <>
      <StyledForm onSubmit={handleSubmit}>
        <StyledLabel htmlFor="topic">
          Topic
          <input
            name="topic"
            id="topic"
            type="text"
            value={router.route === "/create-card" ? topic : leanCard.topic}
            onChange={(event) => {
              setTopic(event.target.value);
            }}
          />
        </StyledLabel>
        <StyledLabel htmlFor="author">
          Author
          <input
            name="author"
            id="author"
            type="text"
            value={router.route === "/create-card" ? author : leanCard.author}
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
