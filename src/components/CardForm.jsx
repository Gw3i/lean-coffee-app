import StyledForm from "./StyledForm";
import Link from "next/link";
import { useState } from "react";
import StyledLabel from "./StyledLabel";
import StyledLink from "./StyledLink";

export default function CardForm({ onSubmit, leanCard, categories }) {
  const [topic, setTopic] = useState(leanCard?.topic || "");
  const [author, setAuthor] = useState(leanCard?.author || "");
  const [category, setCategory] = useState(leanCard?.category || '')

  function handleSubmit(event) {
    event.preventDefault();

    onSubmit({
      topic,
      author,
      category
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
        <StyledLabel>Category
        <select
            name="category"
            value={category}
            onChange={(event) => {
              setCategory(event.target.value);
            }}
          >
            {categories.map((category) => (
              <option key={category.id} value={category.id}>
                {category.name}
              </option>
            ))}
          </select>
        </StyledLabel>
        <button type="submit" variant="submit">
          Submit
        </button>
      </StyledForm>
      <Link href="/">
        <StyledLink>Cancel</StyledLink>
      </Link>
    </>
  );
}
