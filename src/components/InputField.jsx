const InputField = ({ className, type, text, placeholder, handleInput }) => {
  return (
    <label>
      <input
        className={className}
        type={type}
        value={text}
        onChange={(e) => handleInput(e.target.value)}
        placeholder={placeholder}
      />
    </label>
  );
};

export default InputField;
