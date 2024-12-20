import "./styles.css";

export default function App() {
  return (
    <>
      <Greeting name={"Jady"} />
      <Greeting1 name={"Maria"} />
    </>
  );
}

function Greeting(props) {
  console.log(props);
  return <div>Hello, {props.name}</div>;
}

function Greeting1({ name }) {
  console.log(name);
  return <div>Hello, {name}</div>;
}
