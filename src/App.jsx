import Lovenote from "./components/Lovenote.jsx";
import Countdown from "./components/Countdown.jsx";
import Countdown2 from "./components/Countdown2.jsx";
import BackgroundMusic from "./components/BackgroundMusic.jsx";
import FloatingHearts from "./components/FloatingHearts.jsx";

function App () {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-pink-200 via-pink-300 to-rose-400 text-gray-500 px-4">
      <BackgroundMusic />
      <FloatingHearts />
      
      <div className="bg-white/80 backdrop-blur-xl rounded-3xl px-10 py-5 shadow-2xl max-w-2xl w-full top-0">
        <Lovenote />
        <Countdown2 />
      </div>
      
    </div>
  );
}

export default App;