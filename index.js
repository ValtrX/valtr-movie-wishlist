fetch('http://www.omdbapi.com/?s=spiderman&apikey=df700428')
  .then(response => response.json())
  .then(data => console.log(data));
