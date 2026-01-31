import { useEffect, useState } from "react";

function Countdown() {
  // February 16 (next occurrence)
  const getNextBirthday = () => {
    const now = new Date();
    const year =
      now > new Date(`${now.getFullYear()}-02-16`)
        ? now.getFullYear() + 1
        : now.getFullYear();

    return new Date(`${year}-02-16T00:00:00`);
  };

  const birthday = getNextBirthday(); //new Date(Date.now() + 30 * 1000);

  const getTimeLeft = () => {
    const diff = birthday - new Date();
    if (diff <= 0) return null;

    return {
      days: Math.floor(diff / (1000 * 60 * 60 * 24)),
      hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((diff / (1000 * 60)) % 60),
      seconds: Math.floor((diff / 1000) % 60),
    };
  };

  const [timeLeft, setTimeLeft] = useState(getTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(getTimeLeft());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  if (!timeLeft) {
    return (
      <div className="flex flex-col justify-center items-center gap-7">
          <h2 className="text-center text-3xl font-bold mt-6">
            Happy Birthday Oluchi 🎂💖          
          </h2>

        <button className="hover:scale-110 hover:bg-gray-800 transition-all duration-700 text-sm w-[150px] bg-gray-800/60 font-extrabold text-white rounded-md p-3">
          CLICK HERE FOR SUPRISE
        </button>
      </div>
     
    );
  }

  return (
    <div className="mt-10">
      <h2 className="text-2xl font-semibold mb-4 text-center">
        Countdown to your special day 🎁
      </h2>

      <div className="flex gap-3 justify-center flex-wrap">
        {Object.entries(timeLeft).map(([label, value]) => (
          <div
            key={label}
            className="bg-white/30 backdrop-blur-md rounded-2xl px-4 py-3 min-w-[80px] text-center"
          >
            <p className="text-2xl font-bold">{value}</p>
            <p className="text-xs capitalize">{label}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Countdown;
