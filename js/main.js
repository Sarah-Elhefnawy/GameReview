import getGamesDetails from "./details.js"


const options = {
    method: 'GET',
    headers: {
        'x-rapidapi-key': '0e71d8bb92msh53cb24572954337p1bc127jsn8a9a1df0f694',
        'x-rapidapi-host': 'free-to-play-games-database.p.rapidapi.com'
    }
};


async function getGames(id="mmorpg") {
    var response = await fetch(`https://free-to-play-games-database.p.rapidapi.com/api/games?category=${id}`,options);
    var data = await response.json();
    console.log(data);
    display(data);
    // inLoading();
}
getGames();

var btns = document.querySelectorAll(".nav-link")
for (var btn = 0; btn < btns.length; btn++) {
    btns[btn].addEventListener("click",function(e){
        var targ = e.target.innerHTML;
        getGames(targ)
    })
}

function display(arr){
    var cartona = "";
    for (var i = 0; i < arr.length; i++) {
        cartona += `
                <div class="col-md-3">
                    <div class="card text-white">
                        <img src="${arr[i].thumbnail}" class="card-img-top p-2 w-100" alt="...">
                        <div class="card-body px-2">
                          <div class="card-badge px-2 d-flex justify-content-between"> 
                            <p class="card-text text-white">${arr[i].title}</p> 
                            <span class="badge text-bg-primary w-10">Free</span>
                          </div>
                          <p class="card-desc text-secondary text-center overflow-hidden">${arr[i].short_description}</p>
                        </div>
                        <hr>
                        <div class="card-badge px-2 py-2 d-flex justify-content-between">
                        <span class="badge">${arr[i].genre}</span>
                        <span class="badge">${arr[i].platform}</span>
                        </div>
                    </div>
                </div>`;
                document.getElementById("row-body").innerHTML=cartona
    }
                
    var cards = document.querySelectorAll(".card")
    cards.forEach((card, index) => {
        card.addEventListener('click', (e) => {
            getGamesDetails(arr[index].id)
        });
    });
}


// async function getGamesDetails(id) {
//     var response = await fetch(`https://free-to-play-games-database.p.rapidapi.com/api/game?id=${id}`,options);
//     var data = await response.json();
//     console.log(data);
//     displayDetails(data);
//     // inLoading();
// }

// function displayDetails(data){
//     var cartona = "";
//         cartona += `
//         <div class="col-4">
//         <img src="${data.thumbnail}" alt="">
//         </div>
//         <div class="col-8 position-relative">
//         <button type="button" class="btn-close position-absolute top-0 end-0" aria-label="Close"></button>
//                 <h3>Title: ${data.title}</h3>
//                 <p>Category: <span class="badge bg-primary">${data.genre}</span></p>
//                 <p>Platform: <span class="badge bg-primary">${data.platform}</span></p>
//                 <p>Status: <span class="badge bg-primary">${data.status}</span></p>
//                 <p>${data.description}</p>
//                 <button id="details-btn" class="bg-transparent border-warning-subtle rounded text-white mb-5">Show Game</button>
 
//             </div>`;
//     document.getElementById("row-body").innerHTML=cartona

//     document.querySelector('.btn-close').addEventListener('click', function() {
//         window.location.href = "index.html";
//     });
// }


// function inLoading(){
//     document.getElementById('loading').classList.add('d-none');
//     document.body.classList.remove('overflow-hidden')
// }


