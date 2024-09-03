let api="https://www.omdbapi.com/?apikey=61e576a4&t=";
function searchMovie(){
    let searchHere=document.getElementById("movieName").value;
    console.log(searchHere);
    let Search = api + searchHere;
    console.log(Search);
    fetch(Search)
    .then((Response)=>{
        return Response.json();
    })
    .then((Response)=>{
        console.log(Response);
        document.getElementById("title").innerText=Response.Title;
        document.getElementById("description").innerText=Response.Plot;
        document.getElementById("gernre").innerText=Response.Genre;
        document.getElementById("actors").innerText=Response.Actors;
        document.getElementById("directors").innerText=Response.Director;
        document.getElementById("writer").innerText=Response.Writer;
        document.getElementById("collection").innerText=Response.BoxOffice;
        document.getElementById("awards").innerText=Response.Awards;
        document.getElementById("ratings").innerText=Response.imdbRating;
        document.getElementById("poster").src=Response.Poster;
    })
}
// searchMovie(); 
