function Input() {
  return <input type="text" />;
}

function Form(props) {
  return (
    <form>
      <Input></Input>
      <button type="submit" onClick={props.clickFunction}>
        Submit
      </button>
    </form>
  );
}

export default Form;
