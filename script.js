
function sentMessage(){

  var partP = document.createElement("p");
  var partH4 = document.createElement("h4");
  var partI = document.createElement("i");
  var partDiv = document.createElement("div");
  var messageDiv = document.createElement("div");
  var details = document.createElement("div");

  var h3a = document.createElement("h3");
  var h3b = document.createElement("h3");
  var hr = document.createElement("hr");
  var div = document.createElement("div");

  $(h3a).text("DELATE MESSAGE");
  $(h3b).text("INFO MESSAGE");

  var centralright = $(".selected");
  var inputText = $("#inp");

  $(partP).text(inputText.val());
  $(partH4).text("15:00");

  $(h3a).addClass("delateBtn");
  $(details).addClass("message-details")
  $(partI).addClass("fas fa-check-double");
  $(messageDiv).addClass("message sent");
  $(partDiv).addClass("box-message");

  $(div).addClass("delate-msg");

  messageDiv.append(partP);
  details.append(partI);
  details.append(partH4);
  messageDiv.append(details);
  partDiv.append(messageDiv);
  centralright.append(partDiv);

  div.append(h3a);
  div.append(hr);
  div.append(h3b);
  details.append(div);
}


function receivedMessage(){

  var partP = document.createElement("p");
  var partH4 = document.createElement("h4");
  var partI = document.createElement("i");
  var partDiv = document.createElement("div");
  var messageDiv = document.createElement("div");
  var details = document.createElement("div");

  var h3a = document.createElement("h3");
  var h3b = document.createElement("h3");
  var hr = document.createElement("hr");
  var div = document.createElement("div");

  $(h3a).text("DELATE MESSAGE");
  $(h3b).text("INFO MESSAGE");

  var centralright = $(".selected");

  $(partP).text("tutto bene amico!!!");
  $(partH4).text("15:00");

  $(h3a).addClass("delateBtn");
  $(div).addClass("delate-msg");
  $(details).addClass("message-details")
  $(partI).addClass("fas fa-check-double");
  $(messageDiv).addClass("message received");
  $(partDiv).addClass("box-message");

  messageDiv.append(partP);
  details.append(partI);
  details.append(partH4);
  messageDiv.append(details);
  partDiv.append(messageDiv);
  centralright.append(partDiv);

  div.append(h3a);
  div.append(hr);
  div.append(h3b);
  details.append(div);
}

function searchUtente(){

  var input = $("#input-src");
  var inpVal = input.val();
  inpVal = inpVal.toLowerCase();

  var listContact = $(".profili > .profilo-ut");

  for (var i = 0; i < listContact.length; i++) {

    var contact = listContact.eq(i);
    var h4 = contact.find("h4");
    var h4txt = h4.text();
    h4txt = h4txt.toLowerCase();

    if (!h4txt.includes(inpVal)) {
      contact.addClass("red");
    }else {
      contact.removeClass("red");
    }
  }
}

function clearClick(){

  var input = $("#inp");
  var inpVal = input.val("");

  return inpVal;
}

function removeMsg (){

  var me = $(this);
  var msg = me.closest(".box-message");

  msg.remove();
}

function openConversation(){

  var me = $(this);
  var selected = me.index();

  var conversation = $(".central-right");
  conversation.removeClass("selected");

  var newConversation = conversation.eq(selected);
  newConversation.addClass("selected");
}

function init() {

  var inputText = $("#inp");
  inputText.keydown(function(event){

    if (event.which == 13) {
      sentMessage();
      setTimeout(receivedMessage, 1000);
      clearClick();
    }
  });

  var input = $("#input-src");
  input.keyup(searchUtente);

  $(document).on("click", ".delateBtn",removeMsg);

  $(document).on("click", ".fa-check-double", function(){
    var me = $(this);
    var msg = me.parent().find(".delate-msg");
    msg.slideToggle();
  });

  var profilo = $(".profilo-ut");
  profilo.click(openConversation);
}

$(document).ready(init);
