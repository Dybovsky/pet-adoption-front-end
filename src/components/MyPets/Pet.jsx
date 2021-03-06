import Modal from "react-modal";
import { useState } from "react";
import PetDetails from "./PetDetails";

const Pet = (props) => {
  const { pet } = props;

  const [isModalOpen, setIsModalOpen] = useState(false);
  const closeModal = () => {
    setIsModalOpen(false);
  };

  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
      backgroundColor: "#60b0f4",
      borderRadius: "15px",
      display: "flex",
      justifyContent: "center",
    },
  };

  return (
    <div className="pet-card">
      <div
        className="pet-card-inside"
        onClick={() => {
          setIsModalOpen(true);
        }}
        style={{ cursor: "pointer" }}
      >
        <img src={pet.picture} alt="cat" className="catImg" />

        <div>
          <div>{pet.name}</div>
          <div>{pet.status}</div>
        </div>

        <button
          className="btn-primary"
          onClick={() => {
            setIsModalOpen(true);
          }}
        >
          See more
        </button>
      </div>
      <Modal
        style={customStyles}
        ariaHideApp={false}
        isOpen={isModalOpen}
        onRequestClose={() => setIsModalOpen(false)}
      >
        <PetDetails
          pet={pet}
          refreshPets={props.refreshPets}
          closeModal={closeModal}
        />
      </Modal>
    </div>
  );
};

export default Pet;
