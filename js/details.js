const options = {
    method: 'GET',
    headers: {
        'x-rapidapi-key': '0e71d8bb92msh53cb24572954337p1bc127jsn8a9a1df0f694',
        'x-rapidapi-host': 'free-to-play-games-database.p.rapidapi.com'
    }
};
export default async function getGamesDetails(id) {
    var response = await fetch(`https://free-to-play-games-database.p.rapidapi.com/api/game?id=${id}`,options);
    var data = await response.json();
    console.log(data);
    displayDetails(data);
    // inLoading();
}

function displayDetails(data){
    var cartona = "";
        cartona += `
                <div class="col-4">
                <img src="${data.thumbnail}" alt="">
            </div>
            <div class="col-8">
                <h3 class="d-inline-block">Title: ${data.title}</h3>
                <button type="button" class="btn-close d-inline-block float-end" aria-label="Close"></button>
                <p>Category: <span class="badge bg-primary">${data.genre}</span></p>
                <p>Platform: <span class="badge bg-primary">${data.platform}</span></p>
                <p>Status: <span class="badge bg-primary">${data.status}</span></p>
                <p>${data.description}</p>
                <button id="details-btn" class="btn btn-primary">Show Game</button>
 
            </div>`;
    document.getElementById("row-body").innerHTML=cartona

    document.querySelector('.btn-close').addEventListener('click', function() {
        window.location.href = "index.html";
    });
}
    