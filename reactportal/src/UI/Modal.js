const Modal = ({ onClose }) => {
  const handleCloseModal = () => {
    onClose(false);
  };

  return (
    <div>
      <h2>This is a modal</h2>
      <div>
        <button onClick={handleCloseModal}>cancel</button>
        <button onClick={handleCloseModal}>ok</button>
      </div>
    </div>
  );
};

export default Modal;
