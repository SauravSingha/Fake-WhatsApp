const sendBtn = document.getElementById("send-btn");
const receiveBtn = document.getElementById("rec-btn");
const chatArea = document.getElementsByClassName("chat-area")[0];
const message = document.getElementById("message-sender");

const phoneTime= document.getElementById("phone-time")

const bobbyHomeChat = document.getElementById("bobby-home-chat")
const anshuHomeChat = document.getElementById("anshu-home-chat")
const anmolHomeChat = document.getElementById("anmol-home-chat")

const bobbyHomeTime = document.getElementById("bobby-home-time")
const anmolHomeTime = document.getElementById("anmol-home-time")
const anshuHomeTime = document.getElementById("anshu-home-time")

function addLeadingZero(number) {
    return (number < 10 ? '0' : '') + number;
}

function getCurrentTime() {
    var currentDate = new Date();
    var hours = currentDate.getHours();
    var minutes = currentDate.getMinutes();
    var ampm = hours >= 12 ? 'pm' : 'am';
    hours = hours % 12;
    hours = hours ? hours : 12; // Handle midnight (0 hours)
    return hours + ':' + addLeadingZero(minutes) + ' ' + ampm;
}

function phoneTimeSetter() {
    phoneTime.innerText = getCurrentTime()
    setTimeout(phoneTimeSetter, 1000);
}

phoneTimeSetter();

function createMessageElement(content, className) {
    const messageElement = document.createElement('div');
    messageElement.textContent = content;
    messageElement.classList.add(className);

    const timeStampSpan = document.createElement("span");
    timeStampSpan.className = "time-stamp";

    const currentTime = getCurrentTime();

    const timeElement = document.createElement("p");
    timeElement.textContent = currentTime;

    timeStampSpan.appendChild(timeElement);
    messageElement.appendChild(timeStampSpan);
    return messageElement;
}

function sendMessage() {
    if (!message.value) {
        return;
    }
    const messageElement = createMessageElement(message.value, 'sent-chat');
    chatArea.appendChild(messageElement);
    bobbyHomeChat.innerText = message.value
    bobbyHomeTime.innerText = getCurrentTime()
    message.value = "";
}

function receiveMessage() {
    if (!message.value) {
        return;
    }
    const messageElement = createMessageElement(message.value, 'received-chat');
    chatArea.appendChild(messageElement);
    bobbyHomeChat.innerText = message.value
    bobbyHomeTime.innerText = getCurrentTime()
    message.value = "";
}

sendBtn.addEventListener('click', sendMessage);
receiveBtn.addEventListener('click', receiveMessage);

message.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        sendMessage();
    }
});

message.addEventListener('keydown', function(event) {
    if (event.key === 'Shift'){
        if (!message.value){
        }
        else{
            receiveMessage()
        }
    }
});


const maindiv = document.getElementById('home-page')
const anmolbar = document.getElementById('anmol-bar')
const bobbybar = document.getElementById('bobby-bar')
const anshubar = document.getElementById('anshu-bar')
const anmolchat = document.getElementById('anmol-chat')
const anshuchat = document.getElementById('anshu-chat')
const bobbychat = document.getElementById('bobby-chat')

const backbtns = document.getElementsByClassName('chat-back')

for (let i = 0; i < backbtns.length; i++) {
    const backbtn = backbtns[i];
    backbtn.addEventListener('click', () => {
        maindiv.style.display = 'block';
        anmolchat.style.display = 'none';
        bobbychat.style.display = 'none';
        anshuchat.style.display = 'none';
    });
}

anmolbar.addEventListener('click', () => {
    maindiv.style.display = 'none';
    anshuchat.style.display = 'none';
    bobbychat.style.display = 'none';
    anmolchat.style.display = 'block';
    console.log("hello")
});

anshubar.addEventListener('click', () => {
    maindiv.style.display = 'none';
    anmolchat.style.display = 'none';
    bobbychat.style.display = 'none';
    anshuchat.style.display = 'block';
});

bobbybar.addEventListener('click', () => {
    maindiv.style.display = 'none';
    anmolchat.style.display = 'none';
    bobbychat.style.display = 'block';
    anshuchat.style.display = 'none';
});


// Anmol Chat Section
const anmolSendBtn = document.getElementById("anmol-send-btn");
const anmolReceiveBtn = document.getElementById("anmol-rec-btn");
const anmolChatArea = document.getElementById("anmol-chat-area");
const anmolMessage = document.getElementById("anmol-message-sender");

anmolSendBtn.addEventListener('click', sendAnmolMessage);
anmolReceiveBtn.addEventListener('click', receiveAnmolMessage);

function sendAnmolMessage() {
    if (!anmolMessage.value) {
        return;
    }
    const messageElement = createMessageElement(anmolMessage.value, 'sent-chat');
    anmolChatArea.appendChild(messageElement);
    anmolHomeChat.innerText = anmolMessage.value
    anmolHomeTime.innerText = getCurrentTime()
    anmolMessage.value = "";
}

function receiveAnmolMessage() {
    if (!anmolMessage.value) {
        return;
    }
    const messageElement = createMessageElement(anmolMessage.value, 'received-chat');
    anmolChatArea.appendChild(messageElement);
    anmolHomeChat.innerText = anmolMessage.value
    anmolHomeTime.innerText = getCurrentTime()
    anmolMessage.value = "";
}

anmolMessage.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        console.log("Hello")
        sendAnmolMessage();
    }
});

anmolMessage.addEventListener('keydown', function(event) {
    if (event.key === 'Shift'){
        if (!message.value){
        }
        else{
            receiveAnmolMessage()
        }
    }
});


const anshuSendBtn = document.getElementById("anshu-send-btn");
const anshuReceiveBtn = document.getElementById("anshu-rec-btn");
const anshuChatArea = document.getElementById("anshu-chat-area");
const anshuMessage = document.getElementById("anshu-message-sender");

anshuSendBtn.addEventListener('click', sendAnshuMessage);
anshuReceiveBtn.addEventListener('click', receiveAnshuMessage);

function sendAnshuMessage() {
    if (!anshuMessage.value) {
        return;
    }
    const messageElement = createMessageElement(anshuMessage.value, 'sent-chat');
    anshuChatArea.appendChild(messageElement);
    anshuHomeChat.innerText = anshuMessage.value
    anshuHomeTime.innerText = getCurrentTime()
    anshuMessage.value = "";
}

function receiveAnshuMessage() {
    if (!anshuMessage.value) {
        return;
    }
    const messageElement = createMessageElement(anshuMessage.value, 'received-chat');
    anshuChatArea.appendChild(messageElement);
    anshuHomeChat.innerText = anshuMessage.value
    anshuHomeTime.innerText = getCurrentTime()
    anshuMessage.value = "";
}

anshuMessage.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        sendAnshuMessage();
    }
});

anshuMessage.addEventListener('keydown', function(event) {
    if (event.key === 'Shift'){
        if (!message.value){
        }
        else{
            receiveAnshuMessage()
        }
    }
});