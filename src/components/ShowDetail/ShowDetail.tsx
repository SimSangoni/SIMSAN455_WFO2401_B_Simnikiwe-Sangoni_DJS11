import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { Show } from "../../utils/Interfaces";

export default function ShowDetail(){

    const { id } = useParams<{ id: string }>();
    const [show, setShow] = useState<Show | null>(null);
    // const [selectedSeason, setSelectedSeason] = useState<Season | null>(null);


    useEffect(() => {
        fetch(`https://podcast-api.netlify.app/id/${id}`)
          .then(response => response.json())
          .then(data => setShow(data));
          console.log(show)
      }, [id]);

        if (!show) {
        return <div>Loading...</div>;
        }


    return (
        
            <div>
                <img src={show.image} alt={show.title} />
                <h1>{show.title}</h1>
            </div> 
    )
}