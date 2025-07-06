//articles creation
export function articles(){
    let articlesContainer = document.querySelector(".layout__articles");
    let post=[
        {
            title: "articulo 1",
            date: "10/12/2023",
            body: "Este es el contenido del articulo 1"
        },
          {
            title: "articulo 2",
            date: "11/12/2023",
            body: "Este es el contenido del articulo 2"
        },
          {
            title: "articulo 3",
            date: "12/12/2023",
            body: "Este es el contenido del articulo 3"
        },
          {
            title: "articulo 4",
            date: "13/12/2023",
            body: "Este es el contenido del articulo 4"
        },
         {
            title: "articulo 5",
            date: "14/12/2023",
            body: "Este es el contenido del articulo 5"
        },
    ]

    post.forEach(article =>{
        articlesContainer.innerHTML += `
        <article class="layout__article">
            <h3 class="article__title">${article.title}</h3>
            <span class="article__date">${article.date}</span>
            <p class="article__body">${article.body}</p>
            <a href="#" class="article__btn">leer mas</a>
        </article>
    `;
    });
}