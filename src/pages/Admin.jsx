function Admin() {
  return (
    <div style={{ padding: "20px" }}>
      <h1>👨‍💼 Admin Panel</h1>

      <h2>Add New Room</h2>

      <input type="text" placeholder="Room Name" />
      <br /><br />

      <input type="number" placeholder="Room Price" />
      <br /><br />

      <input type="text" placeholder="Location" />
      <br /><br />

      <button>Add Room</button>

      <hr />

      <h2>Current Bookings</h2>

      <ul>
        <li>Dhanush - Deluxe Room - Confirmed</li>
        <li>Rahul - Luxury Suite - Pending</li>
        <li>Priya - Family Room - Completed</li>
      </ul>
    </div>
  );
}

export default Admin;