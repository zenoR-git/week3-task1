fetch("https://imdb-internet-movie-database-unofficial.p.rapidapi.com/film/tt0848228", {
    "method": "GET",
    "headers": {
        "x-rapidapi-key": "c4a0a42be3msh87a35bcf29fca4ep18fbc5jsn322a32d270ef",
        "x-rapidapi-host": "imdb-internet-movie-database-unofficial.p.rapidapi.com"
    }
})
.then(response => {
    const kemon = response.json();
    return kemon ;  
}).then(kemon =>{
    document.getElementById('film1-img').src=kemon.poster;
    document.getElementById('film1-title').innerHTML=kemon.title;
    document.getElementById('film1-plot').innerHTML=kemon.plot;
    document.getElementById('film1-ratings').innerHTML="ratings: "+kemon.rating;
})
.catch(err => {
    console.error(err);
})

fetch("https://imdb-internet-movie-database-unofficial.p.rapidapi.com/film/tt12361974", {
    "method": "GET",
    "headers": {
        "x-rapidapi-key": "c4a0a42be3msh87a35bcf29fca4ep18fbc5jsn322a32d270ef",
        "x-rapidapi-host": "imdb-internet-movie-database-unofficial.p.rapidapi.com"
    }
})
.then(response => {
    const kemon = response.json();
    return kemon ;  
}).then(kemon =>{
    document.getElementById('film2-img').src=kemon.poster;
    document.getElementById('film2-title').innerHTML=kemon.title;
    document.getElementById('film2-plot').innerHTML=kemon.plot;
    document.getElementById('film2-ratings').innerHTML="ratings: "+kemon.rating;
})
.catch(err => {
    console.error(err);
})

fetch("https://imdb-internet-movie-database-unofficial.p.rapidapi.com/film/tt0468569", {
    "method": "GET",
    "headers": {
        "x-rapidapi-key": "c4a0a42be3msh87a35bcf29fca4ep18fbc5jsn322a32d270ef",
        "x-rapidapi-host": "imdb-internet-movie-database-unofficial.p.rapidapi.com"
    }
})
.then(response => {
    const kemon = response.json();
    return kemon ;  
}).then(kemon =>{
    document.getElementById('film3-img').src=kemon.poster;
    document.getElementById('film3-title').innerHTML=kemon.title;
    document.getElementById('film3-plot').innerHTML=kemon.plot;
    document.getElementById('film3-ratings').innerHTML="ratings: "+kemon.rating;
})
.catch(err => {
    console.error(err);
})

fetch("https://imdb-internet-movie-database-unofficial.p.rapidapi.com/film/tt4154796", {
    "method": "GET",
    "headers": {
        "x-rapidapi-key": "c4a0a42be3msh87a35bcf29fca4ep18fbc5jsn322a32d270ef",
        "x-rapidapi-host": "imdb-internet-movie-database-unofficial.p.rapidapi.com"
    }
})
.then(response => {
    const kemon = response.json();
    return kemon ;  
}).then(kemon =>{
    document.getElementById('film4-img').src=kemon.poster;
    document.getElementById('film4-title').innerHTML=kemon.title;
    document.getElementById('film4-plot').innerHTML=kemon.plot;
    document.getElementById('film4-ratings').innerHTML="ratings: "+kemon.rating;
})
.catch(err => {
    console.error(err);
})

fetch("https://imdb-internet-movie-database-unofficial.p.rapidapi.com/film/tt3371366", {
    "method": "GET",
    "headers": {
        "x-rapidapi-key": "c4a0a42be3msh87a35bcf29fca4ep18fbc5jsn322a32d270ef",
        "x-rapidapi-host": "imdb-internet-movie-database-unofficial.p.rapidapi.com"
    }
})
.then(response => {
    const kemon = response.json();
    return kemon ;  
}).then(kemon =>{
    document.getElementById('film5-img').src=kemon.poster;
    document.getElementById('film5-title').innerHTML=kemon.title;
    document.getElementById('film5-plot').innerHTML=kemon.plot;
    document.getElementById('film5-ratings').innerHTML="ratings: "+kemon.rating;
})
.catch(err => {
    console.error(err);
})

fetch("https://imdb-internet-movie-database-unofficial.p.rapidapi.com/film/tt3402236", {
    "method": "GET",
    "headers": {
        "x-rapidapi-key": "c4a0a42be3msh87a35bcf29fca4ep18fbc5jsn322a32d270ef",
        "x-rapidapi-host": "imdb-internet-movie-database-unofficial.p.rapidapi.com"
    }
})
.then(response => {
    const kemon = response.json();
    return kemon ;  
}).then(kemon =>{
    document.getElementById('film6-img').src=kemon.poster;
    document.getElementById('film6-title').innerHTML=kemon.title;
    document.getElementById('film6-plot').innerHTML=kemon.plot;
    document.getElementById('film6-ratings').innerHTML="ratings: "+kemon.rating;
})
.catch(err => {
    console.error(err);
})

fetch("https://imdb-internet-movie-database-unofficial.p.rapidapi.com/film/tt3778644", {
    "method": "GET",
    "headers": {
        "x-rapidapi-key": "c4a0a42be3msh87a35bcf29fca4ep18fbc5jsn322a32d270ef",
        "x-rapidapi-host": "imdb-internet-movie-database-unofficial.p.rapidapi.com"
    }
})
.then(response => {
    const kemon = response.json();
    return kemon ;  
}).then(kemon =>{
    document.getElementById('film7-img').src=kemon.poster;
    document.getElementById('film7-title').innerHTML=kemon.title;
    document.getElementById('film7-plot').innerHTML=kemon.plot;
    document.getElementById('film7-ratings').innerHTML="ratings: "+kemon.rating;
})
.catch(err => {
    console.error(err);
})

fetch("https://imdb-internet-movie-database-unofficial.p.rapidapi.com/film/tt1631867", {
    "method": "GET",
    "headers": {
        "x-rapidapi-key": "c4a0a42be3msh87a35bcf29fca4ep18fbc5jsn322a32d270ef",
        "x-rapidapi-host": "imdb-internet-movie-database-unofficial.p.rapidapi.com"
    }
})
.then(response => {
    const kemon = response.json();
    return kemon ;  
}).then(kemon =>{
    document.getElementById('film8-img').src=kemon.poster;
    document.getElementById('film8-title').innerHTML=kemon.title;
    document.getElementById('film8-plot').innerHTML=kemon.plot;
    document.getElementById('film8-ratings').innerHTML="ratings: "+kemon.rating;
})
.catch(err => {
    console.error(err);
})

fetch("https://imdb-internet-movie-database-unofficial.p.rapidapi.com/film/tt11032374", {
    "method": "GET",
    "headers": {
        "x-rapidapi-key": "c4a0a42be3msh87a35bcf29fca4ep18fbc5jsn322a32d270ef",
        "x-rapidapi-host": "imdb-internet-movie-database-unofficial.p.rapidapi.com"
    }
})
.then(response => {
    const kemon = response.json();
    return kemon ;  
}).then(kemon =>{
    document.getElementById('film9-img').src=kemon.poster;
    document.getElementById('film9-title').innerHTML=kemon.title;
    document.getElementById('film9-plot').innerHTML=kemon.plot;
    document.getElementById('film9-ratings').innerHTML="ratings: "+kemon.rating;
})
.catch(err => {
    console.error(err);
})

fetch("https://imdb-internet-movie-database-unofficial.p.rapidapi.com/film/tt1562871", {
    "method": "GET",
    "headers": {
        "x-rapidapi-key": "c4a0a42be3msh87a35bcf29fca4ep18fbc5jsn322a32d270ef",
        "x-rapidapi-host": "imdb-internet-movie-database-unofficial.p.rapidapi.com"
    }
})
.then(response => {
    const kemon = response.json();
    return kemon ;  
}).then(kemon =>{
    document.getElementById('film10-img').src=kemon.poster;
    document.getElementById('film10-title').innerHTML=kemon.title;
    document.getElementById('film10-plot').innerHTML=kemon.plot;
    document.getElementById('film10-ratings').innerHTML="ratings: "+kemon.rating;
})
.catch(err => {
    console.error(err);
})

fetch("https://imdb-internet-movie-database-unofficial.p.rapidapi.com/film/tt3498820", {
    "method": "GET",
    "headers": {
        "x-rapidapi-key": "c4a0a42be3msh87a35bcf29fca4ep18fbc5jsn322a32d270ef",
        "x-rapidapi-host": "imdb-internet-movie-database-unofficial.p.rapidapi.com"
    }
})
.then(response => {
    const kemon = response.json();
    return kemon ;  
}).then(kemon =>{
    document.getElementById('film11-img').src=kemon.poster;
    document.getElementById('film11-title').innerHTML=kemon.title;
    document.getElementById('film11-plot').innerHTML=kemon.plot;
    document.getElementById('film11-ratings').innerHTML="ratings: "+kemon.rating;
})
.catch(err => {
    console.error(err);
})

fetch("https://imdb-internet-movie-database-unofficial.p.rapidapi.com/film/tt9501310", {
    "method": "GET",
    "headers": {
        "x-rapidapi-key": "c4a0a42be3msh87a35bcf29fca4ep18fbc5jsn322a32d270ef",
        "x-rapidapi-host": "imdb-internet-movie-database-unofficial.p.rapidapi.com"
    }
})
.then(response => {
    const kemon = response.json();
    return kemon ;  
}).then(kemon =>{
    document.getElementById('film12-img').src=kemon.poster;
    document.getElementById('film12-title').innerHTML=kemon.title;
    document.getElementById('film12-plot').innerHTML=kemon.plot;
    document.getElementById('film12-ratings').innerHTML="ratings: "+kemon.rating;
})
.catch(err => {
    console.error(err);
})

// start of search bar code

function insta_search(query){
    const instaUrl = `https://imdb-internet-movie-database-unofficial.p.rapidapi.com/search/${query}`;
    fetch(instaUrl,{
        "method": "GET",
        "headers": {
            "x-rapidapi-key": "c4a0a42be3msh87a35bcf29fca4ep18fbc5jsn322a32d270ef",
            "x-rapidapi-host": "imdb-internet-movie-database-unofficial.p.rapidapi.com"
        }
    })
    .then(response => {
        console.log("search bar success")
        return response.json();
    })
    .then((alph) => {
        const result = alph.titles;
        rendererbar(result);
    });

    }

    function rendererbar(results){
        const srchResult = document.getElementById("srch-display");
        srchResult.innerHTML="";
        results.forEach(result => {
            const element1=document.createElement("div");
            const mid=result.id;
            element1.setAttribute("data-mid",mid);
            element1.addEventListener('click',(event) => {
                window.location.href = "./search_result.html" + "?id=" + event.target.getAttribute('data-mid');
            });
            element1.className="s-box";
            element1.innerHTML=result.title;
            srchResult.appendChild(element1);
            
        });
    }

    

window.onload = () => {
    const searchbar = document.getElementById("insta_searchbar");
    searchbar.value ="";
    const srchRes = document.getElementById("srch-display");
    searchbar.onkeyup = (event) => {
        if (searchbar.value.trim().length === 0){
            return;
        }
        srchRes.style.display="block";
       insta_search(searchbar.value) ; 
    if (searchbar.value.trim().length === 0){
      searchbar.addEventListener('focusout', (event) => {
      srchRes.style.display = 'none';
    });}
    };
          
}