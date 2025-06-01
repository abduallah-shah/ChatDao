import io from "socket.io-client";

let socket;
let isConnecting = false;

const connectSocket = (token) => {
  if (!token) return null;
  if (isConnecting) return socket;

  isConnecting = true;

  socket = io(process.env.REACT_APP_API_ORIGIN.split("/api")[0], {
    query: { token },
    transports: ['polling'], // Start with polling only
    reconnection: true,
    reconnectionDelay: 1000,
    reconnectionDelayMax: 5000,
    reconnectionAttempts: 5,
    timeout: 20000,
    forceNew: true
  });

  socket.on('connect', () => {
    console.log('Connected to socket server');
    isConnecting = false;
  });

  socket.on('connect_error', (error) => {
    console.error('Socket connection error:', error.message);
    isConnecting = false;
  });

  socket.on('disconnect', () => {
    isConnecting = false;
  });

  return socket;
};

export { socket, connectSocket };