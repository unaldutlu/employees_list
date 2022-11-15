import React from "react";
import Button from "react-bootstrap/Button";

function Buttons({ click, count }) {
  return (
    <div>
      <p>
        ({count}-{count + 4})
      </p>
      <div className="pb-4">
        <Button
          className='fw-bold fst-italic px-3'
          variant='info'
          size='sm'
          value='Back'
          onClick={click}
        >
          Back
        </Button>{" "}
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <Button
          className='fw-bold fst-italic px-3'
          variant='info'
          size='sm'
          value='Next'
          onClick={click}
        >
          Next
        </Button>
      </div>
    </div>
  );
}

export default Buttons;
