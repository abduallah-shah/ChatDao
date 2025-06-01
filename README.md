# ChatDao - Next Generation Real-Time Chat Platform

<p align="center">
  <img src="./public/logo.ico" alt="ChatDao Logo" width="120" />
</p>

ChatDao is a modern real-time chat application built with the MERN stack (MongoDB, Express.js, React.js, Node.js) that offers seamless communication experience with advanced features.

## 🚀 Features

- **Real-time Messaging** - Instant message delivery using Socket.IO
- **User Authentication** - Secure JWT-based authentication
- **File Sharing** - Support for image and file sharing using Cloudinary
- **Responsive Design** - Seamless experience across all devices
- **Dark Mode** - Eye-friendly dark theme support
- **User Status** - Real-time user activity status
- **Message History** - Persistent chat history
- **Profile Customization** - Customizable user profiles with avatars

## 🛠️ Tech Stack

- **Frontend:** React.js, Material-UI, Socket.IO Client
- **Backend:** Node.js, Express.js, Socket.IO
- **Database:** MongoDB
- **File Storage:** Cloudinary
- **Authentication:** JWT
- **State Management:** Context API

## 🏃‍♂️ Getting Started

### Prerequisites

- Node.js (v14 or higher)
- MongoDB
- npm or yarn
- Git

### Installation

1. Clone the repository
```bash
git clone https://github.com/yourusername/chatdao.git
cd chatdao
```

2. Install dependencies for both frontend and backend
```bash
# Install frontend dependencies
cd frontend
npm install

# Install backend dependencies
cd ../backend
npm install
```

3. Set up environment variables
```bash
# Frontend (.env)
REACT_APP_API_URL=http://localhost:8000
REACT_APP_SOCKET_URL=http://localhost:8000

# Backend (.env)
PORT=8000
MONGODB_URI=your_mongodb_uri
JWT_SECRET=your_jwt_secret
CLOUDINARY_CLOUD_NAME=your_cloudinary_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret
```

### Running the Application

1. Start the backend server
```bash
cd backend
npm start
```

2. Start the frontend application
```bash
cd frontend
npm start
```

The application will be available at [http://localhost:3000](http://localhost:3000)

## 📝 Available Scripts

In the project directory, you can run:

### Frontend Scripts

- `npm start` - Runs the app in development mode
- `npm test` - Launches the test runner
- `npm run build` - Builds the app for production
- `npm run eject` - Ejects from Create React App

### Backend Scripts

- `npm start` - Starts the server
- `npm run dev` - Starts the server with nodemon
- `npm test` - Runs backend tests

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [Create React App](https://create-react-app.dev/)
- [Material-UI](https://mui.com/)
- [Socket.IO](https://socket.io/)
- [MongoDB](https://www.mongodb.com/)
- [Express.js](https://expressjs.com/)

## 📞 Contact

Your Name - [@yourtwitter](https://twitter.com/yourtwitter)

Project Link: [https://github.com/yourusername/chatdao](https://github.com/yourusername/chatdao)