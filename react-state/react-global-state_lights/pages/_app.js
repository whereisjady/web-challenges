import GlobalStyle from "../styles";
import Layout from "../components/Layout";
import { useState } from "react";

export default function App({ Component, pageProps }) {
  const [lights, setLights] = useState([
    { id: 0, name: "Living Room", isOn: true },
    { id: 1, name: "Kitchen", isOn: true },
    { id: 2, name: "Bedroom", isOn: true },
    { id: 3, name: "Bathroom", isOn: true },
  ]);

  function toggleLight(id) {
    setLights(
      lights.map((light) => {
        if (light.id === id) {

  function toggleLight(name) {
    setLights(
      lights.map((light) => {
        if (light.name === name) {
 
          return { ...light, isOn: !light.isOn };
        }
        return light;
      })
    );
  }

  return (
    <Layout>
      <GlobalStyle />
      <Component {...pageProps} lights={lights} toggleLight={toggleLight} />
    </Layout>
  );
}
