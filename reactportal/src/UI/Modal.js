const Modal = ({ onClose }) => {
  const handleCloseModal = () => {
    onClose(false);
  };

  return (
    <div className="w-5/6 md:w-1/2 border absolute mx-auto p-4 rounded-md shadow-lg bg-white text-slate-800">
      <h2>This is a modal</h2>
      <div className="flex w-full justify-between gap-4 md:gap-6">
        <button
          onClick={handleCloseModal}
          className="rounded-md shadow-sm px-2 py-1 text-center text-base font-medium capitalize flex-grow bg-red-600 text-red-50"
        >
          cancel
        </button>
        <button
          onClick={handleCloseModal}
          className="rounded-md shadow-sm px-2 py-1 text-center text-base font-medium capitalize flex-grow bg-teal-600 text-teal-50"
        >
          ok
        </button>
      </div>
    </div>
  );
};

export default Modal;
