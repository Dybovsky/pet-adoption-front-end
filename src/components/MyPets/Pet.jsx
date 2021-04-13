import Modal from 'react-modal';
import {useState} from 'react';
import PetDetails from './PetDetails';


const Pet = (props) => {
    const {pet} = props


    const[isModalOpen, setIsModalOpen ] = useState(false)
    
    return(
        <div>
            {/* pet.img
            pet.name
            pet.status
             */}
             <div 
             onClick={() => setIsModalOpen(true)}
             >
                 <img src={pet.image}
                    alt='cat'     
                />
             </div>
             <div>
                 {pet.name}
             </div>
             <div>
                 {pet.status}
             </div>

             <button 
             onClick={() => setIsModalOpen(true)}
             >
                ggggg
             </button>
             <Modal
                isOpen = {isModalOpen}
                onRequestClose = {() => setIsModalOpen(false)}
             >
               <PetDetails />

           </Modal>
        </div>
    )
}

export default Pet