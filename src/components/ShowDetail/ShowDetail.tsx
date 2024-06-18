import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Show } from "../../utils/Interfaces";
import { fetchShowDetails } from "../../utils/apiRequests";
import './ShowDetail.css'

export default function ShowDetail(){

    const { id } = useParams<{ id: string }>();
    const [show, setShow] = useState<Show | null>(null);
    // const [selectedSeason, setSelectedSeason] = useState<Season | null>(null);
    const [error, setError] = useState<string | null>(null);



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


    return (
        
            <div>
                <div className="show-header">
                    <img src={show.image} alt={show.title} />
                    <h1>{show.title}</h1>
                    <p>{show.description}</p>
                    <button>WATCH S1 E1</button>
                    <div>
                    <span>{show.seasons.length} {show.seasons.length > 1 ? 'Seasons' : 'Season'}</span>
                    <span>{show.genres && show.genres.join(', ')}</span>
                    </div>
                </div>
            </div> 
    )
}