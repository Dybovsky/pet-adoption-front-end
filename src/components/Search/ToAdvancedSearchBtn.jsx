import React, { useState } from "react";
import { Button, Collapse } from "react-bootstrap";
import AdvancedSearch from "./AdvancedSearch";

const ToAdvancedSearch = ({ onAdvSearch }) => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Button
        onClick={() => setOpen(!open)}
        aria-controls="example-collapse-text"
        aria-expanded={open}
      >
        more fields
      </Button>
      <Collapse in={open}>
        <div id="example-collapse-text">
          <AdvancedSearch onAdvSearch={onAdvSearch} />
        </div>
      </Collapse>
    </>
  );
};

export default ToAdvancedSearch;
