import React from "react";
import data from "../data/data";
import Table from "react-bootstrap/Table";

function Employees({ count }) {
  return (
    <div>
      {data.slice(count - 1, count + 3).map((item, index) => (
        <div key={index} className='d-flex p-2 d-flex justify-content-center'>
          <div className='m-2'>
            <img
              src={item.image}
              alt=''
              className='img-fluid rounded-circle bg-danger'
            />
          </div>
          <div className='data d-flex justify-content-center align-items-center px-3 mt-2 ms-3 bg-gradient'>
            <Table className='table table-borderless'>
              <tbody>
                <tr>
                  <td className="text-info">Name:</td>
                  <td colSpan={3} className="text-dark">{item.name}</td>
                </tr>
                <tr>
                  <td className="text-info">Email:</td>
                  <td colSpan={3} className="text-dark">{item.email}</td>
                </tr>
                <tr>
                  <td className="text-info">Age:</td>
                  <td colSpan={3} className="text-dark">{item.age}</td>
                </tr>
              </tbody>
            </Table>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Employees;
