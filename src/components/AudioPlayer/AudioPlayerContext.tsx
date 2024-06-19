import { createContext, useContext, useState, ReactNode, useEffect } from "react";
import { AudioPlayerContextProps, Episode } from "../../utils/Interfaces";

const AudioPlayerContext = createContext<AudioPlayerContextProps | undefined>(undefined)

export function AudioPlayerProvider({children}: { children: ReactNode }){
    const [episode, setEpisode] = useState<Episode | null>(null);
    const [episodes, setEpisodes] = useState<Episode[]>([]);
    const [isShuffling, setIsShuffling] = useState(false);
    const [isRepeating, setIsRepeating] = useState(false);
    const [isFavorite, setIsFavorite] = useState(false);

    const playEpisode = (episode: Episode) => {
        setEpisode(episode);
        console.log('Playing episode:', episode);
    }

    return (
    <AudioPlayerContext.Provider value={{ episode, playEpisode }}>
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