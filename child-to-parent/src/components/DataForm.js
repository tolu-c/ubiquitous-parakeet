import { useState } from "react";

const DataForm = ({ onAddData }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const formSubmitHandler = (event) => {
    event.preventDefault();

    const data = {
      enteredName: name,
      enteredEmail: email,
    };
    console.log(data);

    // passes the data object to parent component
    onAddData(data);

    // clears form after submission
    setName("");
    setEmail("");
  };

  return (
    <form
      onSubmit={formSubmitHandler}
      className="w-5/6 mx-auto border border-gray-100 flex flex-col shadow-md my-10 gap-y-6 p-4 py-6 mb-16"
    >
      <div className="w-full flex flex-col gap-y-2">
        <label
          htmlFor="name"
          className="capitalize text-xl fonts-sans font-semibold"
        >
          name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="h-16 text-lg text-gray-800/75 font-sans font-italic"
        />
      </div>

      <div className="w-full flex flex-col gap-y-2">
        <label
          htmlFor="email"
          className="capitalize text-xl fonts-sans font-semibold"
        >
          email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="h-16 text-lg text-blue-800/75 font-sans font-italic"
        />
      </div>

      <button
        type="submit"
        className="bg-blue-600 hover:bg-blue-700 shadow-sm text-white capitalize text-lg font-bold font-sans h-16"
      >
        submit
      </button>
    </form>
  );
};

export default DataForm;
