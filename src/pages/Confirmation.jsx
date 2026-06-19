import { useNavigate } from "react-router-dom";

function Confirmation() {
  const navigate = useNavigate();

  return (
    <div
      style={{
        padding: "40px",
        textAlign: "center",
      }}
    >
      <h1>✅ Booking Confirmed</h1>

      <h2>Your Room Has Been Reserved</h2>

      <p>
        <strong>Booking ID:</strong> BK101
      </p>

      <p>
        <strong>Status:</strong> Confirmed
      </p>

      <button
        onClick={() => navigate("/history")}
      >
        View Booking History
      </button>
    </div>
  );
}

export default Confirmation;