function toggleChat() {
    const chatBody = document.getElementById('chat-body');
    const chatFooter = document.getElementById('chat-footer');
    const toggleBtn = document.querySelector('.toggle-btn');

    if (chatBody.style.display === 'none') {
        chatBody.style.display = 'block';
        chatFooter.style.display = 'flex';
        toggleBtn.textContent = '✖';
    } else {
        chatBody.style.display = 'none';
        chatFooter.style.display = 'none';
        toggleBtn.textContent = '▼';
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
        userMessage.textContent = userInput.value;
        chatBody.appendChild(userMessage);

        const botMessage = document.createElement('div');
        botMessage.className = 'bot-message';
        botMessage.textContent = 'You said: ' + userInput.value;
        chatBody.appendChild(botMessage);

        userInput.value = '';
        chatBody.scrollTop = chatBody.scrollHeight;
    }
}

// Initialize chat container display
document.addEventListener('DOMContentLoaded', () => {
    document.querySelector('.chat-container').style.display = 'flex';
});