// REEL PLAYER LOGIC
function openReel(videoUrl, title, price) {
    var modal = document.getElementById('reelModal');
    var video = document.getElementById('fullScreenVideo');
    
    video.src = videoUrl;
    document.getElementById('reelTitle').innerText = title;
    document.getElementById('reelPrice').innerText = '₹' + price;
    
    modal.style.display = 'flex';
    video.play();
}

function closeReel() {
    var modal = document.getElementById('reelModal');
    var video = document.getElementById('fullScreenVideo');
    video.pause();
    modal.style.display = 'none';
}

// SEARCH LOGIC
function searchProducts() {
    console.log("Searching...");
}
