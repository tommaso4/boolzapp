
function sentMessage(){
  var partP = document.createElement("p");
  var partH4 = document.createElement("h4");
  var partI = document.createElement("i");
  var partDiv = document.createElement("div");
  var messageDiv = document.createElement("div");
  var details = document.createElement("div");

  var centralright = $(".central-right");
  var inputText = $("#inp");

  $(partP).text(inputText.val());
  $(partH4).text("15:00");

  $(details).addClass("message-details")
  $(partI).addClass("fas fa-check-double");
  $(messageDiv).addClass("message sent");
  $(partDiv).addClass("box-message");

  messageDiv.append(partP);
  details.append(partH4);
  details.append(partI);
  messageDiv.append(details);
  partDiv.append(messageDiv);
  centralright.append(partDiv);
}

function receivedMessage(){
  var partP = document.createElement("p");
  var partH4 = document.createElement("h4");
  var partI = document.createElement("i");
  var partDiv = document.createElement("div");
  var messageDiv = document.createElement("div");
  var details = document.createElement("div");

  var centralright = $(".central-right");

  $(partP).text("tutto bene amico!!!");
  $(partH4).text("15:00");

  $(details).addClass("message-details")
  $(partI).addClass("fas fa-check-double");
  $(messageDiv).addClass("message received");
  $(partDiv).addClass("box-message");

  messageDiv.append(partP);
  details.append(partH4);
  details.append(partI);
  messageDiv.append(details);
  partDiv.append(messageDiv);
  centralright.append(partDiv);
}

function init() {
  var inputText = $("#inp");
  inputText.keydown(function(event){
    console.log(event);
    if (event.which == 13) {
      sentMessage();
      setTimeout(receivedMessage, 1000);
    }
  });
}

$(document).ready(init);
