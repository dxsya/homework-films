let card = document.querySelector(".film-cards");
console.log(card);
fetch("https://www.omdbapi.com/?apikey=b6003d8a&s=All")
    .then((res) => res.json())
    .then((info) => {
        info.Search.forEach((element) => {
            console.log(element.Title);
            card.innerHTML += `<div class="film-card"><img src ='${element.Poster}'> <strong>${element.Title}</strong> <p>${element.Year}</p></div>`;
        });
    });
