import Modal from 'react-modal';
import {useState} from 'react';
import SignUpForm from './SignUpForm';


const LogInSignUp = () => {

    const[isModalOpen, setIsModalOpen ] = useState(false)

    return(
        <div>
           <button
           onClick={() => {
               setIsModalOpen(true)
           }}
           >
               Log In / Sign Up
           </button>
           <Modal
           //style={{width: "80px"}}
           isOpen = {isModalOpen}
           onRequestClose = {() => setIsModalOpen(false)}
           >
               <SignUpForm />

           </Modal>

        </div>
    )
}

export default LogInSignUp;