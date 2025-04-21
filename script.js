
function generateDiary() {
  const outputs = [
    "今日はぽかぽか陽気☀️お外歩いてたら猫がにゃーんて声かけてくれて、癒された〜🐱 12:00〜20:00までいます♪",
    "ちょっと肌寒いけど、元気に出勤してます💪💗今日も新規様1000円引きキャンペーン中だからぜひ💨",
    "昨日パチンコのうまい棒で2万溶けたのに今日また行きそうな自分がこわい😂でもお兄さんと話せたら癒されるかも？w",
    "Xで見た限界ギャルの投稿まじで笑ったｗ TikTokでもバズってるの見た〜📱 #限界ギャル",
    "春のにおいがする🌸今日はゆるふわモードで癒し届けます☺️よかったら構ってね♪"
  ];
  const randomIndex = Math.floor(Math.random() * outputs.length);
  document.getElementById("diaryOutput").innerText = outputs[randomIndex];
}
