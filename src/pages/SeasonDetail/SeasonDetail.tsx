import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import {  LocationState, Episode } from '../../utils/Interfaces';
import { useAudioPlayer } from '../../components/AudioPlayer/AudioPlayerContext';
import './SeasonDetail.css'




export default function SeasonDetail(){

    const location = useLocation();
    const { season } = location.state as LocationState;
    const { playEpisode, setEpisodes } = useAudioPlayer();

    useEffect(() => {
        if (season) {
          setEpisodes(season.episodes);
        }
      }, [season.episodes, setEpisodes]);


    return (
        
        <div className='season-detail'>
            <h1 className="season-title">{season.title}</h1>

            <div className='episode-list'>

                {season.episodes.map((episode: Episode) => (
                    <div 
                        key={episode.episode} 
                        className="episode-item"
                        onClick={() => {
                            playEpisode(episode, season.image)
                        }}
                    >
                        <div className="episode-number">{episode.episode}</div>

                        <div className="episode-info">
                            <h2 className="episode-title">{episode.title}</h2>
                            <p className="episode-description">{episode.description}</p>
                        </div>      
                    </div>
                    ))}
            </div>
        </div> 
    )
}


/*
    [
    {
        "season": 1,
        "title": "Season 1",
        "image": "https://res.cloudinary.com/dumslp4el/image/fetch/w_676,h_676/https://content.production.cdn.art19.com/images/ec/3b/a1/7a/ec3ba17a-7e3a-4ced-913b-3b13ecb1d3b8/f17fd8654df24c14989043e38adaeeed0e2a194abe0efd669261a98a12f5f4a63d831c4fb3391f2274ec882beebe77ca898209fab16bd28c513fd19f3c1fddad.jpeg",
        "episodes": [
            {
                "title": "Sic Semper Tyrannis",
                "description": "President Lincoln is mortally wounded. The nation is under attack. Secretary of War Edwin M. Stanton takes control and tries to protect Vice President Andrew Johnson.",
                "episode": 1,
                "file": "https://podcast-api.netlify.app/placeholder-audio.mp3"
            },
        ]
    },
    {
        "season": 2,
        "title": "Season 2",
        "image": "https://res.cloudinary.com/dumslp4el/image/fetch/w_676,h_676/https://content.production.cdn.art19.com/images/27/ef/a0/19/27efa019-8ce6-4e39-ac16-641e77fed02e/c91ba93f8c6e9b15a3a9bea7e20cd6e67d2292983ef54390ba84eefcb43edcb9c6b5b34db6ce7f0e3e673183e64b7f5cc4cd69769f249aba8bfb9e5212d2c1af.jpeg",
        "episodes": [
            {
                "title": "Prologue 1: The Man from Foggy Town",
                "description": "Edwin Stanton sits down with a famous scribe to tell the story of the events that led to Johnson’s impeachment. ",
                "episode": 1,
                "file": "https://podcast-api.netlify.app/placeholder-audio.mp3"
            },
        ]
    }
]

*/