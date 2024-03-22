import { useState, useEffect } from "react";

const AdminDashboard = () => {
  const [allTicket, setAllTicket] = useState([]);
  const [openTicketCount, setOpenTicketCount] = useState(0);
  const [closedTicketCount, setClosedTicketCount] = useState(0);
  const [assignedTicketCount, setAssignedTicketCount] = useState(0);

  const getTicket = () => {
    const url = "http://localhost:1111/ticket";
    fetch(url)
      .then((response) => response.json())
      .then((tickets) => {
        if (tickets != null) {
          setAllTicket(tickets);

          const openTickets = tickets.filter(
            (ticket) => ticket.status === "OPEN"
          ).length;
          const closedTickets = tickets.filter(
            (ticket) => ticket.status === "CLOSED"
          ).length;
          const assignedTickets = tickets.filter(
            (ticket) => ticket.status === "ASSIGNED"
          ).length;
          setOpenTicketCount(openTickets);
          setClosedTicketCount(closedTickets);
          setAssignedTicketCount(assignedTickets);
        }
      });
  };

  useEffect(() => {
    getTicket();
  }, []);
  return (
    <div className="container mt-4">
      <div className="row">
        <div className="col-xl-12 text-center mb-5">
          <h1 style={{ color: "navy" }}> My Dashboard </h1>
        </div>

        {/* <div className="col-lg-1"></div> */}
        <div className="col-lg-2 text-center dashboard-box">
          <i className="fa-solid fa-users fa-3x text-primary pb-3"></i>
          <h5> Active Accounts : 12 </h5>
        </div>
        <div className="col-lg-2 text-center dashboard-box">
          <i className="fa-solid fa-ticket fa-3x text-secondary pb-3"></i>
          <h5> All Tickets : {allTicket.length} </h5>
        </div>
        <div className="col-lg-2 text-center dashboard-box">
          <i className="fa-solid fa-user-check fa-3x text-warning pb-3"></i>
          <h5> Assigned Tickets : {assignedTicketCount} </h5>
        </div>
        <div className="col-lg-2 text-center dashboard-box">
          <i className="fa-solid fa-folder-open fa-3x text-danger pb-3"></i>
          <h5> Open Tickets : {openTicketCount} </h5>
        </div>
        <div className="col-lg-2 text-center dashboard-box">
          <i className="fa fa-square-check fa-3x text-success pb-3"></i>
          <h5> Closed Tickets : {closedTicketCount} </h5>
        </div>
        {/* <div className="col-lg-1"></div> */}
      </div>
    </div>
  );
};

export default AdminDashboard;
