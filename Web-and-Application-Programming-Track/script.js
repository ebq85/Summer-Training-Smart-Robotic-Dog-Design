const chatBox = document.getElementById("chat-box");
const messageInput = document.getElementById("message-input");
const sendBtn = document.getElementById("send-btn");
const micBtn = document.getElementById("mic-btn");

// إضافة رسالة إلى المحادثة
function addMessage(text, type) {
    const message = document.createElement("div");

    message.classList.add("message");

    if (type === "user") {
        message.classList.add("user-message");
    } else {
        message.classList.add("bot-message");
    }

    message.innerHTML = text;

    chatBox.appendChild(message);

    chatBox.scrollTop = chatBox.scrollHeight;
}


// إرسال الرسالة
async function sendMessage() {

    const message = messageInput.value.trim();

    if (message === "") {
        return;
    }

    // عرض رسالة المستخدم
    addMessage(message, "user");

    // تفريغ مربع الكتابة
    messageInput.value = "";

    try {

        const response = await fetch("chatbot.php", {
            method: "POST",
            headers: {
                "Content-Type": "application/x-www-form-urlencoded"
            },
            body: "message=" + encodeURIComponent(message)
        });

        const data = await response.json();

        // عرض رد البوت
        addMessage(data.reply, "bot");

    } catch (error) {

        addMessage(
            "عذراً، حدث خطأ في الاتصال بالسيرفر 😅",
            "bot"
        );

        console.error(error);
    }
}


// زر الإرسال
sendBtn.addEventListener("click", sendMessage);


// إرسال عند الضغط على Enter
messageInput.addEventListener("keydown", function(event) {

    if (event.key === "Enter") {
        sendMessage();
    }

});


// 🎤 الميكروفون
const SpeechRecognition =
    window.SpeechRecognition ||
    window.webkitSpeechRecognition;

if (SpeechRecognition) {

    const recognition = new SpeechRecognition();

    recognition.lang = "ar-SA";
    recognition.continuous = false;
    recognition.interimResults = false;

    micBtn.addEventListener("click", function() {

        recognition.start();

        micBtn.textContent = "🔴";

    });


    recognition.onresult = function(event) {

        const text =
            event.results[0][0].transcript;

        messageInput.value = text;

        micBtn.textContent = "🎤";

    };


    recognition.onerror = function() {

        micBtn.textContent = "🎤";

    };


    recognition.onend = function() {

        micBtn.textContent = "🎤";

    };

} else {

    micBtn.addEventListener("click", function() {

        alert("المتصفح لا يدعم التعرف على الصوت.");

    });

}