import LoveNote from "./components/LoveNote.jsx";
import Countdown from "./components/Countdown.jsx";
import BackgroundMusic from "./components/BackgroundMusic.jsx";

function App () {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-pink-200 via-pink-300 to-rose-400 text-gray-500 px-4">
      <BackgroundMusic />

      <div className="bg-white/80 backdrop-blur-xl rounded-3xl p-10 shadow-2xl max-w-2xl w-full top-0">
        <LoveNote />
        <Countdown />
      </div>
      
    </div>
  );
}

export default App;
