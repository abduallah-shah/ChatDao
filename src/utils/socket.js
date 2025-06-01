import io from "socket.io-client";

let socket;

const connectSocket = (token) => {
  const apiOrigin = process.env.REACT_APP_API_ORIGIN || "http://localhost:8000/api";
  socket = io(apiOrigin.split("/api")[0], { query: `token=${token}` });
};

export { socket, connectSocket };
