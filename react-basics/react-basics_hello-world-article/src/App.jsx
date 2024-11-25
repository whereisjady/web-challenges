import React from "react";
import "./styles.css";

export default function App() {
  return <HelloWorldArticle />;
}

function HelloWorldArticle() {
  return (
    <article>
      <h1> I am a replacement component</h1>
      <p>Test test</p>
    </article>
  );
}
