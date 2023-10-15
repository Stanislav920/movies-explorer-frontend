export  function getMovies() {
    const dataMovies =  fetch('https://api.nomoreparties.co/beatfilm-movies')
     .then((response) => {
       return response.json();
     }).catch(error=>{
       console.error('getMovies ',error)
     });
     return dataMovies
   }