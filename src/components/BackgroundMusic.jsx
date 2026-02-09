import { useRef, useState } from "react";

function BackgroundMusic() {
  const audioRef = useRef(null);
  const [playing, setPlaying] = useState(false);

  const toggleMusic = () => {
    const audio = audioRef.current;
    if (!audio) return;

    audio.volume = 0.4; // soft & romantic

    if (!playing) {
      audio.play().catch(() => {
        console.log("User interaction required to play audio");
      });
    } else {
      audio.pause();
    }

    setPlaying(!playing);
  };

  return (
    <div className="z-40">
      <audio ref={audioRef} loop preload="auto">
        <source src="/TwoBirds.mp3" type="audio/mpeg" />
      </audio>

      <button
        onClick={toggleMusic}
        className="fixed bottom-6 right-6 bg-white/30 backdrop-blur-lg px-3 py-2 md:px-4 md:py-2  rounded-full shadow-lg  md:text-2xl hover:scale-105 transition"
      >
        {playing ? "⏸ Pause Music" : "▶️ Play Music"}
      </button>
    </div>
  );
}

export default BackgroundMusic;
