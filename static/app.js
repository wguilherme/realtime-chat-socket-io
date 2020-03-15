const socket = io();
const chat = document.querySelector(".chat-form");
const chatInput = document.querySelector(".chat-input");
chat.addEventListener("submit", e => {
  e.preventDefault();
  socket.emit("chat", chatInput.value);
  chatInput.value = "";
});
const chatDump = document.querySelector(".chat-dump");
const render = message => {
  const div = document.createElement("div");
  div.classList.add("chat-message");
  div.innerText = message; // insert content of message into div
  chatDump.appendChild(div);
};
socket.on("chat", message => {
  render(message);
});
