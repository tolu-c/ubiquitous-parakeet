import { useRef } from "react";

const Form = () => {
  const nameRef = useRef();

  const focusInput = () => {
    nameRef.current.focus();
  };

  return (
    <div>
      <h2>Form</h2>

      <form action="#">
        <input type="text" ref={nameRef} />
        <button onClick={focusInput}>Focus Input</button>
      </form>
    </div>
  );
};

export default Form;
