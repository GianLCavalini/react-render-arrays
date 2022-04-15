import { Link } from "react-router-dom"

export function Card(props) {
  return (
    <div class="card" style={{ width: "18rem" }}>
      <img src={props.img} class="card-img-top" alt={props.movieTitle} />
      <div class="card-body">
        <h5 class="card-title">{props.movieTitle}</h5>
        
        <Link to={`/movies/${props.movieTitle}`} class="btn btn-primary">
          Saber mais!
        
      </Link>
      </div>
    </div>
  );
}


