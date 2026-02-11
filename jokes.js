/* =====================================
   😂 JOKES & PUZZLE ENGINE (100 UNIQUE)
===================================== */

const JOKES_DATA = [

/* ================= EASY PUZZLES ================= */
{ level:"Easy", question:"Aisi kaunsi cheez hai jo paani me girne par bhi geeli nahi hoti?", answer:"Parachhaai (Shadow)" },
{ level:"Easy", question:"Woh kya hai jo tootne par awaaz nahi karta?", answer:"Waada" },
{ level:"Easy", question:"Subah 4 pair, dopahar 2, shaam 3?", answer:"Insaan (Life stages)" },
{ level:"Easy", question:"Aisi kya cheez hai jo aap rakh nahi sakte?", answer:"Waada" },
{ level:"Easy", question:"Ek ghar me 4 diwar, har diwar south ki taraf. Bear ka colour?", answer:"White (North Pole logic)" },
{ level:"Easy", question:"Aisa kya hai jo upar jata hai par neeche nahi aata?", answer:"Umar" },
{ level:"Easy", question:"Aisa kya hai jo sabke paas hai par koi use de nahi sakta?", answer:"Naam" },
{ level:"Easy", question:"Aisa kya hai jo chal sakta hai bina pair ke?", answer:"Hawa" },
{ level:"Easy", question:"Kis cheez ka sir aur poonch hota hai par body nahi?", answer:"Sikka (Coin)" },
{ level:"Easy", question:"Ek minute me kitne seconds hote hain?", answer:"60 aur 1 (Second word bhi minute me aata hai)" },

/* ================= MODERATE PUZZLES ================= */
{ level:"Moderate", question:"Aisi kya cheez hai jo khane se pehle todni padti hai?", answer:"Anda" },
{ level:"Moderate", question:"Ek aadmi bina neend ke 8 din kaise reh sakta hai?", answer:"Woh raat ko sota hai" },
{ level:"Moderate", question:"Woh kya hai jo har waqt aata hai par kabhi pahuchta nahi?", answer:"Kal (Tomorrow)" },
{ level:"Moderate", question:"Main bina muh ke bolta hoon aur bina kaan ke sunta hoon. Main kya hoon?", answer:"Echo" },
{ level:"Moderate", question:"Aisa kya hai jo jitna kheecho utna chhota hota hai?", answer:"Cigarette" },
{ level:"Moderate", question:"Aisi kya cheez hai jo khud khadi nahi reh sakti?", answer:"Seedhi (Ladder)" },
{ level:"Moderate", question:"Aisi kya cheez hai jo khane se badhti hai?", answer:"Bhukh" },
{ level:"Moderate", question:"Woh kya hai jo dikhai nahi deta par mehsoos hota hai?", answer:"Hawa" },
{ level:"Moderate", question:"Ek kamre me 3 billi aur har billi ke 3 bachche. Total kitne pair?", answer:"24" },
{ level:"Moderate", question:"Ek saal me kitne mahine 28 din ke hote hain?", answer:"Sabhi 12" },

/* ================= HARD PUZZLES ================= */
{ level:"Hard", question:"Aisi kya cheez hai jo likhne se badhti hai?", answer:"Gyan" },
{ level:"Hard", question:"Aisa kya hai jo zyada logon ke saath share karne se kam ho jata hai?", answer:"Secret" },
{ level:"Hard", question:"Main bina zinda huye badhta hoon. Main kya hoon?", answer:"Aag" },
{ level:"Hard", question:"Woh kya hai jo jitna nikalo utna bada hota hai?", answer:"Gaddha (Hole)" },
{ level:"Hard", question:"Ek aadmi ke paas 3 topi thi, hawa udaa le gayi. Kitni bachi?", answer:"Jo pehni thi" },
{ level:"Hard", question:"Main bina pair ke chal sakta hoon aur bina pankh ke ud sakta hoon?", answer:"Time" },
{ level:"Hard", question:"Woh kya hai jo tootne ke baad hi kaam aata hai?", answer:"Anda" },
{ level:"Hard", question:"Main ek baar aata hoon minute me, do baar moment me, par thousand me nahi. Main kya hoon?", answer:"Letter M" },
{ level:"Hard", question:"Woh kya hai jo bina muh ke bolta hai aur bina kaan ke sunta hai?", answer:"Echo" },
{ level:"Hard", question:"Main kabhi sota nahi, phir bhi sapne laata hoon?", answer:"Dimag" },

/* ================= FUNNY EASY ================= */
{ level:"Easy", question:"Tum itne cute kyun ho?", answer:"System glitch hai 😜" },
{ level:"Easy", question:"Tumhari smile ka password kya hai?", answer:"Tum 😁" },
{ level:"Easy", question:"Agar tum superhero hote to naam kya hota?", answer:"Captain Cute 😆" },
{ level:"Easy", question:"Tumhari hasi WiFi jaisi kyun hai?", answer:"Sabko connect kar leti hai 😄" },
{ level:"Easy", question:"Agar chocolate bol sakti to kya bolti?", answer:"Mujhe mat khao 😭" },
{ level:"Easy", question:"Aaj ka funny rule kya hai?", answer:"Serious mat ho 😂" },
{ level:"Easy", question:"Tumhari favourite habit?", answer:"Smile karna 😁" },
{ level:"Easy", question:"Tum kaunsi app ho?", answer:"Premium version 💙" },
{ level:"Easy", question:"Tumhara mood ka colour?", answer:"Rainbow 🌈" },
{ level:"Easy", question:"Tumhari speed kya hai?", answer:"Light se tez 😜" },

/* ================= FUNNY MODERATE ================= */
{ level:"Moderate", question:"Agar dimaag ka recharge hota to kitna hota?", answer:"Unlimited plan 😆" },
{ level:"Moderate", question:"Tumhara favourite excuse kya hai?", answer:"Network issue 😄" },
{ level:"Moderate", question:"Agar tum teacher hote to kya padhate?", answer:"Happiness 101 😁" },
{ level:"Moderate", question:"Tumhari smile ka brand name?", answer:"Forever Shine ✨" },
{ level:"Moderate", question:"Agar tum movie hote to genre?", answer:"Rom-Com 😜" },
{ level:"Moderate", question:"Tumhara hidden talent?", answer:"Sabko hasana 😄" },
{ level:"Moderate", question:"Agar tum emoji hote?", answer:"😎" },
{ level:"Moderate", question:"Tumhara battery level?", answer:"Always 100% 🔋" },
{ level:"Moderate", question:"Tum kaunsi dessert ho?", answer:"Sweet surprise 🍰" },
{ level:"Moderate", question:"Tum kaunsi notification ho?", answer:"Important 💌" },

/* ================= FUNNY HARD ================= */
{ level:"Hard", question:"Agar time ruk jaye to kya karoge?", answer:"So jaunga 😴" },
{ level:"Hard", question:"Tumhari life ka background music?", answer:"Non-stop remix 🎶" },
{ level:"Hard", question:"Agar duniya gol hai to log seedhe kyun chalte?", answer:"Balance 😜" },
{ level:"Hard", question:"Tum kaunsi energy pe chalte?", answer:"Drama energy 😂" },
{ level:"Hard", question:"Agar tum invisible ho jao?", answer:"Masti karunga 😆" },
{ level:"Hard", question:"Agar gravity band ho jaye?", answer:"Sab ud jayenge 😄" },
{ level:"Hard", question:"Agar tum time travel karo?", answer:"Homework avoid 😜" },
{ level:"Hard", question:"Tumhara secret weapon?", answer:"Smile 😁" },
{ level:"Hard", question:"Agar tum villain ho?", answer:"Cute villain 😎" },
{ level:"Hard", question:"Agar phone bolne lage?", answer:"Privacy gayi 😆" }

];

/* ================= ENGINE ================= */

let usedIndexes = [];

function startJokesEngine() {

  const content = document.getElementById("module-content");

  if (usedIndexes.length === JOKES_DATA.length) {
    usedIndexes = [];
  }

  let randomIndex;

  do {
    randomIndex = Math.floor(Math.random() * JOKES_DATA.length);
  } while (usedIndexes.includes(randomIndex));

  usedIndexes.push(randomIndex);

  const item = JOKES_DATA[randomIndex];

  let timeLeft = 30;

  content.innerHTML = `
    <h2>😂 Level: ${item.level}</h2>
    <h3>${item.question}</h3>
    <h4>Time Left: <span id="timer">30</span>s</h4>
    <div id="answer-box"></div>
  `;

  const timerEl = document.getElementById("timer");

  const timer = setInterval(() => {
    timeLeft--;
    timerEl.textContent = timeLeft;

    if (timeLeft <= 0) {
      clearInterval(timer);
      document.getElementById("answer-box").innerHTML = `
        <h3>Answer: ${item.answer}</h3>
        <button onclick="startJokesEngine()">Next 🔁</button>
      `;
    }
  }, 1000);
 }
