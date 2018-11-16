navigator.getMedia = ( navigator.getUserMedia ||
    navigator.webkitGetUserMedia ||
    navigator.mozGetUserMedia ||
    navigator.msGetUserMedia);

navigator.getMedia(

    {audio: false,video: {width: { min: 1024, ideal: 1280, max: 1920 },height: { min: 576, ideal: 720, max: 1080 },}},

    function (stream) {
        var video = document.getElementById("myCam");
        video.src = window.URL.createObjectURL(stream);
    },

    function(err) {console.log("Error: " + err);
    }

);


var connection = new WebSocket('ws://localhost:9090');

connection.onopen = function () {
    send({type:"new_room", key:key});
};

// Alias for sending messages in JSON format
function send(message) {
    connection.send(JSON.stringify(message));
}