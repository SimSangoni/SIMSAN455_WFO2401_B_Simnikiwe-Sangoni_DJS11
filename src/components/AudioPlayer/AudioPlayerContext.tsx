import { createContext, useContext, useState, ReactNode } from "react";
import { AudioPlayerContextProps, Episode } from "../../utils/Interfaces";

const AudioPlayerContext = createContext<AudioPlayerContextProps | undefined>(undefined)

export function AudioPlayerProvider(children: ReactNode){
    const [episode, setEpisode] = useState<Episode | null>(null);

    const playEpisode = (episode: Episode) => {
        setEpisode(episode);
    }

    return (
    <AudioPlayerContext.Provider value={{ episode, playEpisode }}>
        {children}
    </AudioPlayerContext.Provider>
    )
}

export function AudioPlayer(){
    const context = useContext(AudioPlayerContext);
  if (!context) {
    throw new Error('useAudioPlayer must be used within an AudioPlayerProvider');
  }
  return context;
}