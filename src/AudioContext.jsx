import { createContext, useEffect, useRef, useState } from "react";

export const AudioContext = createContext();

export default function AudioProvider({ children }) {
  const audioref = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [songUrl, setSongUrl] = useState("");
  const [activeButton, setActiveButton] = useState(false);
  const [songInfo, setSongInfo] = useState({
    image: null,
    artistName: null,
    songTitle: null,
  });
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);

  const playSong = (url) => {
    setSongUrl(url);
    setIsPlaying(true);
  };

  const pauseSong = () => {
    setIsPlaying(false);
  };

  useEffect(() => {
    if (audioref.current) {
      if (isPlaying) {
        audioref.current.play();
        audioref.current.play().catch((error) => {
          console.error("Audio playback failed:", error);
        });
      } else {
        audioref.current.pause();
      }
    }
  }, [isPlaying, songUrl]);

  return (
    <AudioContext.Provider
      value={{
        playSong,
        pauseSong,
        setActiveButton,
        setSongInfo,
        setCurrentTime,
        setDuration,
        currentTime,
        duration,
        songInfo,
        isPlaying,
        songUrl,
        audioref,
        activeButton,
      }}
    >
      {children}
    </AudioContext.Provider>
  );
}

// export const useAudio = () => useContext(AudioContext);
