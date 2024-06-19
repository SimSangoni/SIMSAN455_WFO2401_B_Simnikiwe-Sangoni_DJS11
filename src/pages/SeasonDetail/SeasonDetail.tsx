import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { fetchShowDetails } from './api'; // 



export default function SeasonDetail(){

    const { seasonId } = useParams();
    const [season, setSeason] = useState(null);
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    return (
        
            <div>
                This is the seasons page
            </div> 
    )
}