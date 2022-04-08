const searchBar = document.querySelector('#search-bar--input')
const moveItemContainer = document.querySelector('.movie-grid--item')

const apiFetch = (searchBarTyped) => fetch('http://www.omdbapi.com/?s=' + searchBarTyped + '&apikey=df700428')
  .then(response => response.json())
  .then(data => {
    let html = ""
    if (data.Response === 'False') {
      return
    }
    data.Search.forEach(element => {
      html += `
        <div class="item--content">
        <div class="item-title">
        
        <h4>${element.Title}</h4>
        
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
  
  clearTimeout(requestsInterva)

  const searchBarTyped = searchBar.value

  if (searchBarTyped.length === 0) {
    moveItemContainer.innerHTML = ""
    return
  }
  promiseOptions(searchBarTyped)

});



