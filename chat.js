function toggleChat() {
    const chatContainer = document.getElementById('chat-container');
    const openBtn = document.getElementById('open-chatbot');
    const closeBtn = document.getElementById('close-button');

    if (chatContainer.style.display === 'none' || chatContainer.style.display === '') {
        chatContainer.style.display = 'block';
        openBtn.style.display = 'none';
        closeBtn.style.display = 'block';
    } else {
        chatContainer.style.display = 'none';
        openBtn.style.display = 'block';
        closeBtn.style.display = 'none';
    }
}

function handleKeyPress(event) {
    if (event.key === 'Enter') {
        sendMessage();
    }
}

function sendMessage() {
    const userInput = document.getElementById('user-input');
    const chatBody = document.getElementById('chat-body');

    if (userInput.value.trim() !== '') {
        const userMessage = document.createElement('div');
        userMessage.className = 'user-message';
        userMessage.textContent = `${getCurrentTime()} - ${userInput.value}`;
        chatBody.appendChild(userMessage);

        const botMessage = document.createElement('div');
        botMessage.className = 'bot-message';
        botMessage.innerHTML = `${getCurrentTime()} - ${getBotResponse(userInput.value)}`;
        chatBody.appendChild(botMessage);

        userInput.value = '';
        chatBody.scrollTop = chatBody.scrollHeight;
    }
}

function clearChat() {
    const chatBody = document.getElementById('chat-body');
    chatBody.innerHTML = '';
}

function getCurrentTime() {
    const now = new Date();
    return now.toLocaleTimeString();
}

function getBotResponse(userInput) {
    userInput = userInput.toLowerCase(); // Convert user input to lowercase for case-insensitive matching

    if (userInput.includes('hello') || userInput.includes('hi')) {
        return "Hello! How can I assist you today?";
    } else if (userInput.includes('what are you?')) {
        return "I'm just a bot, but I'm here to help you!";
    } else if (userInput.includes('what is your name')) {
        return "I'm Chatbot created by Ogotlhe, your virtual assistant.";
    } else if (userInput.includes('help')) {
        return "Sure, I'm here to help! What do you need assistance with?";
    } else if (userInput.includes('bye')) {
        return "Goodbye! Have a great day!";
    } else if (userInput.includes('projects') || userInput.includes('work')) {
        return `
            Here are some of my works:
            1. Travel Website:  <a href="Travel/index.html">View Project</a>

            2. Tic-Tac-Toe Game:  <a href="index2.html">View Project</a>

            3. Real-Estate Website:  <a href="Onyx/index.html">View Project</a>
        `;
    } else {
        return "I'm not sure I understand. Can you please elaborate?";
    }
}

// Initialize chat container display and add event listener to the button
document.addEventListener('DOMContentLoaded', () => {
    const chatContainer = document.getElementById('chat-container');
    chatContainer.style.display = 'none'; // Ensure chat container is hidden initially

    const openBtn = document.getElementById('open-chatbot');
    openBtn.addEventListener('click', toggleChat); // Add event listener to the open button

    const closeBtn = document.getElementById('close-button');
    closeBtn.addEventListener('click', toggleChat); // Add event listener to the close button

    document.getElementById('send-button').addEventListener('click', sendMessage);
    document.getElementById('clear-button').addEventListener('click', clearChat);
});
