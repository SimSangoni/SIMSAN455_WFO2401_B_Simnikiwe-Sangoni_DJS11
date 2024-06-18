import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { ShowDetails, Season } from "../../utils/Interfaces";
import { fetchShowDetails } from "../../utils/apiRequests";
import './ShowDetail.css'

export default function ShowDetail(){

    const { id } = useParams<{ id: string }>();
    const [show, setShow] = useState<ShowDetails | null>(null);
    const [selectedSeason, setSelectedSeason] = useState<Season | null>(null);
    const [error, setError] = useState<string | null>(null);
    const [showMore, setShowMore] = useState(false);



    useEffect(() => {
        const getShowDetails = async () => {
          if (id) {
            try {
              const data = await fetchShowDetails(id);
              setShow(data);
            } catch (err) {
              setError((err as Error).message);
            }
          }
        };
    
        getShowDetails();
      }, [id]);


      if (error) {
        return <div>Error: {error}</div>;
      }

        if (!show) {
        return <div>Loading...</div>;
        }

        const headerStyle = {
            backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.5)), url(${show.image})`
          };

          const description = show.description;
          const shortDescription = description.split(' ').slice(0, 30).join(' ') + '...';
        


    return (
        
            <div className="show-details">
                <div className="show-header" style={headerStyle}>
                    {/* <img src={show.image} alt={show.title} /> */}
                    <h1>{show.title}</h1>
                    <div className={`show-description ${showMore ? 'full' : ''}`}>
                        {showMore ? description : shortDescription}
                        {description.split(' ').length > 30 && (
                        <span className="show-more" onClick={() => setShowMore(!showMore)}>
                            {showMore ? 'Show less' : 'Show more'}
                        </span>
                        )}
                    </div>
                    <div>
                        <span>{show.seasons.length} {show.seasons.length > 1 ? 'Seasons' : 'Season'}</span>
                        <span>{show.genres && show.genres.join(', ')}</span>
                    </div>
                </div>
                <div className="seasons">
                    {show.seasons.map(season => (
                    <div key={season.season} onClick={() => setSelectedSeason(season)}>
                        <h2>{season.title}</h2>
                        <img src={season.image} alt={season.title} />
                    </div>
                    ))}
                </div>
            </div> 
            
    )
}