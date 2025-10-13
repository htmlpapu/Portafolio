document.addEventListener('DOMContentLoaded', function() {
    const keywords = [
        "Data-Driven.",
        "Creative.",
        "Analyst.",
        "Artist.",
        "Problem Solver.",
        "Storyteller."
    ];
    let i = 0;
    let j = 0;
    let currentWord = "";
    let isDeleting = false;
    const typingElement = document.getElementById('typing-effect');

    function type() {
        if (i === keywords.length) {
            i = 0;
        }
        currentWord = keywords[i];

        if (isDeleting) {
            typingElement.textContent = currentWord.substring(0, j - 1);
            j--;
            if (j === 0) {
                isDeleting = false;
                i++;
            }
        } else {
            typingElement.textContent = currentWord.substring(0, j + 1);
            j++;
            if (j === currentWord.length) {
                isDeleting = true;
            }
        }
        
        const typeSpeed = isDeleting ? 75 : 150;
        const delay = j === currentWord.length ? 2000 : typeSpeed;
        
        setTimeout(type, delay);
    }

    type();
});
