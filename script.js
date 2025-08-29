// const chatId = '-4984874266';
// const tokenId = '8229591264:AAEH2f0iZeJ11lCXW48xwi8NaYhkns0u6qA';
// const API_URL = `https://api.telegram.org/bot${tokenId}/sendMessage`;

// const formSend = document.getElementById('formsend');
// const nama = document.getElementById('name');
// const wife = document.getElementById('mywife');

// const tampilkan = document.getElementById('showmywife');

  const BOT_TOKEN = "8229591264:AAEH2f0iZeJ11lCXW48xwi8NaYhkns0u6qA";   // token dari BotFather
  const CHAT_ID  = "-4984874266";      // chat id kamu / grup
  const API_URL  = `https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`;

  document.querySelector(".formsend").addEventListener("submit", function(e) {
    e.preventDefault();

    // Ambil data dari input
    const name   = document.getElementById("name").value;
    const mywife = document.getElementById("mywife").value;

    // Format pesan
    const text = `💌 Pesan Form:\n\n👤 Nama saya ${name}, dan\n ${mywife} orang yang saya sukai❤️`;

    // Kirim ke Telegram
    fetch(API_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        chat_id: CHAT_ID,
        text: text,
        parse_mode: "Markdown"
      })
    })
    .then(res => res.json())
    .then(data => {
        const name = document.getElementById('name');
        const wife = document.getElementById('mywife');
      if (data.ok) {
        document.getElementById('showmywife').innerHTML = name.value + " <br><span style='color:white;font-size:14px;'>❤️</span><br> " + wife.value;
        document.querySelector(".formsend").reset();
      } else {
        document.getElementById('showmywife').innerHTML = name.value + " <br><span style='color:white;font-size:14px;'>❤️</span><br> " + wife.value;
      }
    })
    .catch(err => {
      alert("⚠️ Error: " + err);
    });
  });
// const btnSend = document.getElementById('kirim');
// btnSend.addEventListener('submit', function(){

//     const name   = document.getElementById("name");
//     const mywife = document.getElementById("mywife");

//     tampilkan.innerHTML = nama.value + " <br><span style='color:white;font-size:14px;'>dan</span><br> " + wife.value;
// })