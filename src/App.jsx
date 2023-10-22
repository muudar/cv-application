import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./styles/App.css";
import CV from "./components/CV";
import Form from "./components/Form";
import FieldModal from "./components/FieldModal";
import FieldModalForm from "./components/FieldModalForm";

const personalInfoForm = {
  inputs: [
    {
      name: "name",
      type: "text",
      placeholder: "Name",
    },
    {
      name: "phoneNumber",
      type: "text",
      placeholder: "Phone Number",
    },
    {
      name: "email",
      type: "text",
      placeholder: "E-mail Address",
    },
    {
      name: "address",
      type: "text",
      placeholder: "Address",
    },
    {
      name: "description",
      type: "text",
      placeholder: "Profile Description",
      style: {
        width: "90%",
        height: "100px",
      },
    },
    {
      name: "skills",
      type: "text",
      placeholder: "Skills (comma separated)",
    },
  ],
};

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
  let titles = ["Experience", "Education"];
  return (
    <>
      <div className="modals-container">
        <FieldModal
          title="Personal Info"
          form={personalInfoForm}
          onChangeFunction={handleInputChange}
        ></FieldModal>
        <FieldModal
          title="Experience"
          onChangeFunction={handleInputChange}
        ></FieldModal>
        <FieldModal
          title="Education"
          onChangeFunction={handleInputChange}
        ></FieldModal>
      </div>
      <CV person={formData}></CV>
    </>
  );
}

export default App;
