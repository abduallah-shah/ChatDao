import io from "socket.io-client";

let socket;

const connectSocket = (token) => {
  const apiOrigin = process.env.REACT_APP_API_ORIGIN || "http://localhost:8000/api";
  const baseUrl = apiOrigin.split("/api")[0];

  socket = io(baseUrl, { 
    query: { token },
    transports: ['websocket', 'polling']
  });

  // Add minimal error logging
  socket.on("connect_error", (error) => {
    console.error("Connection error:", error.message);
  });

  return socket;
};

export { socket, connectSocket };