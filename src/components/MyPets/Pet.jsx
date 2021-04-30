import Modal from "react-modal";
import { useState } from "react";
import PetDetails from "./PetDetails";

const Pet = (props) => {
  const { pet } = props;

  const [isModalOpen, setIsModalOpen] = useState(false);
  const closeModal = () => {
    setIsModalOpen(false);
  };
  return (
    <div>
      {/* pet.img
            pet.name
            pet.status
             */}
      <div onClick={() => setIsModalOpen(true)}>
        <img src={pet.picture} alt="cat" className="catImg" />
      </div>
      <div>{pet.name}</div>
      <div>{pet.status}</div>

      <button onClick={() => setIsModalOpen(true)}>See more</button>
      <Modal
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
