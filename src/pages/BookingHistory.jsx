function BookingHistory() {
  const bookings = [
    {
      id: "BK101",
      customer: "TEJA",
      room: "Deluxe Room",
      date: "12-06-2026",
      status: "Confirmed",
    },
    {
      id: "BK102",
      customer: "priya",
      room: "Luxury Suite",
      date: "15-06-2026",
      status: "Pending",
    },
    {
      id: "BK103",
      customer: "yeshwanth",
      room: "Family Room",
      date: "18-06-2026",
      status: "Completed",
    },
  ];

  return (
    <div style={{ padding: "20px" }}>
      <h1>📋 Booking History</h1>

      <table border="1" cellPadding="10" width="100%">
        <thead>
          <tr>
            <th>Booking ID</th>
            <th>Customer</th>
            <th>Room</th>
            <th>Date</th>
            <th>Status</th>
          </tr>
        </thead>

        <tbody>
          {bookings.map((booking) => (
            <tr key={booking.id}>
              <td>{booking.id}</td>
              <td>{booking.customer}</td>
              <td>{booking.room}</td>
              <td>{booking.date}</td>
              <td>{booking.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default BookingHistory;