import { useState } from "react";
import Modal from "./UI/Modal";

const App = () => {
  const [openModal, setOpenModal] = useState(false);

  return (
    <div className="w-screen h-screen flex flex-col justify-center items-center">
      <h2 className="text-3xl font-bold text-gray-900">React Portal</h2>

      {openModal ? (
        <button
          onClick={() => setOpenModal(false)}
          className="px-4 py-2 rounded-md bg-blue-600 text-blue-100 font-bold text-lg"
        >
          Close Modal
        </button>
      ) : (
        <button
          onClick={() => setOpenModal(true)}
          className="px-4 py-2 rounded-md bg-blue-600 text-blue-100 font-bold text-lg"
        >
          Open Modal
        </button>
      )}

      {openModal && <Modal onClose={setOpenModal} />}
    </div>
  );
};

export default App;
