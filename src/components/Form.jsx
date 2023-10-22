import Input from "./Input.jsx";

function Form({ onChangeFunction }) {
  return (
    <form>
      <Input
        name="name"
        placeholder="Name"
        onChangeFunction={onChangeFunction}
      ></Input>
      <Input
        name="phoneNumber"
        placeholder="Phone Number"
        onChangeFunction={onChangeFunction}
      ></Input>
      <Input
        name="email"
        placeholder="E-mail Address"
        onChangeFunction={onChangeFunction}
      ></Input>
      <Input
        name="address"
        placeholder="Address"
        onChangeFunction={onChangeFunction}
      ></Input>
      <Input
        name="description"
        placeholder="Profile Description"
        onChangeFunction={onChangeFunction}
        style={{
          width: "90%",
          height: "100px",
        }}
      ></Input>
      <Input
        name="skills"
        placeholder="Skills (comma separated)"
        onChangeFunction={onChangeFunction}
      ></Input>
    </form>
  );
}

export default Form;
