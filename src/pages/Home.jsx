import Navbar from "../components/Navbar";
import SearchBar from "../components/SearchBar";
import RoomCard from "../components/RoomCard";
import rooms from "../data/rooms";

function Home() {
  return (
    <div>
      <Navbar />

      <div className="hero">
        <h1>🏨 Hotel Room Booking Engine</h1>
        <p>Find and Book Luxury Rooms at Best Prices</p>
      </div>

      <SearchBar />

      <h2>Available Rooms</h2>

      <h3>Total Rooms: {rooms.length}</h3>

      <div className="room-container">
        {rooms.map((room) => (
          <RoomCard key={room.id} room={room} />
        ))}
      </div>
    </div>
  );
}

export default Home;