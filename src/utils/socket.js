import io from "socket.io-client";

let socket;

const connectSocket = (token) => {
  if (!token) {
    console.error("No token provided for socket connection");
    return;
  }

  socket = io(process.env.REACT_APP_API_ORIGIN.split("/api")[0], {
    query: `token=${token}`,
    reconnection: true,
    reconnectionAttempts: 5,
    reconnectionDelay: 1000,
    timeout: 10000,
    transports: ['websocket', 'polling'],
  });

  socket.on('connect_error', (error) => {
    console.error('Socket connection error:', error);
  });

  socket.on('disconnect', (reason) => {
    console.log('Socket disconnected:', reason);
  });

  return socket;
};

const disconnectSocket = () => {
  if (socket) {
    socket.disconnect();
  }
};

export { socket, connectSocket, disconnectSocket };