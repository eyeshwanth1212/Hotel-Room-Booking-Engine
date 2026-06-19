import { useNavigate } from "react-router-dom";

function RoomCard({ room }) {
  const navigate = useNavigate();

  return (
    <div className="card">
      <img src={room.image} alt={room.name} />

      <h3>{room.name}</h3>

      <p>📍 {room.location}</p>

      <p>₹ {room.price}</p>

      <button onClick={() => navigate("/booking")}>
        Book Now
      </button>
    </div>
  );
}

export default RoomCard;