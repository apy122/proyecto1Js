document.addEventListener("DOMContentLoaded", () => {
    crearArticulos(4);
});

function crearArticulos(cantidad) {
    const container = document.getElementById("articles");

    for (let i = 0; i < cantidad; i++) {
        const article = document.createElement("article");
        article.classList.add("articles__article");

        const title = document.createElement("h3");
        title.classList.add("article__title");

        const date = document.createElement("span");
        date.classList.add("article__date");

        const body = document.createElement("p");
        body.classList.add("article__body");

        const button = document.createElement("button");
        button.classList.add("article__btn");

        // Estructura vacía
        article.appendChild(title);
        article.appendChild(date);
        article.appendChild(body);
        article.appendChild(button);

        container.appendChild(article);
    }
}