"use client";

import { motion, AnimatePresence } from "framer-motion";
import PrimaryBtn from "@/components/reusables/buttons/primary";

const Modal = ({ isOpen, onClose, title, children }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50 z-[99999]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className="bg-white p-6 rounded-lg text-center shadow-lg w-[90%] max-w-md relative"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
          >
            <div className="bg-deepBlue p-4 rounded-t-lg shadow-lg w-full absolute top-0 left-0 flex justify-between items-center">
              <p className="text-white text-left pl-6 font-bold">{title}</p>
              <button onClick={onClose} className="text-gray-300 text-xl hover:text-gray-700">
                &times;
              </button>
            </div>

            <div className="text-secondaryDark mb-4 pt-[50px]">{children}</div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Modal;
