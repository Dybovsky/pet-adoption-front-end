import Modal from "react-modal";
import { useState } from "react";
import SignUpForm from "./SignUpForm";

const LogInSignUp = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div>
      <button
        onClick={() => {
          setIsModalOpen(true);
        }}
      >
        Log In / Sign Up
      </button>
      <Modal
        isOpen={isModalOpen}
        onRequestClose={() => setIsModalOpen(false)}
        ariaHideApp={false}
      >
        <SignUpForm />
      </Modal>
    </div>
  );
};

export default LogInSignUp;
