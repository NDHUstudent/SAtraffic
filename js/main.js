// RWD START
var status = "quiz";
mobileChange();
window.onresize = function()
{
  mobileChange();
}

function mobileChange()
{
  var pMatchMedia = window.matchMedia("(max-width: 768px)");
  if (status == "correct")
  {
    correctChange(pMatchMedia);
  }
  if (status == "quiz")
  {
    nextChange(pMatchMedia);
  }
  if (pMatchMedia.matches)
  {
    //小於768時執行的js
    document.getElementById("answer").classList.remove('w3-display-right');
    document.getElementById("answer").classList.remove('ansPC');
    document.getElementById("quiz").classList.remove('w3-display-middle');
    document.getElementById("safooter").classList.remove('bottomleft');
  }
  else
  {
    //大於768時執行的js
    document.getElementById("answer").classList.add('w3-display-right');
    document.getElementById("answer").classList.add('ansPC');
    document.getElementById("quiz").classList.add('w3-display-middle');
    document.getElementById("safooter").classList.add('bottomleft');
    document.getElementById("answerBlock").classList.remove('w3-teal');
  }
}

function correctChange(pMatchMedia)
{
  if (pMatchMedia.matches)
  {
    //小於768時執行的js
    scrollTo(0, 0);
    document.getElementById("answerBlock").classList.add('w3-teal');
    document.getElementById("quiz").classList.remove('w3-display-left');
    document.getElementById("QS").classList.remove('w3-animate-right');
    document.getElementById("QB").classList.remove('w3-animate-right');
    document.getElementById("quiz").style.width = '100%';
    document.getElementById("quiz").style.marginLeft = '0';
    document.getElementById("quiz").style.marginRight = '0';
  }
  else
  {
    //大於768時執行的js
    document.getElementById("quiz").classList.remove('w3-display-middle');
    document.getElementById("quiz").classList.add('w3-display-left');
    document.getElementById("quiz").style.width = '50%';
    document.getElementById("quiz").style.marginLeft = '2em';
    document.getElementById("quiz").style.marginRight = '2em';
    document.getElementById("QS").classList.remove('w3-animate-top');
    document.getElementById("QS").classList.add('w3-animate-right');
    document.getElementById("QH").classList.remove('w3-animate-top');
    document.getElementById("QH").classList.add('w3-animate-right');
    document.getElementById("QB").classList.remove('w3-animate-top');
    document.getElementById("QB").classList.add('w3-animate-right');
  }
}

function nextChange(pMatchMedia)
{
  if (pMatchMedia.matches)
  {
    //小於768時執行的js
    document.getElementById("answerBlock").classList.remove('w3-teal');
  }
  else
  {
    //大於768時執行的js
    document.getElementById("quiz").classList.remove('w3-display-left');
    document.getElementById("quiz").classList.add('w3-display-middle');
    document.getElementById("QS").classList.remove('w3-animate-right');
    document.getElementById("QS").classList.add('w3-animate-left');
    document.getElementById("QH").classList.remove('w3-animate-right');
    document.getElementById("QH").classList.add('w3-animate-left');
    document.getElementById("QB").classList.remove('w3-animate-right');
    document.getElementById("QB").classList.add('w3-animate-left');
  }
}

// RWD END


var n = 1;

function quiz(a)
{
  mobileChange();
  status = "quiz";
  var situation, options;
  switch (a)
  {
    case 1:
      situation = '在白天的時候看到對向車輛有開燈，在不是遠光燈的情況下，代表他做了什麼？';
      options = ['他可能是個三寶，我要黑特他！', '他睡糊塗了，提醒他記得關燈省電，日行一善。', '代表他有良好行車習慣，有落實全時點燈。'];
      break;
    case 2:
      situation = '東華大學外環車道常有彎道，如果有突發狀況必須減速時我應該';
      options = ['盡可能的讓機車垂直於路面，然後再煞車', '平順且逐漸地煞車，但不要施加與機車垂直於路面時候相同煞車力道', '以上皆是'];
      break;
    case 3:
      situation = '東華校內許多路口在地上設有停車再開的標示，如果行車經過時我應該？';
      options = [ '查看左右無來車後即可通過', '確實將車輛停下，並確實卻人左右無來車後快速通過', '以上皆是'];
      break;
    case 4:
      situation = '東華大學因腹地廣大，有許多不同的交通工具被使用，如果今天在路口遇到行人、腳踏車正要穿越時，我應該？';
      options = ['車輛暫停，禮讓行人', '加速通過，以防車輛回堵', '緩慢通過，禮讓行人', '以上皆是'];
      break;
    case 5:
      situation = '當跟朋友在東華校園或是志學街騎乘機車或是腳踏車時，哪個行為會造成別人的困擾！？';
      options = ['與前車保持適當安全距離', '全時點燈', '並排騎車'];
      break;
    case 6:
      situation = '終於來到志學街吃飯了，看到左邊有位子要趕快停車，我要怎麼做才不會被黑特？';
      options = ['打左轉方向燈，趕快轉彎', '先打左轉方向燈，然後向右靠，等待沒車後轉彎', '先打左轉方向燈，等待沒車後轉彎'];
      break;
    case 7:
      situation = '當你開心再外環道騎車時，發現對向車輛跟前方車輛一直轉頭看你，同時你在儀表板發現藍色的燈亮的時候，代表機車怎麼了？';
      options = ['機油黑拉，該換機油了啦', '代表你可能在他們眼裡是三寶', '你的大燈沒有亮，他們人很好想提醒你<3'];
      break;
    case 8:
      situation = '如果在騎車時狗狗很興奮朝你飛奔過來，除了尖叫我應該要？';
      options = ['停止直到動物失去興趣', '從動物旁邊繞過', '慢慢接近動物，然後加快速度離開'];
      break;
    case 9:
      situation = '當前車太慢你想要超車時需要注意什麼？';
      options = ['快速駛離前方駕駛盲區，愈快愈好', '超車時應在速限內以及可行駛區域內', '超車時應保持安全的跟車距離', '以上皆是'];
      break;
    case 10:
      situation = '到了假日要跟朋友一起騎機車出遊的團體騎乘哪些是應注意的呢？';
      options = ['團體騎乘不保持一直線騎乘而是前後交錯排列', '當要超車時，要注意交通狀況與迎面而來的車流。儘管前面的騎士安全超車了，也不代表您也能安全超車。', '以上皆是'];
      break;
  }

  document.getElementById("situation").innerHTML = situation;
  document.getElementById("optionA").innerHTML = options[0];
  document.getElementById("optionB").innerHTML = options[1];
  document.getElementById("optionC").innerHTML = options[2];

  if (options.length == 4)
  {
    document.getElementById("btnD").style.display = "block";
    document.getElementById("optionD").innerHTML = options[3];
  }
  else
  {
    document.getElementById("btnD").style.display = "none";
  }
}

function wrong(a, b)
{
  btnWrongSingle(b);

  var reason;

  switch (a)
  {
    case 1:
      switch (b)
      {
        case 'A':
          reason = '等等等，不要衝動，你要是這麼PO出來被嘴三寶的是誰我就不保證喔，全時點燈是近年不論政府民間都大力推崇的行車習慣，應該確實落實。';
          break;
        case 'B':
          reason = '如果想要日行一善，請好好的把你的日行燈打開，確實給我落實全時點燈啦^^';
          break;
      }
      break;

    case 2:
      switch (b)
      {
        case 'A':
          reason = '此答案不完全正確，條件不允許很可能會打滑';
          break;
        case 'B':
          reason = '此答案不完全正確';
          break;
      }
      break;

    case 3:
      switch (b)
      {
        case 'A':
          reason = '行經無號誌路口時應確認左右有無來車，但在設有停車再開的標示時應確實將車輛停妥';
          break;
        case 'C':
          reason = '雖然好像看起來都可以，但請再思考一下';
          break;
      }
      break;

    case 4:
      switch (b)
      {
        case 'B':
          reason = '如果加速通過的話可能會被警察開單，甚至發生車禍導致行人重傷，不要貪圖一時之快，毀了兩個家庭，爸爸麻麻會難過的';
          break;
        case 'C':
          reason = '雖然已經減慢速度，但是仍有車禍發生的可能，被警察抓到，這個月又要吃土了';
          break;
        case 'D':
          reason = '再回去看一次題目啦！';
          break;
      }
      break;

    case 5:
      switch (b)
      {
        case 'A':
          reason = '騎車時跟前車保持適當安全距離，才有辦法在緊急狀況發生時有時間反應，怎麼會造成別人ㄉ困擾呢？';
          break;
        case 'B':
          reason = '全時點燈可以讓來往車輛看得更清楚，降低車禍的發生，只要不要開啟遠光燈，都不會造成他人的困擾喔，第一題沒認真看ヽ(#`Д´)ﾉ';
          break;
      }
      break;

    case 6:
      switch (b)
      {
        case 'A':
          reason = '千萬不要打了方向燈馬上轉彎，這樣真的很三寶，打了燈不代表有絕對路權，不過該注意的不只這個';
          break;
        case 'B':
          reason = '千萬千萬不能這麼做，你都打左轉燈了大家一定會往右通行，如果這時還靠右鐵定會發生車禍，千萬不要當三寶，不過不能做的不只這個';
          break;
      }
      break;

    case 7:
      switch (b)
      {
        case 'A':
          reason = '欸欸欸，機油燈不長這個樣子啦，罰你回去看使用手冊。';
          break;
        case 'C':
          reason = '放心你的大燈確實有亮，但是太亮了……再想想。';
          break;
      }
      break;

    case 8:
      switch (b)
      {
        case 'A':
          reason = '不對不對，這樣很危險';
          break;
        case 'B':
          reason = '這樣有撞上牠的風險，對你對牠都很危險';
          break;
      }
      break;

    case 9:
      switch (b)
      {
        case 'A':
          reason = '這個答案不錯，但是再想想';
          break;
        case 'B':
          reason = '沒錯，如有雙黃線請不要超車，不過只有這個嗎？';
          break;
        case 'C':
          reason = '保持安全車距非常重要，但是其他答案呢？';
          break;
      }
      break;

    case 10:
      switch (b)
      {
        case 'A':
          reason = '這是維持隊伍緊密排列又能夠維持安全車距的最佳方式。可是還有其他答案，再試一次';
          break;
        case 'B':
          reason = '沒錯，每一次路況都不同，應該時時注意。不過只有這樣嗎？';
          break;
      }
      break;
  }

  alert('錯囉！\n' + reason);
}

function check(a, b)
{
  if (a == 1 && b == 'C')
  {
    correct(1, b);
  }
  else if (a == 2 && b == 'C')
  {
    correct(2, b);
  }
  else if (a == 3 && b == 'B')
  {
    correct(3, b);
  }
  else if (a == 4 && b == 'A')
  {
    correct(4, b);
  }
  else if (a == 5 && b == 'C')
  {
    correct(5, b);
  }
  else if (a == 6 && b == 'C')
  {
    correct(6, b);
  }
  else if (a == 7 && b == 'B')
  {
    correct(7, b);
  }
  else if (a == 8 && b == 'C')
  {
    correct(8, b);
  }
  else if (a == 9 && b == 'D')
  {
    correct(9, b);
  }
  else if (a == 10 && b == 'C')
  {
    correct(10, b);
  }
  else
  {
    wrong(a, b);
  }
}

function correct(a, b)
{
  status = "correct";
  mobileChange();
  btnWrong('A');
  btnWrong('B');
  btnWrong('C');
  btnWrong('D');
  btnCorrect(b);
  document.getElementById("answer").style.display = "block";
  document.getElementById("next").disabled = false;
  document.getElementById("next").style.display = "block";

  var explanation = document.getElementById('explanation');
  explanation.innerHTML = '';
  switch (a)
  {
    case 1:

      var p1 = document.createElement('p');
      var img = document.createElement('img');
      img.src = 'img/87.jpg';
      img.style.width = '100%';
      p1.appendChild(img);
      p1.appendChild(document.createTextNode('據研究顯示，白天行車開亮前燈，可引起對向來車注意並提高警覺，不但減少12.4%的車禍，並降低24.6%的車禍死亡率。台灣自2017年1月1日起便要求新款式機車強制配備一發動引擎就會自動開啟的晝行燈或頭燈，否則不得出廠領牌。全時點燈不但是台灣的規範，更是世界的趨勢，歐盟早在2011年2月7日起，所有小轎車、小貨車的新車型都必須配備DRL，台灣已經落後6年了！'));
      p1.appendChild(document.createElement('br'));
      p1.appendChild(document.createElement('br'));
      p1.appendChild(document.createTextNode('不論機車、汽車或是腳踏車，都應該落實全時點燈，讓來車不分晝夜都可以清楚的看到你的位置，尤其是腳踏車應該裝設前後車燈，保護自己也保護他人，做一個有良好行車習慣的用路人，不要成為別人口中的三寶。'));
      p1.appendChild(document.createElement('br'));
      p1.appendChild(document.createElement('br'));
      p1.appendChild(document.createTextNode('另外舊款機車雖然沒有啟動引擎就開啟日行燈得設計，但也要在發動引擎後開啟大頭燈，落實全時點燈。惟應該在啟動引擎後再開啟大燈，才可以減少電瓶的磨損。'));
      explanation.appendChild(p1);
      break;

    case 2:
      var p1 = document.createElement('p');
      var img = document.createElement('img');
      img.src = 'img/1.jpg';
      img.style.width = '100%';
      p1.appendChild(img);
      p1.appendChild(document.createElement('br'));
      p1.appendChild(document.createTextNode('彎中煞車是非常危險的事情，當傾角越大的時候，輪胎失去循跡力的可能性就越大。避免危險，入彎前車速不宜過快。'));

      var p2 = document.createElement('p');
      p2.appendChild(document.createTextNode('為了要能夠快速且安全的在彎中停下來，根據道路以及交通狀況，您應該盡可能的讓機車垂直於路面，然後再煞車。如果條件不允許，應平順且逐漸地煞車，但不要施加與機車垂直於路面時候相同的煞車力道。當您變慢的時候，您可以減小您的傾角，當可以用於煞車的循跡力變多的時候，您就可以使用更多的煞車，如此當機車停下來的時候，應該會是垂直於路面，手把回正的狀態。'));

      explanation.appendChild(p1);
      explanation.appendChild(p2);
      break;

    case 3:
      var p1 = document.createElement('p');
      var img = document.createElement('img');
      img.src = 'img/4.jpg';
      img.style.width = '100%';
      p1.appendChild(img);
      p1.appendChild(document.createElement('br'));
      p1.appendChild(document.createTextNode('遇到「停」標記或是停車線，請先在那邊停車，然後再向前，在交叉路口與您車道會合的地方，再次停下。在那個地方將您的身體向前傾來查看建築物、停著的車子或是草叢，看看能不能看到有其他車流過來，在您在觀察的時候，確保您的前輪還沒有進入橫向路面。'));

      var p2 = document.createElement('p');
      p2.appendChild(document.createTextNode('根據台灣交通法規：看到「停」的標誌，一定要停車，不遵守將開罰600元到1800元罰單。'));

      explanation.appendChild(p1);
      explanation.appendChild(p2);
      break;

    case 4:
      var p1 = document.createElement('p');
      var img = document.createElement('img');
      img.src = 'img/15.jpg';
      img.style.width = '100%';
      p1.appendChild(img);
      p1.appendChild(document.createElement('br'));
      p1.appendChild(document.createTextNode('遇到行人穿越時，應該讓車輛暫停，禮讓行人，車輛不暫停禮讓行人先行通過，處1,200-3,600元罰鍰，禮讓行人是行車禮儀更是法規規範，不要為了那幾秒，跟錢包過不去啊！'));

      explanation.appendChild(p1);
      break;

    case 5:
      var p1 = document.createElement('p');
      var img = document.createElement('img');
      img.src = 'img/24.jpg';
      img.style.width = '100%';
      p1.appendChild(img);
      p1.appendChild(document.createElement('br'));
      p1.appendChild(document.createTextNode('不論行駛在東華校內或是志學街時，都不應該併排騎車，並排騎車容易造成危險發生車禍，並且腳踏車應確實裝設前後車燈，機車應該全時點燈，請大家好好珍惜生命阿。'));

      explanation.appendChild(p1);
      break;

    case 6:
      var p1 = document.createElement('p');
      var img = document.createElement('img');
      img.src = 'img/22.jpg';
      img.style.width = '100%';
      p1.appendChild(img);
      p1.appendChild(document.createElement('br'));
      p1.appendChild(document.createTextNode('如果要左轉停車，應該先打方向燈後減速，待沒有車輛後再轉彎，千萬不要打了方向燈馬上轉彎，也不要先打左轉方向燈，然後向右靠，這些行為都很危險。'));

      var p2 = document.createElement('p');
      p2.appendChild(document.createTextNode('根據交通法規：'));
      p2.appendChild(document.createElement('br'));
      p2.appendChild(document.createTextNode('轉彎時，至少距離交岔路口30公尺前即應顯示方向燈或手勢，如果不依規定使用燈光，將會依違反道路交通管理處罰條例42條，處新臺幣1,200~3,600元的罰鍰。'));

      explanation.appendChild(p1);
      explanation.appendChild(p2);
      break;

    case 7:
      var p1 = document.createElement('p');
      var img = document.createElement('img');
      img.src = 'img/7.png';
      img.style.width = '100%';
      p1.appendChild(img);
      p1.appendChild(document.createElement('br'));
      p1.appendChild(document.createTextNode('這個藍色的小惡魔就是惡名昭彰的遠光燈。'));
      p1.appendChild(document.createElement('br'));
      p1.appendChild(document.createTextNode('遠光燈光線較為集中，亮點大，照射距離遠，適合於光源不足的路段使用，但是，若是於會車時使用遠光燈，可能造成對向車道用路人瞬間致盲、對距離的感知力下降等等危害。依道路交通安全使用規則第109條 第一項第六款，於夜間會車或同向前方一百公尺內有車輛行駛時，不得使用遠光燈。'));


      explanation.appendChild(p1);
      break;

    case 8:
      var p1 = document.createElement('p');
      var img = document.createElement('img');
      img.src = 'img/21.jpg';
      img.style.width = '100%';
      p1.appendChild(img);
      p1.appendChild(document.createElement('br'));
      p1.appendChild(document.createTextNode('當然你要盡你所能來避免撞到動物。但是，如果您在車流當中的話，請保持在您的車道當中。撞到小東西的危險性遠比撞到大的東西例如說汽車來的低。'));

      var p2 = document.createElement('p');
      p2.appendChild(document.createTextNode('機車看來對狗很有吸引力。如果您被狗追趕，降低速度並且慢慢的接近狗。當您接近它的時候，加速並且把它拋在後頭。不要踢動物。'));

      explanation.appendChild(p1);
      explanation.appendChild(p2);
      break;

    case 9:
      var p1 = document.createElement('p');
      var img = document.createElement('img');
      img.src = 'img/23.jpg';
      img.style.width = '100%';
      p1.appendChild(img);
      p1.appendChild(document.createElement('br'));
      p1.appendChild(document.createTextNode('根據道路交通管理處罰條例第 47 條 汽車駕駛人（包括機車駕駛人）超車時，有下列情形之一者，處新臺幣一千二百元以上二千四百元以下罰鍰：'));
      p1.appendChild(document.createElement('br'));
      p1.appendChild(document.createTextNode('三、在前行車之「右側」超車，或超車時未保持適當之間隔，或未行至安全距離即行駛入原行路線。'));

      var p2 = document.createElement('p');
      p2.appendChild(document.createTextNode('由此可知「超車」時由右側超一定是違規的，而實際上外側車道也是發生最多意外狀況的地方。且切記超車應以切換車道或是保持足夠安全距離才叫超車；若在同車道內超車沒有保持安全距離，當意外發生時會沒有足夠的反應時間來避免。'));

      explanation.appendChild(p1);
      explanation.appendChild(p2);
      break;

    case 10:
      var p1 = document.createElement('p');
      var img = document.createElement('img');
      img.src = 'img/20.png';
      img.style.width = '100%';
      p1.appendChild(img);
      p1.appendChild(document.createElement('br'));
      p1.appendChild(document.createTextNode('在出發之前，先舉行騎士會議，討論路線、騎行段落長度，休息站、加油站、吃飯和住宿地點。確保每個人都知道路線。這樣，如果有人分離，他或她就不必急於找尋或是在錯誤的地方轉彎。選擇一名領隊騎士和一名殿後騎士。這些人應該是隊伍中最有經驗的騎士。領隊騎士應該預先考慮道路、交通或天氣狀況的變化，並提前發出信號，以便傳達到其他騎士身上。殿後者是隊伍中的最後一名騎士，並為隊伍設定騎乘節奏。將無經驗的騎士置在領隊的後面。這可以確保他們不必追趕隊伍，而更有經驗的騎手可以從後面看緊他們。團隊騎乘最重要的規則是：不準競爭、不準超越其他騎士或是跟車。如果有騎士想要騎快，讓他往前騎到會合點等待。'));

      explanation.appendChild(p1);
      break;
  }
}

function next()
{
  status = "quiz";
  if (n != 10)
  {
    document.getElementById("next").disabled = true;
    quiz(n += 1);
    mobileChange();
    document.getElementById("quiz").style.width = null;
    document.getElementById("quiz").style.marginLeft = null;
    document.getElementById("quiz").style.marginRight = null;
    document.getElementById("answer").style.display = "none";
    document.getElementById("next").style.display = "none";
    btnReset('A');
    btnReset('B');
    btnReset('C');
    btnReset('D');
    if (n == 10)
    {
      document.getElementById('next').innerHTML = '完成';
    }
  }
  else
  {
    document.getElementById("answer").style.display = "none";
    document.getElementById("next").style.display = "none";
    document.getElementById('answerBlock').style.display = 'none';
    document.getElementById('quiz').style.display = "none";
    document.getElementById('feedback').style.display = 'block';
  }
}

function btnReset(b)
{
  var btn = "btn" + b;
  document.getElementById(btn).classList.add("w3-pale-green");
  document.getElementById(btn).classList.add("w3-hover-blue-grey");
  document.getElementById(btn).classList.remove("w3-pale-red");
  document.getElementById(btn).classList.remove("w3-gray");
}

function btnWrongSingle(b)
{
  var btn = "btn" + b;
  document.getElementById(btn).classList.remove("w3-pale-green");
  document.getElementById(btn).classList.remove("w3-hover-blue-grey");
  document.getElementById(btn).classList.add("w3-pale-red");
}

function btnWrong(b)
{
  var btn = "btn" + b;
  document.getElementById(btn).classList.remove("w3-pale-green");
  document.getElementById(btn).classList.remove("w3-pale-red");
  document.getElementById(btn).classList.remove("w3-hover-blue-grey");
  document.getElementById(btn).classList.add("w3-gray");
}

function btnCorrect(b)
{
  var btn = "btn" + b;
  document.getElementById(btn).classList.add("w3-lime");
  document.getElementById(btn).classList.remove("w3-pale-green");
  document.getElementById(btn).classList.remove("w3-gray");
  document.getElementById(btn).classList.remove("w3-pale-red");
  document.getElementById(btn).classList.remove("w3-hover-blue-grey");
}
