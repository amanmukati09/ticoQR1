// chat.js

// Function to add a new message to the chat box
function addMessage(role, content) {
  const chatBox = document.getElementById("chat-box");
  const messageDiv = document.createElement("div");
  messageDiv.className = `chat-message ${role}`;
  messageDiv.innerHTML = `
        <div class="profile-circle ${role === "user" ? "user-profile" : "assistant-profile"}">
            ${role === "user" ? "🔵" : "🟢"}
            ${content}
        </div>
    `;
  chatBox.appendChild(messageDiv);
}

// Function to clear the user input field
function clearInput() {
  document.getElementById("user-input").value = "";
}

// Function to handle sending a message
function handleSendMessage() {
  const userMessage = document.getElementById("user-input").value;
  if (userMessage.trim() === "") return;

  addMessage("user", userMessage);
  clearInput();

  // Simulate an assistant reply (you can replace this with the actual backend API call)
  setTimeout(() => {
    const assistantReply = "This is a simulated response from the assistant.";
    addMessage("assistant", assistantReply);
  }, 1000);
}

// Attach the handleSendMessage function to the Send button
document.getElementById("send-button").addEventListener("click", handleSendMessage);

// Listen for the Enter key press in the user input field
document.getElementById("user-input").addEventListener("keyup", function (event) {
  if (event.key === "Enter") {
    handleSendMessage();
  }
});

// Simulate an initial greeting from the assistant
setTimeout(() => {
  const assistantGreeting = "Hello! How can I assist you today?";
  addMessage("assistant", assistantGreeting);
}, 1000);

// chat.js

// // Function to add a new message to the chat box
// function addMessage(role, content) {
//   const chatBox = document.getElementById("chat-box");
//   const messageDiv = document.createElement("div");
//   messageDiv.className = `chat-message ${role}`;
//   messageDiv.innerHTML = `
//         <div class="profile-circle ${role === "user" ? "user-profile" : "assistant-profile"}">
//             ${role === "user" ? "🔵" : "🟢"}
//             ${content}
//         </div>
//     `;
//   chatBox.appendChild(messageDiv);
// }

// // Function to clear the user input field
// function clearInput() {
//   document.getElementById("user-input").value = "";
// }

// // Function to handle sending a message
// function handleSendMessage() {
//   const userMessage = document.getElementById("user-input").value;
//   if (userMessage.trim() === "") return;

//   addMessage("user", userMessage);
//   clearInput();

//   // Make a POST request to the server to generate a response
//   fetch("/generate", {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify({ message: userMessage }),
//   })
//     .then((response) => response.json())
//     .then((data) => {
//       const assistantReply = data.reply;
//       addMessage("assistant", assistantReply);
//     })
//     .catch((error) => console.error(error));
// }

// // Attach the handleSendMessage function to the Send button
// document.getElementById("send-button").addEventListener("click", handleSendMessage);

// // Listen for the Enter key press in the user input field
// document.getElementById("user-input").addEventListener("keyup", function (event) {
//   if (event.key === "Enter") {
//     handleSendMessage();
//   }
// });

// // Simulate an initial greeting from the assistant
// setTimeout(() => {
//   const assistantGreeting = "Hello! How can I assist you today?";
//   addMessage("assistant", assistantGreeting);
// }, 1000);
