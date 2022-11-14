import React from "react";
import data from "../data/data";

function Employees() {
  return (
    <div>
      {data.map((item, index) => (
        <div key={index} className='d-flex p-2 d-flex justify-content-center'>
          <div className='m-2'>
            <img src={item.image} alt='' className='img-fluid rounded-circle bg-danger' />
          </div>
          <div className='data d-flex justify-content-center align-items-start flex-column px-2'>
            <div>
              <span className="text-info">Name:</span> {item.name}
            </div>
            <div>
              <span className="text-info">Email :</span> {item.email}
            </div>
            <div>
              <span className="text-info">Age :</span> {item.age}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Employees;
