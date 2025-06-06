import io from "socket.io-client";

let socket;

const connectSocket = (token) => {
  if (!token) return null;

  socket = io(process.env.REACT_APP_API_ORIGIN.split("/api")[0], {
    query: { token },
    timeout: 10000
  });

  socket.on('connect_error', (error) => {
    console.error('Socket connection error:', error.message);
  });

  return socket;
};

export { socket, connectSocket };