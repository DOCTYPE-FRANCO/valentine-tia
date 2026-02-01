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
    <>
      <audio ref={audioRef} loop preload="auto">
        <source src="/TwoBirds.mp3" type="audio/mpeg" />
      </audio>

      <button
        onClick={toggleMusic}
        className="fixed bottom-6 right-6 bg-white/30 backdrop-blur-lg px-9 py-3 md:px-4 md:py-2 rounded-full shadow-lg text-2xl md:text-sm hover:scale-105 transition"
      >
        {playing ? "⏸ Pause Music" : "▶️ Play Music"}
      </button>
    </>
  );
}

export default BackgroundMusic;
