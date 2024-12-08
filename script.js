
function shareText() {
    const textToShare = document.getElementById('textToShare').value;
    if (textToShare.trim() !== "") {
        
        localStorage.setItem('sharedText', textToShare);
        alert("Text shared successfully!");
    } else {
        alert("Please enter some text to share.");
    }
}


function displaySharedText() {
    const sharedText = localStorage.getItem('sharedText');
    const displayArea = document.getElementById('sharedTextDisplay');
    
    if (sharedText) {
        displayArea.textContent = sharedText;
    } else {
        displayArea.textContent = "No text received yet.";
    }
}


window.addEventListener('storage', function(event) {
    if (event.key === 'sharedText') {
        displaySharedText();  
    }
});


window.onload = function() {
    displaySharedText();
};
