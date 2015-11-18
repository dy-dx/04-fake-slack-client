var host = 'https://node-slack-christopherjkim.c9.io';
var sendRoute = host + '/send';
var messagesRoute = host + '/messages';

function sendMessage (user, content, callback) {
  $.post(sendRoute, {user: user, content: content})
  .done(callback);
}

function getMessages (callback) {
  $.get('https://node-slack-christopherjkim.c9.io/messages')
  .done(callback);
}


$('#submit-message').submit(function (e) {
  e.preventDefault();

  /* TODO: send message to server */
  var username = $('#submit-user').val();
  var content = $('#submit-content').val();

  sendMessage(username, content);
});

function formatMessage(message) {

  var avatarUrl = 'http://static.dnaindia.com/sites/default/files/2015/10/02/361285-john-cena-2.jpg';
  var avatar = '<img src="' + avatarUrl + '" height="100px" width="100px"></img>';
  var millis = message.timestamp;
  var mins = Math.floor((millis % 36e5) / 6e4),
    secs = Math.floor((millis % 6e4) / 1000);
  var timeString = mins + ':' + secs;
  return '<li>' + avatar + '<span class="timestamp">' + timeString + '</span> ' + '<strong>' + message.user + '</strong>' + ': ' + message.content + '</li>';
}

/* use setInterval to periodically get new messages and update the list */
function updateMessages() {
  var getMessagesCallback = function (messages) {
    // empty message log
    $('.messages').empty();

    for (var i = 0; i < messages.length; i++) {
      var message = messages[i];
      $('.messages').append(formatMessage(message));
    }
  };

  getMessages(getMessagesCallback);
}
window.setInterval(updateMessages, 50);
