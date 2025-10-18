// const targetDate = new Date(new Date().getTime() + 15000).getTime(); // 15 sec
const targetDate = new Date("2025-10-21T06:00:00+05:30").getTime();
function updateCountdown() {
  const now = new Date().getTime();
  const gap = targetDate - now;

  if (gap <= 0) {
    document.getElementById("countdown").textContent = "🎉 It's time!";
    document.getElementById("unlockSection").classList.remove("hidden");
    clearInterval(countdownInterval);
    
    unlockBtn.addEventListener("click", () => {
  const password = document.getElementById("unlockPass").value.trim();
  const unlockStatus = document.getElementById("unlockStatus");

  if (password === "123") {
    unlockStatus.textContent = "🎉 Password correct! Redirecting...";
    unlockStatus.style.color = "#00ff7f";

    setTimeout(() => {
      window.location.href = "surprise.html";  // ✅ This line redirects to surprise.html
    }, 1500); // delay to show message before redirect
  } else {
    unlockStatus.textContent = "❌ Incorrect password. Try again!";
    unlockStatus.style.color = "#ff4444";
  }
});
    return;
  }

  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  const days = Math.floor(gap / day);
  const hours = Math.floor((gap % day) / hour);
  const minutes = Math.floor((gap % hour) / minute);
  const seconds = Math.floor((gap % minute) / second);

  // Combine into one line:
  document.getElementById("countdown").textContent =
    `${days} days ${hours.toString().padStart(2, '0')} hours ${minutes.toString().padStart(2, '0')} minutes ${seconds.toString().padStart(2, '0')} seconds`;
}

const countdownInterval = setInterval(updateCountdown, 1000);
