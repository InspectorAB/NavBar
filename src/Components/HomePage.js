import { React, useState } from "react";
import Navbar from "./Navbar";

export default function HomePage() {
  const [isLogged, setLoggedIn] = useState(localStorage.getItem("IsLogin"));
  // Function to handle logout
  const handleLogout = () => {
    localStorage.removeItem("IsLogin");
    setLoggedIn(false);
  };
  return (
    <div>
      <Navbar isLoggedIn={isLogged} handleLogout={handleLogout} /> <hr></hr>
    </div>
  );
}
