"use client";

const Modal = ({ isOpen, onClose, title, children, footer }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white rounded-lg shadow-lg w-full max-w-lg">

        <div className="flex justify-between items-center bg-royalBlue rounded-tr-lg rounded-tl-lg text-white p-4 border-b">
          <h2 className="text-xl font-semibold ">{title}</h2>
          <button onClick={onClose} className="text-gray-300 text-xl hover:text-gray-700">
            &times;
          </button>
        </div>

        <div className="p-4">{children}</div>

        {footer && <div className="p-4 border-t flex justify-center gap-2">{footer}</div>}
      </div>
    </div>
  );
};

export default Modal;
