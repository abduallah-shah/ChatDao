import io from "socket.io-client";

let socket;

const connectSocket = (token) => {
  const apiOrigin = process.env.REACT_APP_API_ORIGIN || "http://localhost:8000/api";
  const baseUrl = apiOrigin.split("/api")[0];

  socket = io(baseUrl, {
    path: "/socket.io",
    transports: ['polling'],
    query: { token },
    withCredentials: true,
    reconnection: true,
    reconnectionAttempts: 3,
    reconnectionDelay: 1000,
    timeout: 45000,
    autoConnect: true
  });

  socket.on("connect_error", (error) => {
    console.error("Socket connection error:", error.message);
    console.error("Socket connection details:", {
      id: socket.id,
      connected: socket.connected,
      disconnected: socket.disconnected
    });
  });

  socket.on("error", (error) => {
    console.error("Socket error:", error);
  });

  return socket;
};

export { socket, connectSocket };