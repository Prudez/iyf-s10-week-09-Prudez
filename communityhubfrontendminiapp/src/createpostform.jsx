import { useState } from "react";
import Button from "../components/shared/Button";
import Input from "../components/shared/Input";
import Card from "../components/shared/Card";

export default function CreatePost() {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const newPost = { title, body };
    console.log(newPost);

    setTitle("");
    setBody("");
  };

  return (
    <Card>
      <form onSubmit={handleSubmit}>
        <Input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Post title"
        />

        <textarea
          value={body}
          onChange={(e) => setBody(e.target.value)}
          placeholder="Post body"
        />

        <Button type="submit">Create Post</Button>
      </form>
    </Card>
  );
}