import { useState, useEffect, useRef } from "react";
import { useParams, useNavigate, Outlet } from "react-router-dom";
import { ShowDetails } from "../../utils/Interfaces";
import { fetchShowDetails } from "../../utils/apiRequests";

import './ShowDetail.css'

export default function ShowDetail(){

    const { id } = useParams<{ id: string }>();
   
    const [show, setShow] = useState<ShowDetails | null>(null);
    const [error, setError] = useState<string | null>(null);


    const [showMore, setShowMore] = useState(false);

    const navigate = useNavigate();
    const seasonListRef = useRef<HTMLDivElement>(null);


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
            backgroundImage: 
            `linear-gradient(to bottom, rgba(0, 0, 0, 0.8), 
            rgba(0, 0, 0, 0.5)), 
            url(${show.image})`
          };

          const description = show.description;
          const shortDescription = description.split(' ')
            .slice(0, 30)
            .join(' ') + '...';

        
            const scroll = (direction: 'left' | 'right') => {
              if (seasonListRef.current) {
                const { scrollLeft, clientWidth } = seasonListRef.current;
                const scrollTo = direction === 'left' 
                  ? scrollLeft - clientWidth : scrollLeft + clientWidth;
                seasonListRef.current.scrollTo({ left: scrollTo, behavior: 'smooth' });
              }
            };   
        


    return (
        
            <div className="show-details">
                <div className="show-header" style={headerStyle}>
                    <h1>{show.title}</h1>
                    <div className={`show-description ${showMore ? 'full' : ''}`}>
                        {showMore ? description : shortDescription}
                        {description.split(' ').length > 30 && (
                        <span className="show-more" onClick={() => 
                            setShowMore(!showMore)}>
                            {showMore ? 'Show less' : 'Show more'}
                        </span>
                        )}
                    </div>
                    <div>
                        <span>{show.seasons.length} {show.seasons.length > 1 
                        ? 'Seasons' : 'Season'}</span>
                        <span>{show.genres && show.genres.join(', ')}</span>
                    </div>
                </div>
                <div className="seasons">
                    {show.seasons.map(season => (
                    <div key={season.season} onClick={() => 
                      navigate(`season/${season.season}`, 
                      { state: { season } })}>
                        <h2>{season.title}</h2>
                        <img src={season.image} alt={season.title} />
                    </div>
                    ))}
                </div>
                <Outlet />
    </div>    
    )
}