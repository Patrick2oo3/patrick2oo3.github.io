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