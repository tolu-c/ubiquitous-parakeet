import { useRef } from "react";

const Form = () => {
  const nameRef = useRef();
  const emailRef = useRef();

  const submitHandler = (event) => {
    event.preventDefault();
    console.log("Form submitted");
    const enteredName = nameRef.current.value;
    const enteredEmail = emailRef.current.value;

    const data = {
      name: enteredName,
      email: enteredEmail,
    };

    console.log(data);

    // clears form after submission
    nameRef.current.value = "";
    emailRef.current.value = "";
  };

  return (
    <div>
      <h2>Form</h2>

      <form action="#" onSubmit={submitHandler}>
        <div>
          <label htmlFor="name">name</label>
          <input type="text" name="name" id="name" ref={nameRef} />
        </div>

        <div>
          <label htmlFor="email">email</label>
          <input type="email" name="email" id="email" ref={emailRef} />
        </div>

        <div>
          <button type="submit">submit</button>
        </div>
      </form>
    </div>
  );
};

export default Form;
