const queryString = document.location.search;
        let params = new URLSearchParams(queryString);
        let q = params.get("id");
        console.log(q);
        reqURL=`https://imdb-internet-movie-database-unofficial.p.rapidapi.com/film/${q}`
        fetch(reqURL, {
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
            document.getElementById('film-img').src=kemon.poster;
            document.getElementById('film-title').innerHTML=kemon.title;
            document.getElementById('film-plot').innerHTML=kemon.plot;
            document.getElementById('film-rating').innerHTML=kemon.rating;
            document.getElementById('film-year').innerHTML=kemon.year;
            document.getElementById('film-time').innerHTML="Length: "+ kemon.length;
            document.getElementById('film-votes').innerHTML=" " + kemon.rating_votes;
        })
        .catch(err => {
            console.error(err);
        })
  



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