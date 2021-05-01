import Modal from "react-modal";
import { useState } from "react";
import SignUpForm from "./SignUpForm";

const LogInSignUp = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
      backgroundColor: "#60b0f4",
      borderRadius: "5px",
    },
  };

  return (
    <div>
      <button
        className="btn-primary"
        onClick={() => {
          setIsModalOpen(true);
        }}
      >
        Log In / Sign Up
      </button>
      <Modal
        style={customStyles}
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
