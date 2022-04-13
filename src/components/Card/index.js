export function Card(props) {
  return (
    <div class="card" style={{ width: "18rem" }}>
      <img src={props.img} class="card-img-top" alt={props.movieTitle} />
      <div class="card-body">
        <h5 class="card-title">{props.movieTitle}</h5>
        <p class="card-text">{props.sinopse}</p>
        <a href={props.wiki} class="btn btn-primary">
          Saber mais!
        </a>
      </div>
    </div>
  );
}

// "width: 18rem;"
