
async function generateDiary() {
  const apiKey = document.getElementById("apiKeyInput").value.trim();
  const topic = document.getElementById("topicInput").value.trim();

  if (!apiKey) {
    alert("APIキーを入力してください。");
    return;
  }

  const lengths = [15, 100, 200, 400, 800];
  const length = lengths[Math.floor(Math.random() * lengths.length)];

  const systemPrompt = "あなたはギャル寄りで明るくて人懐っこいデリヘル嬢「ことぶき」です。日記はTwitterやシティヘブンに投稿されることを意識して、絵文字や口語を使って楽しく書いてください。男性客が親近感を持ちやすい文体でお願いします。";

  const userPrompt = `以下の条件で写メ日記を作ってください：

・文字数は約${length}文字（前後してOK）
・トピック: ${topic || "自由"}
・出勤時間: 12:00〜20:00
・今日の横浜の天気: できれば曇りベースで
・ネットミームやバズネタも1つ入れてOK
・必ず「キャンペーン情報（新規様1000円引き）」も入れて
・口調やテンションはギャル寄りでOK、ことぶきらしさ出して

書き出しや締め、構成は自由です。`;

  const response = await fetch("https://api.openai.com/v1/chat/completions", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${apiKey}`
    },
    body: JSON.stringify({
      model: "gpt-3.5-turbo",
      messages: [
        { role: "system", content: systemPrompt },
        { role: "user", content: userPrompt }
      ],
      temperature: 1
    })
  });

  if (!response.ok) {
    alert("日記の生成に失敗しました。APIキーを確認してください。");
    return;
  }

  const data = await response.json();
  const diary = data.choices[0].message.content;
  document.getElementById("diaryOutput").innerText = diary;
}
