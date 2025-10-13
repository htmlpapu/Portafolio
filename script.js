// Esperamos a que todo el DOM esté cargado para empezar a trabajar
document.addEventListener('DOMContentLoaded', () => {

    /**
     * SCRIPT 1: EFECTO MÁQUINA DE ESCRIBIR (TYPEWRITER)
     * Escribe un texto letra por letra en un elemento específico.
     */
    const typewriterElement = document.getElementById('typewriter');
    if (typewriterElement) {
        const text = '<analista>';
        let index = 0;
        
        function type() {
            if (index < text.length) {
                typewriterElement.textContent += text.charAt(index);
                index++;
                setTimeout(type, 120); // Velocidad de escritura
            }
        }
        
        // Inicia el efecto después de un breve retraso para que el usuario pueda verlo
        setTimeout(type, 500);
    }

    /**
     * SCRIPT 2: EFECTO PARALLAX SUTIL EN EL HEADER
     * Mueve el fondo del header más lento que el scroll para crear profundidad.
     */
    const parallaxHeader = document.getElementById('parallax-header');
    if (parallaxHeader) {
        window.addEventListener('scroll', () => {
            const scrollPosition = window.pageYOffset;
            // El multiplicador (0.4) controla la velocidad del parallax. Más bajo = más lento.
            parallaxHeader.style.backgroundPositionY = `${scrollPosition * 0.4}px`;
        });
    }

    /**
     * SCRIPT 3: ANIMACIONES AL HACER SCROLL (SCROLL REVEAL)
     * Usa IntersectionObserver para añadir una clase a los elementos cuando entran en la pantalla.
     * Es la forma más moderna y eficiente de hacer esto.
     */
    const scrollElements = document.querySelectorAll('[data-scroll]');

    const elementInView = (el, dividend = 1) => {
        const elementTop = el.getBoundingClientRect().top;
        return (
            elementTop <= (window.innerHeight || document.documentElement.clientHeight) / dividend
        );
    };

    const displayScrollElement = (element) => {
        element.classList.add('is-visible');
    };

    const handleScrollAnimation = () => {
        scrollElements.forEach((el) => {
            if (elementInView(el, 1.25)) {
                displayScrollElement(el);
            }
        });
    }
    
    // Ejecuta la función una vez al cargar por si hay elementos ya visibles
    handleScrollAnimation();
    // Y luego la ejecuta cada vez que el usuario hace scroll
    window.addEventListener('scroll', handleScrollAnimation);

});
