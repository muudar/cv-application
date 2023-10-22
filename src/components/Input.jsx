function Input({ name, placeholder, onChangeFunction, style }) {
  return (
    <input
      name={name}
      type="text"
      placeholder={placeholder}
      onChange={onChangeFunction}
      style={style}
    />
  );
}

export default Input;
