import React, { useState, useEffect } from "react";

function UserInfoBar() {
  const getUsername = localStorage.getItem("username");
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="bg-dark text-white p-2 border-2 rounded-1  text-end ">
      {getUsername}, {currentTime.toLocaleTimeString()}
    </div>
  );
  // how to get current time that always changes
}

export default UserInfoBar;
