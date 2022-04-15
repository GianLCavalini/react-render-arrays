import { Card } from "../../components/Card"
import movies from "../../data/movies";

function Home() {
    return ( 
        <div className="App">
    
        {movies.filter((moviesFilterd) => moviesFilterd.original_language === "en").map((currentMovie) => {
          return (
            <Card
              movieTitle={currentMovie.original_title}
              sinopse={currentMovie.overview}
              img={`https://image.tmdb.org/t/p/w500/${currentMovie.backdrop_path}`}
              
            />
          );
        })}
      </div>
  
     );
}

export default Home;