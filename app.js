const express = require("express");
const app = express();
const server = require("http").createServer(app);
const io = require("socket.io")(server, { cors: { origin: "*" } });

app.get('/home', (req, res) => {
    res.sendFile(__dirname + '/home.html');
});

server.listen(3001, () => {
  console.log("Server running...");
});

io.on("connection", (socket) =>{
    console.log("user connected"+ socket.id);

    socket.on("message", (data)=>{
        // console.log(data);
        socket.broadcast.emit('message',data)
      })
});