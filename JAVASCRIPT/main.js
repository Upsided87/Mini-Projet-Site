function masquer(classe) {
    const elements = document.querySelectorAll(classe);
    elements.forEach(element => {
        element.classList.toggle("masque");
        });
    };

