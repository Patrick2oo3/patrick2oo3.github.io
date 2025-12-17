const messages = [
    "Wishing you a season filled with warm moments and cherished memories. Merry Christmas and a brilliant 2026!",
    "May your holidays sparkle with joy and your New Year be full of new adventures. Cheers to 2026!",
    "Sending you love, peace, and laughter this festive season. May 2026 be your best year yet!",
    "May the magic of Christmas fill your heart, and may the New Year bring endless possibilities.",
    "Warmest thoughts and best wishes for a wonderful Christmas and a Happy New Year!"
];

window.onload = () => {
    const urlParams = new URLSearchParams(window.location.search);
    const friendName = urlParams.get('name');

    if (friendName) {
        const displaySection = document.getElementById('greeting-display');
        displaySection.classList.remove('hidden');
        
        document.getElementById('display-name').innerText = `Merry Christmas, ${friendName}! 🎄`;
        
        const randomMsg = messages[Math.floor(Math.random() * messages.length)];
        document.getElementById('holiday-message').innerText = randomMsg;
        
        displaySection.scrollIntoView({ behavior: 'smooth' });
    }
};

function generateLink() {
    const nameInput = document.getElementById('friend-name').value;
    if (!nameInput) return alert("Please enter a name");

    const newUrl = `${window.location.origin}${window.location.pathname}?name=${encodeURIComponent(nameInput)}`;
    window.location.href = newUrl;
}

function copyLink() {
    navigator.clipboard.writeText(window.location.href);
    alert("Link copied to clipboard!");
}

function shareWhatsApp() {
    const text = `I created a special holiday greeting for you! Check it out here: ${window.location.href}`;
    window.open(`https://wa.me/?text=${encodeURIComponent(text)}`, '_blank');
}

function handleContact(event) {
    event.preventDefault();
    const status = document.getElementById('form-status');
    status.innerText = "Thank you! Your message has been sent.";
    status.classList.remove('hidden');
    document.getElementById('contact-form').reset();

}

function createSnowflake() {
    const snowflake = document.createElement('div');
    snowflake.classList.add('snowflake');
    snowflake.innerHTML = '❄'; // You can also use '❅' or '❆'
    
    // Randomize position and appearance
    snowflake.style.left = Math.random() * 100 + 'vw';
    snowflake.style.animationDuration = Math.random() * 3 + 7 + 's'; // Between 7-10s
    snowflake.style.opacity = Math.random();
    snowflake.style.fontSize = Math.random() * 10 + 10 + 'px';
    
    document.body.appendChild(snowflake);
    
    // Remove snowflake after it falls to keep the site fast
    setTimeout(() => {
        snowflake.remove();
    }, 10000);
}

// Create a new snowflake every 300ms
setInterval(createSnowflake, 300);

function summonSanta() {
    // Create the container if it doesn't exist
    let container = document.querySelector('.santa-container');
    if (!container) {
        container = document.createElement('div');
        container.className = 'santa-container';
        container.innerHTML = '<span class="santa-sleigh">🎅🛷🦌</span>';
        document.body.appendChild(container);
    }

    // Reset and start animation
    container.classList.remove('animate-santa');
    void container.offsetWidth; // Trigger reflow to restart animation
    container.classList.add('animate-santa');
}

// Fly Santa across the screen immediately on load...
setTimeout(summonSanta, 3000); 

// ...and then every 2 minutes
setInterval(summonSanta, 120000);

function updateCountdown() {
    // Set the target date to Jan 1, 2026
    const nextYear = new Date('January 1, 2026 00:00:00').getTime();
    const now = new Date().getTime();
    const diff = nextYear - now;

    // If we have reached 2026, stop the timer
    if (diff <= 0) {
        document.getElementById('countdown-container').innerHTML = "<h2>Happy New Year 2026! 🎆</h2>";
        return;
    }

    // Calculations
    const d = Math.floor(diff / (1000 * 60 * 60 * 24));
    const h = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const m = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const s = Math.floor((diff % (1000 * 60)) / 1000);

    // Update the DOM
    document.getElementById('days').innerText = d.toString().padStart(2, '0');
    document.getElementById('hours').innerText = h.toString().padStart(2, '0');
    document.getElementById('minutes').innerText = m.toString().padStart(2, '0');
    document.getElementById('seconds').innerText = s.toString().padStart(2, '0');
}

// RUN IMMEDIATELY AND THEN EVERY SECOND
updateCountdown(); 
setInterval(updateCountdown, 1000);
