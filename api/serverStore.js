const connectedUsers = new Map();

let io = null;

const setSocketServerInstance = (ioInstance) => {
  io = ioInstance;
};

const getSocketServerInstance = () => {
  return io;
};

const addNewConnectedUser = ({ socketId, userId }) => {
  // add new user to connectedUsers
  connectedUsers.set(socketId, { userId });
  // console.log('New connected users');
  // console.log(connectedUsers);
};

const removeConnectedUser = (socketId) => {
  if (connectedUsers.has(socketId)) {
    connectedUsers.delete(socketId);
    // console.log('new connected users');
    // console.log(connectedUsers);
  }
};

const getOnlineUsers = () => {
  const onlineUsers = [];

  connectedUsers.forEach((value, key) => {
    onlineUsers.push({ socketId: key, userId: value.userId });
  });

  return onlineUsers;
};

const getActiveConnections = (userId) => {
  const activeConnections = [];

  connectedUsers.forEach(function (key, value) {
    if (key.userId === userId) {
      activeConnections.push(key);
    }
  });

  return activeConnections;
};

export default {
  addNewConnectedUser,
  removeConnectedUser,
  getActiveConnections,
  getOnlineUsers,
  setSocketServerInstance,
  getSocketServerInstance,
};
