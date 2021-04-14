import React, {useState} from 'react'
import {Button, Collapse} from 'react-bootstrap'
import AddPet from '../../pages/AddPet';

const AddPetBtn = () => {
   
    const [open, setOpen] = useState(false);

    return (
      <>
        <Button
          onClick={() => setOpen(!open)}
          aria-controls="example-collapse-text"
          aria-expanded={open}
        >
          Add new pet
        </Button>
        <Collapse in={open}>
          <div id="example-collapse-text">
            <AddPet />
          </div>
        </Collapse>
      </>
    );
  }

export default AddPetBtn