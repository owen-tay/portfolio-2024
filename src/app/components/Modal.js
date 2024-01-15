import React, { useState } from 'react';
import ContactForm from "../components/ContactForm" 

const MyModal = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <>
    <div className='mt-5'>
      <button
        className="rounded-2xl bg-green-400 border-neutral border-4 w-32 p-2 border text-base-100 hover:scale-95 duration-100"
        onClick={openModal}
      >
        Contact Me
      </button>
      </div>

      {isModalOpen && (
        <dialog className="modal" open>
          <div className="modal-box">
            <form method="dialog">
              <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2" onClick={closeModal}>✕</button>
            </form>
            <ContactForm />
          </div>
        </dialog>
      )}
    </>
  );
};

export default MyModal;
