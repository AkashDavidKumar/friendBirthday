// === PASSWORD UNLOCK ===
const unlockBtn = document.getElementById("unlockBtn");
const unlockInput = document.getElementById("unlockPass");
const unlockStatus = document.getElementById("unlockStatus");

// unlockBtn.addEventListener("click", () => {
//   const password = document.getElementById("unlockPass").value.trim();
//   const unlockStatus = document.getElementById("unlockStatus");

//   if (password === "happy21") {
//     unlockStatus.textContent = "🎉 Password correct! Redirecting...";
//     unlockStatus.style.color = "#00ff7f";

//     setTimeout(() => {
//       window.location.href = "surprise.html";  // ✅ This line redirects to surprise.html
//     }, 1500); // delay to show message before redirect
//   } else {
//     unlockStatus.textContent = "❌ Incorrect password. Try again!";
//     unlockStatus.style.color = "#ff4444";
//   }
// });



// === BUBBLE PHOTO ANIMATION ===
const bubbleContainer = document.getElementById("bubbleContainer");

// List of image paths (use your actual image paths)
const photoList = [
  "assets/images/image1.jpeg",
  "assets/images/image2.jpeg",
  "assets/images/image3.jpeg",
  "assets/images/image4.jpeg",
  "assets/images/image5.jpeg"
];

// Function to create one bubble
function createBubble() {
  const bubble = document.createElement("div");
  bubble.classList.add("bubble");
  bubble.style.left = `${Math.random() * 90}%`;
  bubble.style.backgroundImage = `url(${photoList[Math.floor(Math.random() * photoList.length)]})`;
  bubbleContainer.appendChild(bubble);

  setTimeout(() => {
    bubble.remove();
  }, 15000); // Remove after 15 seconds
}

// Create bubbles every 2.5 seconds
setInterval(createBubble, 2500);
