document.addEventListener("DOMContentLoaded", function () {
  const backBtn = document.getElementById("backBtn");
   const themeBtn = document.getElementById("themeToggle"); // ✅ FIX 1
  

  // DARK MODE
  themeBtn.onclick = function () {
    document.body.classList.toggle("dark");

    themeBtn.innerText =
      document.body.classList.contains("dark") ? "☀️" : "🌙";
  };

  // SHOW BACK BUTTON HELPER
function showBack() {
  backBtn.style.display = "block";
}

// HIDE BACK BUTTON
function hideBack() {
  backBtn.style.display = "none";
}
hideBack();

  // LOGIN
  document.getElementById("loginBtn").onclick = function () {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    if (email === "" || password === "") {
      alert("please enter email and password");
    } else {
      document.getElementById("loginSection").style.display = "none";
      document.getElementById("setupSection").style.display = "block";
       showBack();
    }
  };

  // SIGNUP
  document.getElementById("signupBtn").onclick = function () {
    document.getElementById("loginSection").style.display = "none";
    document.getElementById("setupSection").style.display = "block";
     showBack();
  };

  // SAVE PROFILE
  document.getElementById("saveProfileBtn").onclick = function () {
    const name = document.getElementById("nameInput").value;
    const mood = document.getElementById("favMood").value;
    const activity = document.getElementById("favActivity").value;

    if (name === "" || mood === "") {
      alert("please fill details");
      return;
    }

    document.getElementById("userName").innerText = name;
    document.getElementById("topMood").innerText = mood;

    document.querySelector(".vibe span").innerText =
      `${mood} energy with a love for ${activity || "good vibes"}`;

    document.getElementById("setupSection").style.display = "none";
    document.getElementById("landing").style.display = "block";
    document.getElementById("profileCard").style.display = "block";
  };

  // 🎵 MOOD DATA
  const moodData = {
  happy: {
    songs: [
      { id: "ZbZSe6N_BXs", title: "Happy - Pharrell Williams", thumbnail: "https://img.youtube.com/vi/ZbZSe6N_BXs/0.jpg" },
      { id: "OPf0YbXqDm0", title: "Uptown Funk", thumbnail: "https://img.youtube.com/vi/OPf0YbXqDm0/0.jpg" },
      { id: "e-ORhEE9VVg", title: "Blank Space", thumbnail: "https://img.youtube.com/vi/e-ORhEE9VVg/0.jpg" }
    ],
    activities: ["dance 💃", "go out", "celebrate"],
    quote: "Stay happy always 😊"
  },

  sad: {
    songs: [
      { id: "hLQl3WQQoQ0", title: "Someone Like You", thumbnail: "https://img.youtube.com/vi/hLQl3WQQoQ0/0.jpg" },
      { id: "RgKAFK5djSk", title: "See You Again", thumbnail: "https://img.youtube.com/vi/RgKAFK5djSk/0.jpg" },
      { id: "2Vv-BfVoq4g", title: "Perfect", thumbnail: "https://img.youtube.com/vi/2Vv-BfVoq4g/0.jpg" }
    ],
    activities: ["rest", "walk 🌿"],
    quote: "This too shall pass 💙"
  },

  stressed: {
    songs: [
      { id: "2OEL4P1Rz04", title: "Weightless (Relax)", thumbnail: "https://img.youtube.com/vi/2OEL4P1Rz04/0.jpg" },
      { id: "lFcSrYw-ARY", title: "Calming Nature Music", thumbnail: "https://img.youtube.com/vi/lFcSrYw-ARY/0.jpg" },
      { id: "4HVqC4zEPDc", title: "Stress Relief Music", thumbnail: "https://img.youtube.com/vi/4HVqC4zEPDc/0.jpg" }
    ],
    activities: ["meditate 🧘", "deep breathing", "listen to calm music"],
    quote: "Relax, you got this 😌"
  },

  bored: {
    songs: [
      { id: "kXYiU_JCYtU", title: "Numb - Linkin Park", thumbnail: "https://img.youtube.com/vi/kXYiU_JCYtU/0.jpg" },
      { id: "3JZ4pnNtyxQ", title: "Shape of You", thumbnail: "https://img.youtube.com/vi/3JZ4pnNtyxQ/0.jpg" },
      { id: "fRh_vgS2dFE", title: "Sorry - Justin Bieber", thumbnail: "https://img.youtube.com/vi/fRh_vgS2dFE/0.jpg" }
    ],
    activities: ["watch movie 🎬", "call friend", "try something new 🎨"],
    quote: "Try something new 🚀"
  }
};

  // 🎬 SHOW MOOD
  function showMood(mood) {
    const data = moodData[mood];

    document.getElementById("resultSection").classList.remove("hidden");

    const container = document.getElementById("videoContainer");
    container.innerHTML = "";

    data.songs.forEach(song => {
      const card = document.createElement("div");
      card.className = "music-card";

      card.innerHTML = `
        <img src="${song.thumbnail}" class="thumb"/>
        <p>${song.title}</p>
        <button onclick="playVideo('${song.id}')">▶ Watch on YouTube</button>
      `;

      container.appendChild(card);
      showBack();
    });

    document.getElementById("activityContainer").innerText = data.activities.join(", ");
    document.getElementById("quoteContainer").innerText = data.quote;
  }

  // ✅ ALL BUTTONS INSIDE (IMPORTANT)
  document.getElementById("happyBtn").onclick = () => showMood("happy");
  document.getElementById("sadBtn").onclick = () => showMood("sad");
  document.getElementById("stressedBtn").onclick = () => showMood("stressed");
  document.getElementById("boredBtn").onclick = () => showMood("bored");

  backBtn.onclick = function () {

  const login = document.getElementById("loginSection");
  const setup = document.getElementById("setupSection");
  const landing = document.getElementById("landing");
  const result = document.getElementById("resultSection");
  const visit = document.getElementById("visitSection");
  const feedback = document.getElementById("feedbackSection");

  // SETUP → LOGIN
  if (setup.style.display === "block") {
    setup.style.display = "none";
    login.style.display = "block";
    hideBack();
    return;
  }

  // LANDING (MOODS) → SETUP
  if (landing.style.display === "block") {
    landing.style.display = "none";
    setup.style.display = "block";
    showBack();
    return;
  }

  // RESULT (VIBES) → LANDING
  if (!result.classList.contains("hidden")) {
    result.classList.add("hidden");
    landing.style.display = "block";
    showBack();
    return;
  }

  // VISIT → RESULT
  if (!visit.classList.contains("hidden")) {
    visit.classList.add("hidden");
    result.classList.remove("hidden");
    showBack();
    return;
  }

  // FEEDBACK → LANDING
  if (!feedback.classList.contains("hidden")) {
    feedback.classList.add("hidden");
    landing.style.display = "block";
    showBack();
    return;
  }
};
 

  
// ✅ NAVIGATION (CORRECT PLACE)



const visitSection = document.getElementById("visitSection");


function showVibesArea() {
  document.getElementById("landing").style.display = "none";
  document.getElementById("loginSection").style.display = "none";
  document.getElementById("setupSection").style.display = "none";
  document.getElementById("profileCard").style.display = "none";

  document.getElementById("resultSection").classList.remove("hidden");
  visitSection.classList.add("hidden");
  document.getElementById("feedbackSection").classList.add("hidden");

  showBack();
}
document.getElementById("navMoods").onclick = function () {
  document.getElementById("landing").style.display = "block";
  document.getElementById("resultSection").classList.add("hidden");
  document.getElementById("loginSection").style.display = "none";
  document.getElementById("setupSection").style.display = "none";
  document.getElementById("profileCard").style.display = "none";
  document.getElementById("feedbackSection").classList.add("hidden");
  visitSection.classList.add("hidden");
  hideBack();
};

document.getElementById("navVibes").onclick = function () {
  showVibesArea();
};

document.getElementById("navVisit").onclick = function () {
  showVibesArea();
  visitSection.classList.remove("hidden");
  visitSection.scrollIntoView({ behavior: "smooth", block: "start" });
};

document.getElementById("navLogin").onclick = function () {
  document.getElementById("loginSection").style.display = "block";
  document.getElementById("landing").style.display = "none";
  document.getElementById("resultSection").classList.add("hidden");
  document.getElementById("setupSection").style.display = "none";
  document.getElementById("profileCard").style.display = "none";
  document.getElementById("feedbackSection").classList.add("hidden");
  visitSection.classList.add("hidden");
  hideBack();
};
document.getElementById("navFeedback").onclick = function () {
  document.getElementById("landing").style.display = "none";
  document.getElementById("loginSection").style.display = "none";
  document.getElementById("setupSection").style.display = "none";
  document.getElementById("profileCard").style.display = "none";
  document.getElementById("resultSection").classList.add("hidden");

  visitSection.classList.add("hidden");

  document.getElementById("feedbackSection").classList.remove("hidden");

  document.getElementById("feedbackSection").scrollIntoView({
    behavior: "smooth"
  });
};


});

// ▶ PLAY VIDEO (OUTSIDE is OK)
function playVideo(id) {
  const url = `https://www.youtube.com/watch?v=${id}`;
  window.open(url, "_blank"); // opens in new tab
}

function shareSite() {
  const url = "https://tanishkamapare01.github.io/vibe_music_repo/";

  if (navigator.share) {
    navigator.share({
      title: "Vibe — Mood Music & Activity Recommender",
      text: "Check out this cool mood-based music website!",
      url: url
    });
  } else {
    navigator.clipboard.writeText(url);
    alert("Link copied to clipboard!");
  }
}

// ✅ FEEDBACK SYSTEM

const feedbackSection = document.getElementById("feedbackSection");
const feedbackAck = document.getElementById("feedbackAck");
const feedbackIssueBox = document.getElementById("feedbackIssueBox");
const feedbackButtons = document.getElementById("feedbackButtons");

// 👍 YES CLICK
document.getElementById("likeBtn").onclick = function () {
  feedbackButtons.classList.add("hidden");   // hide buttons
  feedbackIssueBox.classList.add("hidden");  // hide textbox

  feedbackAck.innerText = "Thanks for the love 💜";
  feedbackAck.classList.remove("hidden");
};

// 👎 NOT REALLY CLICK
document.getElementById("dislikeBtn").onclick = function () {
  feedbackButtons.classList.add("hidden");   // hide buttons

  feedbackIssueBox.classList.remove("hidden"); // show textbox
  feedbackAck.classList.add("hidden");
};

document.getElementById("sendIssueBtn").onclick = function () {
  const txt = document.getElementById("feedbackIssue").value;

  if (txt === "") {
    alert("Please write your issue first");
    return;
  }

  feedbackIssueBox.classList.add("hidden"); // hide textbox

  feedbackAck.innerText = "Thanks, we got your feedback 🌸";
  feedbackAck.classList.remove("hidden");
};


