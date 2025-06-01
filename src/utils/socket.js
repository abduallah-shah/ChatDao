import io from "socket.io-client";

let socket;

const connectSocket = (token) => {
  if (!token) {
    console.error('Token is required for socket connection');
    return null;
  }

  const socketOptions = {
    query: { token },
    transports: ['websocket', 'polling'], // Try WebSocket first, fallback to polling
    timeout: 10000, // 10 second timeout
    reconnection: true,
    reconnectionAttempts: 5,
    reconnectionDelay: 1000,
    forceNew: true,
    autoConnect: true
  };

  try {
    socket = io(process.env.REACT_APP_API_ORIGIN.split("/api")[0], socketOptions);

    socket.on('connect_error', (error) => {
      console.error('Socket connection error:', error.message);
    });

    socket.on('connect', () => {
      console.log('Socket connected successfully');
    });

    socket.on('disconnect', (reason) => {
      console.log('Socket disconnected:', reason);
      if (reason === 'io server disconnect') {
        // Server disconnected the client, try reconnecting
        socket.connect();
      }
    });

    socket.on('error', (error) => {
      console.error('Socket error:', error);
    });

    return socket;
  } catch (error) {
    console.error('Failed to initialize socket:', error);
    return null;
  }
};

export { socket, connectSocket };