import LoveNote from "./Components/LoveNote.jsx";
import Countdown from "./Components/Countdown.jsx";
import BackgroundMusic from "./Components/BackgroundMusic.jsx";

function App () {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-pink-200 via-pink-300 to-rose-400 text-gray-500 px-4">
      <BackgroundMusic />

      <div className="bg-white/80 backdrop-blur-xl rounded-3xl p-10 shadow-2xl max-w-2xl w-full top-2">
        <LoveNote />
        <Countdown />
      </div>
      
    </div>
  );
}

export default App;
