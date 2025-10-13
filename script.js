// Esperamos a que todo el DOM esté cargado para empezar a trabajar
document.addEventListener('DOMContentLoaded', () => {

    /**
     * SCRIPT 1: EFECTO MÁQUINA DE ESCRIBIR AVANZADO (TU IDEA, CORREGIDA)
     * Escribe y borra una lista de palabras en un ciclo infinito.
     */
    const typingElement = document.getElementById('typing-effect');
    if (typingElement) {
        const keywords = ["<Analista>", "<Creativo>", "<Estratega>", "<Curioso>", "<Resolutivo>"];
        let keywordIndex = 0; // Índice para la palabra actual en el array
        let charIndex = 0;    // Índice para el carácter actual de la palabra
        let isDeleting = false;

        function type() {
            const currentWord = keywords[keywordIndex];

            if (isDeleting) {
                // Borrando...
                typingElement.textContent = currentWord.substring(0, charIndex - 1);
                charIndex--;
            } else {
                // Escribiendo...
                typingElement.textContent = currentWord.substring(0, charIndex + 1);
                charIndex++;
            }

            // Lógica de cambio de estado
            if (!isDeleting && charIndex === currentWord.length) {
                // Terminó de escribir, esperar y empezar a borrar
                isDeleting = true;
                setTimeout(type, 2000); // Pausa antes de borrar
                return;
            } else if (isDeleting && charIndex === 0) {
                // Terminó de borrar, pasar a la siguiente palabra
                isDeleting = false;
                keywordIndex = (keywordIndex + 1) % keywords.length; // Ciclo infinito
                setTimeout(type, 500); // Pausa antes de escribir la nueva palabra
                return;
            }

            // Velocidad de escritura/borrado
            const typeSpeed = isDeleting ? 75 : 150;
            setTimeout(type, typeSpeed);
        }
        
        // Iniciar la animación
        type();
    }


    /**
     * SCRIPT 2: EFECTO PARALLAX SUTIL EN EL HEADER
     */
    const parallaxHeader = document.getElementById('parallax-header');
    if (parallaxHeader) {
        window.addEventListener('scroll', () => {
            const scrollPosition = window.pageYOffset;
            parallaxHeader.style.backgroundPositionY = `${scrollPosition * 0.4}px`;
        });
    }

    /**
     * SCRIPT 3: ANIMACIONES AL HACER SCROLL (SCROLL REVEAL)
     */
    const scrollElements = document.querySelectorAll('[data-scroll]');
    const elementInView = (el) => {
        const elementTop = el.getBoundingClientRect().top;
        return elementTop <= (window.innerHeight || document.documentElement.clientHeight);
    };

    const displayScrollElement = (element) => {
        element.classList.add('is-visible');
    };

    const handleScrollAnimation = () => {
        scrollElements.forEach((el) => {
            if (elementInView(el)) {
                displayScrollElement(el);
            }
        });
    }
    
    handleScrollAnimation();
    window.addEventListener('scroll', handleScrollAnimation);
});
