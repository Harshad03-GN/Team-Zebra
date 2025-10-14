// Create firework effect
function createFirework() {
  const firework = document.createElement('div');
  firework.className = 'firework';
  firework.style.left = Math.random() * 100 + 'vw';
  firework.style.top = Math.random() * 50 + 'vh';
  firework.style.transform = `scale(${Math.random() * 0.5 + 0.5})`;
  
  const colors = ['#FFD700', '#FF6B6B', '#FFA500', '#FF1493', '#00FF00'];
  firework.style.background = colors[Math.floor(Math.random() * colors.length)];
  
  document.querySelector('.fireworks').appendChild(firework);
  
  setTimeout(() => {
    createSparkles(firework);
    firework.remove();
  }, 1000);
}

function createSparkles(firework) {
  const rect = firework.getBoundingClientRect();
  for (let i = 0; i < 20; i++) {
    const sparkle = document.createElement('div');
    sparkle.className = 'sparkle';
    sparkle.style.left = rect.left + 'px';
    sparkle.style.top = rect.top + 'px';
    sparkle.style.background = firework.style.background;
    
    const angle = (Math.PI * 2 * i) / 20;
    const velocity = 10;
    const vx = Math.cos(angle) * velocity;
    const vy = Math.sin(angle) * velocity;
    
    sparkle.style.transform = `translate(${vx * 10}px, ${vy * 10}px)`;
    
    document.querySelector('.sparkles').appendChild(sparkle);
    setTimeout(() => sparkle.remove(), 1000);
  }
}

// Create fireworks periodically
setInterval(createFirework, 2000);

// Add glowing effect to diyas
const diyas = document.querySelectorAll('.diya');
diyas.forEach(diya => {
  setInterval(() => {
    const glow = Math.random() * 10 + 10;
    diya.querySelector('.flame').style.boxShadow = `0 0 ${glow}px ${glow/2}px rgba(255, 215, 0, 0.8)`;
  }, 100);
});

// ========== Mobile Menu Toggle ==========
const menuToggle = document.getElementById("menu-toggle");
const dropdown = document.querySelector(".dropdown");

menuToggle.addEventListener("change", () => {
  if (menuToggle.checked) {
    dropdown.style.display = "flex";
  } else {
    dropdown.style.display = "none";
  }
});

// ========== Optional: Close dropdown on link click (for better UX) ==========
const dropdownLinks = document.querySelectorAll(".dropdown a");
dropdownLinks.forEach(link => {
  link.addEventListener("click", () => {
    menuToggle.checked = false;
    dropdown.style.display = "none";
  });
});

// ========== Optional: Fade-in animation on scroll ==========
const fadeElements = document.querySelectorAll(".fade-in");

const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("fade-in-active");
      observer.unobserve(entry.target); // Animate once
    }
  });
}, {
  threshold: 0.1
});

fadeElements.forEach(el => observer.observe(el));