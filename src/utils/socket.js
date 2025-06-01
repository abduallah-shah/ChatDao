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
    forceNew: true,
    auth: { token } // Added auth property for extra security
  });

  socket.on('connect', () => {
    console.log('Connected to socket server');
    isConnecting = false;
  });

  socket.on('connect_error', (error) => {
    console.error('Socket connection error:', error.message);
    isConnecting = false;
    // Optionally handle reconnection here if needed
  });

  socket.on('disconnect', () => {
    isConnecting = false;
  });

  return socket;
};

// Clean disconnect function
const disconnectSocket = () => {
  if (socket) {
    socket.disconnect();
    socket = null;
    isConnecting = false;
  }
};

export { socket, connectSocket, disconnectSocket };