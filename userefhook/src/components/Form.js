const Form = () => {
  const submitHandler = (e) => {
    e.preventDefault();
    console.log("Form submitted");
  };

  return (
    <div>
      <h2>Form</h2>

      <form action="#" onSubmit={submitHandler}>
        <div>
          <label htmlFor="name">name</label>
          <input type="text" name="name" id="name" />
        </div>

        <div>
          <label htmlFor="email">email</label>
          <input type="email" name="email" id="email" />
        </div>

        <div>
          <button type="submit">submit</button>
        </div>
      </form>
    </div>
  );
};

export default Form;
