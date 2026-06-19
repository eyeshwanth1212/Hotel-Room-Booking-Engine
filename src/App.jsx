import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "./pages/Login";
import Home from "./pages/Home";
import Booking from "./pages/Booking";
import FileUpload from "./pages/FileUpload";
import Confirmation from "./pages/Confirmation";
import BookingHistory from "./pages/BookingHistory";
import Admin from "./pages/Admin";
import ApiDemo from "./pages/ApiDemo";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Main User Flow */}
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/booking" element={<Booking />} />
        <Route path="/upload" element={<FileUpload />} />
        <Route path="/confirmation" element={<Confirmation />} />
        <Route path="/history" element={<BookingHistory />} />

        {/* Extra Modules */}
        <Route path="/admin" element={<Admin />} />
        <Route path="/api" element={<ApiDemo />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;