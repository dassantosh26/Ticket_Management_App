import { useState, useEffect } from "react";
import swal from "sweetalert";

const AdminTicket = () => {
  const [allTickets, setTicket] = useState([]);
  const [keyword, setKeyword] = useState("");

  const getTicket = () => {
    const url = "http://localhost:1111/ticket";
    fetch(url)
      .then((response) => response.json())
      .then((tickets) => {
        if (tickets != null) {
          setTicket(tickets);
        }
      });
  };

  useEffect(() => {
    getTicket();
  }, []);

  const updateStatus = (tId, status) => {
    // alert(tId+status)
    const url = "http://localhost:1111/ticket/" + tId;
    const inputData = {
      id: tId,
      newStatus: status,
    };
    const updateData = {
      headers: { "Content-Type": "application/json" },
      method: "PUT",
      body: JSON.stringify(inputData),
    };
    fetch(url, updateData)
      .then((response) => response.json())
      .then((message) => {
        swal("Ticket Updated", message.message, "success");
        getTicket();
      });
  };
  return (
    <div className="container mt-4">
      <div className="row mb-5">
        <div className="col-xl-8">
          <h4 className="text-center"> Total Tickets : {allTickets.length} </h4>
        </div>
        <div className="col-xl-4 mb-5">
          <label htmlFor="search">Search</label>
          <input
            type="text"
            className="form-control"
            onChange={(e) => setKeyword(e.target.value)}
            value={keyword}
          />
        </div>

        <div className="col-xl-12">
          <table className="table table-striped table-bordered">
            <thead>
              <tr className="table-primary">
                <th> Title </th>
                <th> Description </th>
                <th> Date </th>
                <th> Status </th>
              </tr>
            </thead>
            <tbody>
              {allTickets.map((ticket, index) => {
                if (
                  ticket.title?.toLowerCase().match(keyword.toLowerCase()) ||
                  ticket.details?.toLowerCase().match(keyword.toLowerCase()) ||
                  ticket.createdDate.toLowerCase().match(keyword.toLowerCase())
                )
                  return (
                    <tr key={index}>
                      <td> {ticket.title} </td>
                      <td> {ticket.details} </td>
                      <td> {ticket.createdDate} </td>
                      <td width={"20%"}>
                        {ticket.status}
                        <p>
                          <label
                            className="me-4 text-danger"
                            data-bs-toggle="modal"
                            data-bs-target="#myModal"
                          >
                            Assign Now
                          </label>
                          <label className="me-2">
                            Open
                            <input
                              type="radio"
                              name="sts"
                              onClick={updateStatus.bind(
                                this,
                                ticket._id,
                                "OPEN"
                              )}
                            />
                          </label>
                          <label>
                            Closed
                            <input
                              type="radio"
                              name="sts"
                              onClick={updateStatus.bind(
                                this,
                                ticket._id,
                                "CLOSED"
                              )}
                            />
                          </label>
                        </p>
                      </td>
                    </tr>
                  );
              })}
            </tbody>
          </table>
        </div>
      </div>
      <div
        className="modal fade"
        id="myModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel">
                Modal title
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">...</div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button type="button" className="btn btn-primary">
                Save changes
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default AdminTicket;
