import { useState, useEffect } from "react";
import swal from "sweetalert";

const UserTicket = () => {
  const [title, setTitle] = useState("");
  const [details, setDetails] = useState("");
  const [allTickets, setTicket] = useState([]);
  const [keyword, setKeyword] = useState("");

  const userId = localStorage.getItem("token");

  const save = () => {
    const newTicket = {
      ticketTitle: title,
      details: details,
      userId: userId,
    };
    const url = "http://localhost:1111/ticket";
    const postData = {
      headers: { "Content-Type": "application/json" },
      method: "post",
      body: JSON.stringify(newTicket),
    };

    fetch(url, postData)
      .then((response) => response.json())
      .then((ticketInfo) => {
        swal(
          ticketInfo.title + " Saved",
          "Ticket has been raised successfully",
          "success"
        );
        getTicket();
        setTitle("");
        setDetails("");
      });
  };

  const getTicket = () => {
    const url = "http://localhost:1111/ticket/" + userId;
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

  return (
    <div className="container mt-4">
      <div className="row mb-5">
        <div className="col-lg-8 text-center mb-4">
          <h1 className="text-info"> Create Ticket </h1>
        </div>
        <div className="col-lg-4">
          <label htmlFor="">Search</label>
          <input
            type="text"
            className="form-control"
            onChange={(e) => setKeyword(e.target.value)}
            value={keyword}
          />
        </div>

        <div className="col-lg-4 mb-4">
          <p> Problem Title </p>
          <input
            type="text"
            className="form-control"
            placeholder="What problem are you facing?"
            onChange={(e) => setTitle(e.target.value)}
            value={title}
          />
        </div>

        <div className="col-lg-6 mb-4">
          <p> Explain More About Problem </p>
          <textarea
            className="form-control"
            placeholder="Explain in max 200 words"
            maxLength={200}
            onChange={(e) => setDetails(e.target.value)}
            value={details}
          ></textarea>
        </div>

        <div className="col-lg-2 pt-5">
          <button className="btn btn-primary w-100" onClick={save}>
            Submit <i className="fa fa-arrow-right"></i>
          </button>
        </div>
      </div>

      <div className="row mb-5">
        <div className="col-xl-12">
          <h4 className="text-center"> Total Tickets : {allTickets.length} </h4>
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
                  ticket.title?.toLowerCase().includes(keyword.toLowerCase()) ||
                  ticket.details
                    ?.toLowerCase()
                    .includes(keyword.toLowerCase()) ||
                  ticket.createdDate
                    .toLowerCase()
                    .includes(keyword.toLowerCase())
                )
                  return (
                    <tr key={index}>
                      <td> {ticket.title} </td>
                      <td> {ticket.details} </td>
                      <td> {ticket.createdDate} </td>
                      <td>{ticket.status}</td>
                    </tr>
                  );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
export default UserTicket;
