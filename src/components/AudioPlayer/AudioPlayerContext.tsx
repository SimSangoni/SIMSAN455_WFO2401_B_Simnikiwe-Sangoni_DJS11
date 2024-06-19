import { createContext, useContext, useState, ReactNode, useEffect } from "react";
import { AudioPlayerContextProps, Episode } from "../../utils/Interfaces";

const AudioPlayerContext = createContext<AudioPlayerContextProps | undefined>(undefined)

export function AudioPlayerProvider({children}: { children: ReactNode }){
    const [episode, setEpisode] = useState<Episode | null>(null);
    const [episodes, setEpisodes] = useState<Episode[]>([]);
    const [isShuffling, setIsShuffling] = useState(false);
    const [isRepeating, setIsRepeating] = useState(false);
    const [isFavorite, setIsFavorite] = useState(false);

    useEffect(() => {
      if (episode) {
        setEpisodes((prevEpisodes) => [...prevEpisodes, episode]);
      }
    }, [episode]);

    function playEpisode(episode: Episode) {
      setEpisode(episode);
      console.log('Playing episode:', episode);
  }

    function playNextEpisode()  {
      if (!episode || episodes.length === 0) return;
      const currentIndex = episodes.findIndex((e) => e.episode === episode.episode);
      const nextIndex = (currentIndex + 1) % episodes.length;
      setEpisode(episodes[nextIndex]);
      console.log('Playing next episode')
    };
  
    function playPrevEpisode()  {
      console.log('Playing previous episode')
    };
  
    function toggleShuffle ()  {
      setIsShuffling((prev) => !prev);
      console.log('Toggling shuffle episodes')
    };
  
    function toggleRepeat () {
      setIsRepeating((prev) => !prev);
      console.log('Toggling repeat episodes')
    };
  
    function toggleFavorite ()  {
      setIsFavorite((prev) => !prev);
      console.log('Toggling repeat episodes')
    };

    return (
    <AudioPlayerContext.Provider value={{ 
        episode, 
        episodes,
        playEpisode,
        playNextEpisode,
        playPrevEpisode,
        toggleShuffle,
        toggleRepeat,
        toggleFavorite,
        isShuffling,
        isRepeating,
        isFavorite
        }}>
        {children}
    </AudioPlayerContext.Provider>
    )
}

export function useAudioPlayer(){
    const context = useContext(AudioPlayerContext);
  if (!context) {
    throw new Error('useAudioPlayer must be used within an AudioPlayerProvider');
  }
  return context;
}