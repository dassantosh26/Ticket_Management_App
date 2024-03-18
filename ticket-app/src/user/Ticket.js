import { useState, useEffect } from "react";

const UserTicket = () => {
  return (
    <div className="container mt-4">
      <div className="row mb-5">
        <div className="col-lg-12 text-center mb-4">
          <h3 className="text-primary">Create Ticket !</h3>
        </div>
        <div className="col-lg-4 mb-4">
          <p>Problem Title</p>
          <input
            type="text"
            className="form-control"
            placeholder="What problem are you facing ?"
          />
        </div>
        <div className="col-lg-6 mb-4">
          <p>Explain More About Problem</p>
          <textarea
            className="form-control"
            placeholder="Explain within 200 words"
            maxLength={200}
          ></textarea>
        </div>
        <div className="col-lg-2 pt-5">
            <button className="btn btn-primary">
            Submit <i className="fa fa-arrow-right"></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default UserTicket;
