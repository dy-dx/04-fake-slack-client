var host = 'https://node-slack-christopherjkim.c9.io';
var sendRoute = host + '/send';
var messagesRoute = host + '/messages';

function sendMessage (user, content, callback) {
  $.post(sendRoute, {user: user, content: content})
  .done(callback);
}

function getMessages (callback) {
  $.get(messagesRoute)
  .done(callback);
}


$('#submit-message').submit(function (e) {
  e.preventDefault();

  /* TODO: send message to server */

});


/* TODO: use setInterval to periodically get new messages and update the list */

getMessages(function (messages) {
  console.log(messages);
});
