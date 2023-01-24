export default function LocationCard(props) {
  //   console.log(props.location.imageUrl);
  return (
    <div className="card">
      <img src={props.location.imageUrl} className="card--img"></img>
      <div className="card--context">
        <div className="card--reference">
          <img src="/location.svg" className="card--location--mark"></img>
          <p className="card--city">{props.location.location.toUpperCase()}</p>
          <a href={props.location.googleMapsUrl} style={{ color: "white" }}>
            {" "}
            View on Google Maps.
          </a>
        </div>
        <div className="card--desciption">
          <p className="card--title">{props.location.title}</p>
          <p className="card--date">
            {props.location.startDate} - {props.location.endDate}
          </p>
          <p className="card--text">{props.location.description}</p>
        </div>
      </div>
    </div>
  );
}
