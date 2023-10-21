import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./styles/App.css";
import CV from "./components/CV";
import Form from "./components/Form";

function App() {
  console.log("Render");
  const [formData, setFormData] = useState({});
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <>
      <Form onChangeFunction={handleInputChange}></Form>
      <CV person={formData}></CV>
    </>
  );
}

export default App;
