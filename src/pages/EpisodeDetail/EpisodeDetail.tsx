import { useLocation } from "react-router-dom";
import { Episode } from "../../utils/Interfaces";

export default function EpisodeDetail(){

    const location = useLocation();
    const locationState = location.state as { episode: Episode } || undefined;

  if (!locationState || !locationState.episode) {
    return <div>Error: Episode details not available.</div>;
  }

  const { episode } = locationState;

    return (
        
            <div className="episode-detail">
                <h2>{episode.title}</h2>
                <audio controls>
                    <source src={episode.file} type="audio/mpeg" />
                    Your browser does not support the audio element.
                </audio>
            </div> 
    )
}

/*

[
    {
        "title": "Sic Semper Tyrannis",
        "description": "President Lincoln is mortally wounded. The nation is under attack. Secretary of War Edwin M. Stanton takes control and tries to protect Vice President Andrew Johnson.",
        "episode": 1,
        "file": "https://podcast-api.netlify.app/placeholder-audio.mp3"
    },
    {
        "title": "The Star of Washington City",
        "description": "After the discovery of a mysterious note from Booth to Johnson, Stanton goes on a hunt for the truth.",
        "episode": 2,
        "file": "https://podcast-api.netlify.app/placeholder-audio.mp3"
    },
    {
        "title": "Mars and Neptune",
        "description": "With the manhunt for Booth underway and martial law secure, Stanton strikes a compromise to preserve Lincoln’s agenda, but a dark revelation threatens to upend his progress.",
        "episode": 3,
        "file": "https://podcast-api.netlify.app/placeholder-audio.mp3"
    },
    {
        "title": "The Senator’s Daughter",
        "description": "Stanton sets out to learn the truth about Lucy Hale, and finds opportunity in adversity.",
        "episode": 4,
        "file": "https://podcast-api.netlify.app/placeholder-audio.mp3"
    },
    {
        "title": "Author and Finisher",
        "description": "As the hunt for Booth continues, Stanton has another problem on his hands: the last of the Rebel Generals wants terms of surrender.",
        "episode": 5,
        "file": "https://podcast-api.netlify.app/placeholder-audio.mp3"
    },
    {
        "title": "Skulduggery",
        "description": "A startling revelation about Lucy Hale forces Stanton into a corner. The only way out is to convince Johnson to give him more power.",
        "episode": 6,
        "file": "https://podcast-api.netlify.app/placeholder-audio.mp3"
    },
    {
        "title": "A Very Devil",
        "description": "Stanton and Langston go to the mats with Johnson and Welles over the issue of reconstruction and the future of the Freedman.",
        "episode": 7,
        "file": "https://podcast-api.netlify.app/placeholder-audio.mp3"
    },
    {
        "title": "Little Stanton",
        "description": "Secretary Seward is finally awake. Stanton’s old friend and ally proves to be a thorn in Stanton’s side.",
        "episode": 8,
        "file": "https://podcast-api.netlify.app/placeholder-audio.mp3"
    },
    {
        "title": "Trials and Tribulations",
        "description": "The investigation into Booth’s conspirators leaves Stanton with a new challenge: prove the Rebels are behind the attack on Abraham Lincoln. With the trial of the conspirators underway, Johnson and Stanton go to war over the future of the country.",
        "episode": 9,
        "file": "https://podcast-api.netlify.app/placeholder-audio.mp3"
    },
    {
        "title": "A Cost In Blood",
        "description": "While Mary Surratt’s life hangs in the balance, Stanton struggles to find her son and prove his conspiracy.",
        "episode": 10,
        "file": "https://podcast-api.netlify.app/placeholder-audio.mp3"
    }
]

*/