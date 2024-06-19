import { useState, useEffect, useRef } from "react";
import { useParams, useNavigate, Outlet, useLocation } from "react-router-dom";
import { ShowDetails } from "../../utils/Interfaces";
import { fetchShowDetails } from "../../utils/apiRequests";

import './ShowDetail.css'
import { AiFillRightCircle, AiFillLeftCircle } from "react-icons/ai";

export default function ShowDetail(){

    const { id } = useParams<{ id: string }>();
   
    const [show, setShow] = useState<ShowDetails | null>(null);
    const [error, setError] = useState<string | null>(null);


    const [showMore, setShowMore] = useState(false);

    const navigate = useNavigate();
    const location = useLocation();
    const seasonListRef = useRef<HTMLDivElement>(null);


    useEffect(() => {
        const getShowDetails = async () => {
          if (id) {
            try {
              const data = await fetchShowDetails(id);
              setShow(data);

              if (!location.pathname.includes('season')) {
                navigate(`season/0`, { state: { season: data.seasons[0] } });
              }

            } catch (err) {
              setError((err as Error).message);
            }
          }
        };
    
        getShowDetails();
      }, [id, location.pathname, navigate]);


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
                <div className="season-container">
                  <button className="scroll-button left" 
                    onClick={() => scroll('left')}>
                      <AiFillLeftCircle />
                  </button>
                  <div className="seasons" ref={seasonListRef}>
                        {show.seasons.map((season, index) => (
                         <div key={season.season} 
                          className="season-item" 
                          onClick={() => navigate(`season/${index}`, 
                          { state: { season } })}>
                            <h2>{season.title}</h2>
                            <img src={season.image} alt={season.title} />
                      </div>
                    ))}
                  </div>
                <button className="scroll-button right" 
                  onClick={() => scroll('right')}>
                    <AiFillRightCircle />
                </button>
                </div>
                
                <Outlet />
    </div>    
    )
}