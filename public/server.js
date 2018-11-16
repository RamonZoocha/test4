var WebSocketServer = require('ws').Server;

//creating a websocket server at port 9090
var wss = new WebSocketServer({port: 9090});

//when a user connects to our sever
wss.on('connection', function(connection) {
    console.log("user connected");

    //when server gets a message from a connected user
    connection.on('message', function(message){
        handleMessage(message, connection);
    });

    connection.send("Hello from server");
});

var rooms = {};

function handleMessage(message, connection) {

    try {
        message = JSON.parse(message);
    }
    catch (e) {
        console.log("Invalid msg received");
    }

    switch (message.type) {

        case "new_room":
            if(rooms[message.key])
                connection.send({type:"existing_room"});
            else
                rooms[message.key] = connection;
            break;
    }

}