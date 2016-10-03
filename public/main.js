$(document).ready(function() {
    var socket = io();
    var input = $('input');
    var messages = $('#messages');
    var serverMessages = $('#server-messages');

    var addMessage = function(message) {
        messages.append('<div>' + message + '</div>');
    };
    var addServerMessage = function(message) {
        serverMessages.append('<div>' + message + '</div>');
    };

    input.on('keydown', function(event) {
        if (event.keyCode != 13) {
            return;
        }

        var message = input.val();
        addMessage(message);
        socket.emit('message', message);
        input.val('');
    });
    socket.on('message', addMessage);
    socket.on('server-messages', addServerMessage);
});
