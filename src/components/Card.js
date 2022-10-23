import './Card.css';
function Card(props){
    return(
        <div className="card-container">
            <div className="image-card">
                <img src={props.imageUrl} />
            </div>
            <div className="card-content">
                <div className="card-location">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-geo-alt-fill location" viewBox="0 0 16 16" >
                            <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z"/>
                </svg>                    
                <h7 className="location-title">{props.location}</h7>
                <a href={props.googleMapsUrl} className="maps-link">View in Google Maps</a>
                </div>
                <h2>{props.title}</h2>
                <h5>{props.startDate} - {props.endDate}</h5>
                <p>{props.description}</p>
            </div>
        </div>
    )
}
export default Card;