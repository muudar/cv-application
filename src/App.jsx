import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./styles/App.css";
import CV from "./components/CV";
import Form from "./components/Form";

const defaultPerson = {
  name: "Cristiano Ronaldo",
};
function App() {
  console.log("Render");
  const [person, setPerson] = useState(defaultPerson);
  const onButtonClick = (person) => (e) => {
    e.preventDefault();
    setPerson(person);
  };
  return (
    <>
      <Form
        clickFunction={onButtonClick({
          name: "Lionel Messi",
        })}
      ></Form>
      <CV person={person}></CV>
    </>
  );
}

export default App;
