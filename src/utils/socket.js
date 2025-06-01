import io from "socket.io-client";

let socket;

const connectSocket = (token) => {
  const apiOrigin = process.env.REACT_APP_API_ORIGIN || "http://localhost:8000/api";
  const socketUrl = apiOrigin.split("/api")[0];

  socket = io(socketUrl, {
    query: { token },
    path: "/socket.io/",
    transports: ['websocket'], // Try websocket only first
    withCredentials: true,
    forceNew: true,
    reconnection: true,
    reconnectionAttempts: 5,
    reconnectionDelay: 1000,
    timeout: 10000
  });

  // Add event handlers for better debugging
  socket.on("connect", () => {
    console.log("Socket connected with ID:", socket.id);
  });

  socket.on("connect_error", (error) => {
    console.error("Connection error:", error.message);
    // Fall back to polling if websocket fails
    if (socket.io.opts.transports[0] === 'websocket') {
      socket.io.opts.transports = ['polling', 'websocket'];
    }
  });

  socket.on("disconnect", (reason) => {
    console.log("Socket disconnected:", reason);
  });

  return socket;
};

export { socket, connectSocket };