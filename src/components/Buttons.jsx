import React from "react";
import Button from 'react-bootstrap/Button';


function Buttons() {
  return (
    <div>
      <Button className="fw-bold fst-italic" variant='info' size="lg">Back</Button> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <Button className="fw-bold fst-italic" variant='info' size="lg">Next</Button>
    </div>
  );
}

export default Buttons;
