import "./styles.css";

export default function App() {
  return (
    <article className="article">
      <h2 className="article__title">How much will you love React?</h2>
      <label htmlFor="label-input"></label>
      <input id="label-input" placeholder="Tell us on a scale from 1 to 10" />
      <a
        className="article__link"
        href="https://en.wikipedia.org/wiki/React_(software)"
      >
        Learn more about React here
      </a>
    </article>
  );
}
