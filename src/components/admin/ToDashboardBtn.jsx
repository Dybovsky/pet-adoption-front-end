import React, { useState } from "react";
import { Button, Collapse } from "react-bootstrap";
import Dashboard from "../../pages/Dashboard";

const ToDashboardBtn = ({ users, pets }) => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Button
        onClick={() => setOpen(!open)}
        aria-controls="example-collapse-text"
        aria-expanded={open}
      >
        Dashboard
      </Button>
      <Collapse in={open}>
        <div id="example-collapse-text">
          <Dashboard users={users} pets={pets} />
        </div>
      </Collapse>
    </>
  );
};

export default ToDashboardBtn;
