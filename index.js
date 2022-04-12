const searchBar = document.querySelector('#search-bar--input')
const moveItemContainer = document.querySelector('.movie-grid')

const apiFetch = (searchBarTyped) => fetch('http://www.omdbapi.com/?s=' + searchBarTyped + '&apikey=df700428')
  .then(response => response.json())
  .then(data => {
    let html = ""
    if (data.Response === 'False') {
      return
    }
    console.log(data);
    data.Search.forEach(element => {
      html += `

        <div class="movie-grid--item">
                
                <div class="item--img">
                    <img src="${element.Poster}">
                </div>

                <div class="item--content">

                    <div class="item-title">
                        <h4>${element.Title}</h4>
                        <p class="item--score">⭐6.1</p>
                    </div>
                    <div class="item--data">
                        <p>164 min</p>
                        <p>Action, Drama, Sci-fi</p>
                        <a href="#"><img src="img/plus-icon.svg"> Watchlist</a>
                    </div>
                    <div class="item--desc">
                        <p>A blade runner must pursue and terminate four replicants who stole a ship in space, and have returned to Earth to find their creator. A blade runner must pursue and terminate four replicants who stole a ship in space, and have returned to Earth to find their creator.A blade runner must pursue and terminate four replicants who stole a ship in space, and have returned to Earth to find their creator.A blade runner must pursue and terminate four replicants who stole a ship in space, and have returned to Earth to find their creator.</p>
                    </div>

                </div> 

            
            </div>
        `
    });
    moveItemContainer.innerHTML = html
  });

let requestsInterval 

const promiseOptions = (inputValue) =>
  new Promise((resolve) => {
    requestsInterval = setTimeout(() => {
      resolve(apiFetch(inputValue));
    }, 500);
  });

searchBar.addEventListener("keyup", () => {
  
  clearTimeout(requestsInterval)

  const searchBarTyped = searchBar.value

  if (searchBarTyped.length === 0) {
    moveItemContainer.innerHTML = ""
    return
  }
  promiseOptions(searchBarTyped)

});



