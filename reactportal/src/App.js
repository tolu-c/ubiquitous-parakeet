import { useState } from "react";
import Modal from "./UI/Modal";

const App = () => {
  const [openModal, setOpenModal] = useState(false);

  return (
    <div>
      <h2 className="text-3xl font-bold text-gray-900">React Portal</h2>

      {openModal ? (
        <button onClick={() => setOpenModal(false)}>Close Modal</button>
      ) : (
        <button onClick={() => setOpenModal(true)}>Open Modal</button>
      )}

      {openModal && <Modal onClose={setOpenModal} />}
    </div>
  );
};

export default App;
