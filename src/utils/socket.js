import io from "socket.io-client";

let socket;

const connectSocket = (token) => {
  const apiOrigin = process.env.REACT_APP_API_ORIGIN || "http://localhost:8000/api";
  const baseUrl = apiOrigin.split("/api")[0];

  socket = io(baseUrl, {
    path: "/socket.io",
    transports: ['polling', 'websocket'],  // Try polling first
    query: { token },
    withCredentials: true,
    reconnection: true,
    reconnectionAttempts: 5,
    reconnectionDelay: 1000,
    timeout: 20000
  });

  socket.on("connect_error", (error) => {
    console.error("Connection error:", error.message);
  });

  return socket;
};

export { socket, connectSocket };