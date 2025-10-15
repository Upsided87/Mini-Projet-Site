function masquer(x) {
    const matches = document.querySelectorAll(x);
    matches.forEach(element => {
        if (element.style.display === "none") {
            element.style.display = "table-row";
        } else {
            element.style.display = "none";
        }
    });
}
