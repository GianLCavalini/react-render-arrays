import {useParams} from "react-router-dom";
import movies from "../../data/movies";

function MoviesPages() {
    
    const params = useParams();
    const currentMovie = movies.filter((currentMovies) => {
        return currentMovies.original_title === params.movieName;
    })[0];

    return ( 
        
        <div class="card" style={{ width: "18rem" }}>
            <img src={`https://image.tmdb.org/t/p/w500/${currentMovie.backdrop_path}`}  alt={currentMovie.original_title}/>
            <div class="card-body">
             <h5 class="card-title">{currentMovie.original_title}</h5>
             <p class="card-text">{currentMovie.overview}</p> 
             </div>
        </div>
      
          
     );
}

export default MoviesPages;