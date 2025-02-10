'use client'

import { useState } from "react";
import Modal from "@/components/reusables/modal/modal";
import PrimaryBtn from "@/components/reusables/buttons/primary";
import SecondaryBtn from "@/components/reusables/buttons/secondary";

const ModalSample = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="p-6">
      <button
        onClick={() => setIsModalOpen(true)}
        className="bg-blue-500 text-white px-4 py-2 rounded-md"
      >
        Open Modal
      </button>

      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title="Sample Modal"
        footer={
          <>
            <SecondaryBtn text="Cancel" onClick={() => setIsModalOpen(false)} />
            <PrimaryBtn text="Confirm" onClick={() => alert("Confirmed!")} />
          </>
        }
      >
        <p>This is the modal body content. You can put any dynamic content here.</p>
      </Modal>
    </div>
  );
};

export default ModalSample;
