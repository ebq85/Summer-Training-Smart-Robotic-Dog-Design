<?php

header("Content-Type: application/json; charset=UTF-8");

$message = $_POST['message'] ?? '';

$message = trim($message);

if ($message === '') {
    echo json_encode([
        "reply" => "من فضلك اكتب رسالة أولاً 😊"
    ], JSON_UNESCAPED_UNICODE);
    exit;
}


// الردود العربية
if (mb_strpos($message, 'السلام') !== false) {

    $reply = "وعليكم السلام ورحمة الله وبركاته! 🤍 كيف أقدر أساعدك؟";

} elseif (
    mb_strpos($message, 'مرحبا') !== false ||
    mb_strpos($message, 'اهلا') !== false ||
    mb_strpos($message, 'أهلا') !== false
) {

    $reply = "أهلاً وسهلاً! 👋✨ يسعدني التحدث معك.";

} elseif (
    mb_strpos($message, 'كيف حالك') !== false ||
    mb_strpos($message, 'شلونك') !== false
) {

    $reply = "أنا بخير والحمدلله 🤖💗 شكراً لسؤالك!";

} elseif (
    mb_strpos($message, 'اسمك') !== false
) {

    $reply = "أنا المساعد الصوتي 🤖✨";

} elseif (
    mb_strpos($message, 'شكرا') !== false ||
    mb_strpos($message, 'شكراً') !== false
) {

    $reply = "العفو! 🤍 دائماً في خدمتك.";

}


// English
elseif (
    stripos($message, 'hello') !== false ||
    stripos($message, 'hi') !== false
) {

    $reply = "Hello! 👋✨ How can I help you?";

} elseif (
    stripos($message, 'how are you') !== false
) {

    $reply = "I'm doing great! 🤖💗 Thanks for asking.";

} elseif (
    stripos($message, 'your name') !== false
) {

    $reply = "I'm your Smart Voice Assistant 🤖✨";

} elseif (
    stripos($message, 'thank') !== false
) {

    $reply = "You're welcome! 🤍";

} else {

    $reply = "عذراً، لم أفهم سؤالك بعد 😅 حاول تسألني بطريقة أخرى.";

}


echo json_encode([
    "reply" => $reply
], JSON_UNESCAPED_UNICODE);

?>