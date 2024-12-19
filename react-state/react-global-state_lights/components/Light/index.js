import { useState } from "react";
import { LightButton, Icon, Text, Name, State } from "./Light.styled";

export default function Light({ id, name, isOn, handleToggle }) {
  // function handleToggle() {
  //   setIsOn((isOn) => !isOn);
  // }
  console.log(isOn);
  return (
    <LightButton
      type="button"
      onClick={() => {
        handleToggle(id);
      }}
      $isOn={isOn}
    >
      <Icon $isOn={isOn}>💡</Icon>
      <Text>
        <Name>{name}</Name>
        <State>{isOn ? "On" : "Off"}</State>
      </Text>
    </LightButton>
  );
}
