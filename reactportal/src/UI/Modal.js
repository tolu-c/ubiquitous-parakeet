import { Fragment, useCallback, useEffect } from "react";
import { createPortal } from "react-dom";

const ModalOverlay = ({ onCloseModalOverlay }) => {
  return (
    <div
      className="w-screen h-screen absolute top-0 left-0 flex justify-center items-center cursor-pointer bg-black/10"
      onClick={onCloseModalOverlay}
    >
      <div className="w-5/6 md:w-1/2 h-max border mx-auto p-4 rounded-md shadow-lg bg-white text-slate-800 z-50">
        <h2>This is a modal</h2>
        <div className="flex w-full justify-between gap-4 md:gap-6">
          <button
            onClick={onCloseModalOverlay}
            className="rounded-md shadow-sm px-2 py-1 text-center text-base font-medium capitalize flex-grow bg-red-600 text-red-50"
          >
            cancel
          </button>
          <button
            onClick={onCloseModalOverlay}
            className="rounded-md shadow-sm px-2 py-1 text-center text-base font-medium capitalize flex-grow bg-teal-600 text-teal-50"
          >
            ok
          </button>
        </div>
      </div>
    </div>
  );
};

const Modal = ({ onClose }) => {
  const handleCloseModal = useCallback(() => {
    onClose(false);
  }, [onClose]);

  useEffect(() => {
    const timeId = setTimeout(() => {
      handleCloseModal();
    }, 5000);

    return () => {
      clearTimeout(timeId);
    };
  }, [handleCloseModal]);

  return (
    <Fragment>
      {createPortal(
        <ModalOverlay onCloseModalOverlay={handleCloseModal} />,
        document.getElementById("overlay__root")
      )}
    </Fragment>
  );
};

export default Modal;
