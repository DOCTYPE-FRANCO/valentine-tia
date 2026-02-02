import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import comb from "../assets/comb.jpeg"
import cute from "../assets/cute.jpeg"
import cool from "../assets/cool.jpeg"
import nice from "../assets/nice.jpeg"
import pink from "../assets/pink.jpeg"
import pink2 from "../assets/pink2.jpeg"
import purple from "../assets/purple.jpeg"
import soft from "../assets/soft.jpeg"
import cls from "../assets/class.jpeg"
import white from "../assets/white.jpeg"
import white2 from "../assets/white2.jpeg"
import whitediff from "../assets/whitediff.jpeg"
import vid from "../assets/vid.mp4"

function Countdown() {
  const [suprise, setSuprise] = useState(false);
  const [confetti, setConfetti] = useState([]);
  const [selectedPic, setSelectedPic] = useState(null);

  const getNextBirthday = () => {
    const now = new Date();
    const year =
      now > new Date(`${now.getFullYear()}-02-16`)
        ? now.getFullYear() + 1
        : now.getFullYear();

    return new Date(`${year}-02-16T00:00:00`);
  };

  const birthday = new Date(Date.now() + 30 * 1000);

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

  // Generate continuous confetti
  useEffect(() => {
    if (suprise) {
      const generateConfetti = () => {
        return Array.from({ length: 15 }, (_, i) => ({
          id: Date.now() + i + Math.random(),
          x: Math.random() * 100,
          delay: Math.random() * 0.3,
          duration: 2.5 + Math.random() * 1.5,
          rotation: Math.random() * 360,
          color: ["#ff6b6b", "#4ecdc4", "#45b7d1", "#ffd93d", "#ff6bcb", "#a8e6cf"][
            Math.floor(Math.random() * 6)
          ],
        }));
      };

      // Initial confetti
      setConfetti(generateConfetti());

      // Add new confetti every 400ms
      const interval = setInterval(() => {
        setConfetti((prev) => [...prev.slice(-60), ...generateConfetti()]);
      }, 400);

      return () => clearInterval(interval);
    } else {
      setConfetti([]);
    }
  }, [suprise]);

  if (!timeLeft) {
    return (
      <div className="flex flex-col justify-center items-center gap-7">
        <h2 className="text-center text-3xl font-bold mt-6">
          Happy Birthday Oluchi 🎂💖
        </h2>

        <button
          onClick={() => setSuprise(true)}
          className="hover:scale-110 hover:bg-gray-800 transition-all duration-700 text-sm w-[150px] bg-gray-800/60 font-extrabold text-white rounded-md p-3"
        >
          CLICK HERE FOR SUPRISE
        </button>

        <AnimatePresence mode="wait">
          {suprise && (
            <>
              {/* Backdrop */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 bg-black/50 z-40"
                onClick={() => setSuprise(false)}
              />

              {/* Modal */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8, y: -50 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.8, y: 50 }}
                transition={{ duration: 0.4, type: "spring" }}
                className="pt-3 flex flex-col items-center justify-center fixed w-[400px] h-[630px] md:w-[870px] md:h-[520px] bg-white backdrop-blur-2xl top-2 md:top-1/2 left-1/2 -translate-x-1/2 md:-translate-y-1/2 p-1 rounded-md z-50 overflow-hidden"
              >
                <p className="text-3xl font-bold">GALLERY </p>
                {/* Continuous Confetti */}
                {confetti.map((piece) => (
                  <motion.div
                    key={piece.id}
                    initial={{ y: -20, x: `${piece.x}vw`, opacity: 1, rotate: 0 }}
                    animate={{
                      y: "120vh",
                      rotate: piece.rotation * 4,
                      opacity: [1, 1, 0.8, 0],
                    }}
                    transition={{
                      duration: piece.duration,
                      delay: piece.delay,
                      ease: "easeIn",
                    }}
                    className="top-0 absolute w-3 h-3 rounded-sm pointer-events-none z-[1]"
                    style={{
                      backgroundColor: piece.color,
                      left: `${piece.x}%`,
                    }}
                  />
                ))}

                {/* HEADER */}
                <div className="w-full flex justify-end items-center relative z-10">
                  <X
                    onClick={() => setSuprise(false)}
                    size={34}
                    className="hover:scale-110 transition-transform cursor-pointer pr-2"
                    strokeWidth={2}
                  />
                </div>

                {/* Surprise content */}
                <div className="flex-1 flex flex-col items-center justify-center relative z-10 w-full">
                  <div className="w-full flex justify-center items-center px-4">
                    <Swiper
                      spaceBetween={10}
                      slidesPerView={1}
                      breakpoints={{
                        640: { slidesPerView: 2 },
                        768: { slidesPerView: 3 },
                      }}
                      modules={[Autoplay, Pagination, Navigation]}
                      pagination={{ clickable: true }}
                      autoplay={{ delay: 2000, disableOnInteraction: false }}
                      navigation={true}
                      loop={true}
                      className="mySwiper w-full max-w-6xl"
                    >
                      <SwiperSlide>
                        <img src={cool} alt="" onClick={() => setSelectedPic(cool)} className="w-full h-[300px] object-cover rounded-2xl cursor-pointer" />
                      </SwiperSlide>

                      <SwiperSlide>
                        <img src={nice} alt="" onClick={() => setSelectedPic(nice)} className="w-full h-[300px] object-cover rounded-2xl cursor-pointer" />
                      </SwiperSlide>

                      <SwiperSlide>
                        <img src={soft} alt="" onClick={() => setSelectedPic(soft)} className="w-full h-[300px] object-cover rounded-2xl cursor-pointer" />
                      </SwiperSlide>

                      <SwiperSlide>
                        <img src={cls} alt="" onClick={() => setSelectedPic(cls)} className="w-full h-[300px] object-cover rounded-2xl cursor-pointer" />
                      </SwiperSlide>

                      <SwiperSlide>
                        <img src={comb} alt="" onClick={() => setSelectedPic(comb)} className="w-full h-[300px] object-cover rounded-2xl cursor-pointer" />
                      </SwiperSlide>

                      <SwiperSlide>
                        <img src={cute} alt="" onClick={() => setSelectedPic(cute)} className="w-full h-[300px] object-cover rounded-2xl cursor-pointer" />
                      </SwiperSlide>

                      <SwiperSlide>
                        <img src={pink} alt="" onClick={() => setSelectedPic(pink)} className="w-full h-[300px] object-cover rounded-2xl cursor-pointer" />
                      </SwiperSlide>

                      <SwiperSlide>
                        <img src={white} alt="" onClick={() => setSelectedPic(white)} className="w-full h-[300px] object-cover rounded-2xl cursor-pointer" />
                      </SwiperSlide>

                      <SwiperSlide>
                        <img src={pink2} alt="" onClick={() => setSelectedPic(pink2)} className="w-full h-[300px] object-cover rounded-2xl cursor-pointer" />
                      </SwiperSlide>

                      <SwiperSlide>
                        <img src={whitediff} alt="" onClick={() => setSelectedPic(whitediff)} className="w-full h-[300px] object-cover rounded-2xl cursor-pointer" />
                      </SwiperSlide>

                      <SwiperSlide>
                        <img src={purple} alt="" onClick={() => setSelectedPic(purple)} className="w-full h-[300px] object-cover rounded-2xl cursor-pointer" />
                      </SwiperSlide>

                      <SwiperSlide>
                        <img src={white2} alt="" onClick={() => setSelectedPic(white2)} className="w-full h-[300px] object-cover rounded-2xl cursor-pointer" />
                      </SwiperSlide>

                      <SwiperSlide>
                        <video src={vid} controls className="w-full h-[300px] object-cover rounded-2xl" />
                      </SwiperSlide>
                    </Swiper>
                  </div>

                  {selectedPic && (
                    <div className="fixed inset-0 bg-black bg-opacity-80 flex justify-center items-center z-[100]" onClick={() => setSelectedPic(null)}>
                      <div className="relative" onClick={(e) => e.stopPropagation()}>
                        <img
                          src={selectedPic}
                          alt="Selected"
                          className="max-w-[90vw] max-h-[90vh] rounded-xl shadow-lg"
                        />
                        <button
                          onClick={() => setSelectedPic(null)}
                          className="absolute top-2 right-2 bg-white px-3 py-1 rounded-full shadow-md hover:bg-gray-100 font-bold"
                        >
                          ✖
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>
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