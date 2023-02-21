const messageForm = document.getElementById("message-form");
const messageList = document.getElementById("message-list");

messageForm.addEventListener("submit", e => {
    e.preventDefault();

    const messageInput = document.getElementById("message-input");
    const message = messageInput.value;

    if (message.trim() === "") {
        return;
    }

    const messageItem = document.createElement("li");
    messageItem.innerText = message;
    messageList.appendChild(messageItem);

    messageInput.value = "";
});
