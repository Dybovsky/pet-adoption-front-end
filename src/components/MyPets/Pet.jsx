import Modal from "react-modal";
import { useContext, useState } from "react";
import PetDetails from "./PetDetails";
import { AuthContext } from "../AuthContext";

const Pet = (props) => {
  const { pet } = props;

  const [isModalOpen, setIsModalOpen] = useState(false);
  const closeModal = () => {
    setIsModalOpen(false);
  };
  const user = useContext(AuthContext).authUser;
  let token;
  // if (!user) {
  // } else {
  //   token = user.authUser.token;
  // }

  // const token = useContext(AuthContext).authUser.token;

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
      {/* pet.img
            pet.name
            pet.status
             */}
      <div
        onClick={() => {
          setIsModalOpen(true);
          props.refreshPets(token);
        }}
        style={{ cursor: "pointer" }}
      >
        <img src={pet.picture} alt="cat" className="catImg" />
      </div>
      <div>
        <div>{pet.name}</div>
        <div>{pet.status}</div>
      </div>

      <button
        className="btn-primary"
        onClick={() => {
          setIsModalOpen(true);
          props.refreshPets(token);
        }}
      >
        See more
      </button>
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
