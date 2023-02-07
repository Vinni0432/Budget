const ButtonSubmit = ({ className, buttonName, handleSubmit, disabled }) => {
  return (
    <>
      <button className={className} onClick={handleSubmit} disabled={disabled}>
        {buttonName}
      </button>
    </>
  );
};

export default ButtonSubmit;
