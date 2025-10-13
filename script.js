document.addEventListener('DOMContentLoaded', function() {
    const textToType = 'Lic. Comercio Exterior y Negociación Internacional';
    const typingElement = document.getElementById('typing-analyst');
    let index = 0;

    function typeAnalyst() {
        if (index < textToType.length) {
            typingElement.textContent += textToType.charAt(index);
            index++;
            setTimeout(typeAnalyst, 150); // Velocidad de escritura
        }
    }
    typeAnalyst();
});

