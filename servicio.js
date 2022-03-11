let url="https://api.spotify.com/v1/artists/3YcBF2ttyueytpXtEzn1Za/top-tracks?market=US"

let token="Bearer BQD8vHLkk1rCOIl7D7qsIuP6DdBNriN4Mm7jKdRjudEq0v0Aq3TUwPIF0YELzbHbmPmq7g6obuoAOtU7cS21OAQbYZ80MOKynGoxnyOqUozn6eslMS1tHXwAOs6Q59UwBBJtyWeMpw9fbeDTJhU"

let parametros={
    method:"GET",
    headers:{Authorization:token}
}

fetch(url,parametros)
.then(function(respuesta){
    return(respuesta.json())
})
.then(function(respuesta){
    console.log(respuesta)
})
.catch(function(respuesta){
    console.log(respuesta)
})