import io from "socket.io-client";

let socket;

const connectSocket = (token) => {
  const apiOrigin = process.env.REACT_APP_API_ORIGIN || "http://localhost:8000/api";
  socket = io(apiOrigin.split("/api")[0], { 
    query: { token },
    reconnection: true,
    reconnectionAttempts: 5,
    reconnectionDelay: 1000,
    
    // Add event handlers for better debugging and error handling
    autoConnect: true
  });

  // Add connection event handlers
  socket.on("connect", () => {
    console.log("Socket connected successfully");
  });

  socket.on("connect_error", (error) => {
    console.error("Socket connection error:", error);
  });

  return socket;
};

export { socket, connectSocket };