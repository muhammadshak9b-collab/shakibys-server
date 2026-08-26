// MOBILE MENU

function toggleMenu() {
  document.getElementById("menu").classList.toggle("active");
}


// CLOCK

function updateClock() {

  const now = new Date();

  document.getElementById("clock").textContent =
    now.toLocaleTimeString("en-BD", {
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit"
    });

}

setInterval(updateClock, 1000);
updateClock();


// YEAR

document.getElementById("year").textContent =
  new Date().getFullYear();


// IMO

function openIMO() {

  /*
    এখানে আপনার আসল IMO profile/deep link বসাতে হবে।

    উদাহরণ:

    window.location.href = "আপনার-IMO-LINK";

  */

  alert(
    "IMO contact link সেট করতে আপনার আসল IMO profile/contact link app.js-এ বসাতে হবে।"
  );

}


// CHAT DEMO

const chatForm =
  document.getElementById("chatForm");

const messageInput =
  document.getElementById("messageInput");

const messages =
  document.getElementById("messages");


chatForm.addEventListener("submit", function(event) {

  event.preventDefault();

  const text =
    messageInput.value.trim();

  if (!text) return;


  const message =
    document.createElement("div");

  message.className =
    "chat-message sent";

  message.textContent =
    text;

  messages.appendChild(message);

  messageInput.value = "";

  messages.scrollTop =
