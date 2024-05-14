"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Faq from "./components/Faq";

export default function Home() {
  const [page, setPage] = useState(-1);
  const [buttonOpacity, setButtonOpacity] = useState(0);
  const [buttonVisible, setButtonVisible] = useState(false);
  const [MainBox, setShowMainBox] = useState(false);

  useEffect(() => {
    setPage(0);
    const timer = setTimeout(() => {
      setButtonVisible(true);
    }, 4000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (page >= 1) {
      const timer = setTimeout(() => {
        setButtonOpacity(1);
      }, 5000);

      return () => clearTimeout(timer);
    } else {
      setButtonOpacity(0);
    }
  }, [page]);

  useEffect(() => {
    const audio = new Audio("/bg.m4a");
    audio.loop = true;

    const playAudio = () => {
      audio.play().catch((error) => {
        console.error("audio bleh", error);
      });
    };

    const handleUserInteraction = () => {
      playAudio();

      window.removeEventListener("click", handleUserInteraction);
      window.removeEventListener("keydown", handleUserInteraction);
    };

    window.addEventListener("click", handleUserInteraction);
    window.addEventListener("keydown", handleUserInteraction);

    return () => {
      audio.pause();
      audio.currentTime = 0;
      window.removeEventListener("click", handleUserInteraction);
      window.removeEventListener("keydown", handleUserInteraction);
    };
  }, []);

  useEffect(() => {
    if (page === 0) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [page]);

  useEffect(() => {
    const MainBox = setTimeout(() => {
      setShowMainBox(true);
    }, 4000); 
    return () => clearTimeout(MainBox);
  }, []);


  return (
    <main>
      <AnimatePresence>
        {page === 0 && (
          <motion.div
            key="page-0"
            className="p-10"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ y: 1000, transition: { ease: "backIn", duration: 0.7 } }}
            transition={{ duration: 0.7, ease: "backInOut" }}
          >
            {MainBox && (
            <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="border-2 rounded-[5px] border-[#6D5C55] text-left sm:text-[16px] text-[10px] sm:px-10 sm:py-4  py-4 px-1 absolute z-10 bg-[#F1EDDD] sm:bottom-[20rem]  bottom-[40rem] sm:right-[10rem] right-[0.8rem]">
              As the dawn of the full moon rises, our<br></br> journey begins
            </motion.div>
        )}
            <motion.div
              whileHover={{
                scale: 1.05,
                transition: { duration: 0.125, ease: [0.42, 0, 0.58, 1] },
              }}
            >
              <div className="relative cursor-pointer sm:w-full sm:h-[90vh]">
                <img
                  src="/main-art.png"
                  alt="Main Art"
                  className="sm:absolute sm:top-[-3rem] sm:left-0 w-full h-full object-cover"
                />
              </div>
              <div className="relative bottom-[10rem] m-auto text-center font-Neela text-[#626543] text-[55px]">
                WELCOME, VOYAGER
              </div>
            </motion.div>
            {buttonVisible && (
              <motion.button
                onClick={() => setPage(1)}
                className="relative bottom-[10rem] bg-[#76728B] mt-2 py-2 px-10 text-[#F1EDDD] text-3xl border-[3px] border-[#6D5C55] block m-auto"
                style={{
                  boxShadow: "#F1EDDD 0px 0px 0px 2px, #6D5C55 0px 0px 0px 4px",
                  WebkitTextStroke: "0.4px #320C0C",
                }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
              >
                BEGIN
              </motion.button>
            )}
          </motion.div>
        )}
      </AnimatePresence>
      <AnimatePresence>
        {page === 1 && (
          <motion.div
            key="page-1"
            className="pt-10 flex items-center justify-between min-h-screen flex-col"
            initial={{ y: -1000, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 1000, transition: { ease: "backIn", duration: 0.7 } }}
            transition={{ duration: 1, ease: "backInOut", delay: 0.5 }}
          >
            <div className="flex-1 flex items-center justify-center">
              <img
                src="/art-4.png"
                alt="Art 2"
                className="sm:max-w-xl max-w-[350px]"
              />
              <motion.div 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 1 }}
              className="border-2 rounded-[5px] border-[#6D5C55] text-center sm:px-6 py-5 px-2 absolute sm:text-[16px] text-[10px] bg-[#F1EDDD] sm:bottom-[22rem] bottom-[26rem]">
                In the beginning, whispers carried tales of a hidden valley
                untouched<br></br> by humanity, where emerald forest danced with
                mist and sapphire<br></br> lakes mirrored the sky
              </motion.div>
            </div>

            <AnimatePresence>
              {buttonOpacity && (
                <motion.button
                  onClick={() => setPage(2)}
                  className="bg-[#76728B] mt-5 py-2 px-10 text-[#F1EDDD] text-3xl border-[3px] border-[#6D5C55] block m-auto"
                  style={{
                    boxShadow:
                      "#F1EDDD 0px 0px 0px 2px, #6D5C55 0px 0px 0px 4px",
                    WebkitTextStroke: "0.4px #320C0C",
                  }}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 1 }}
                >
                  NEXT
                </motion.button>
              )}
            </AnimatePresence>
            <div className="w-px h-48 bg-[#6D5C55] mx-10 mt-20" />
          </motion.div>
        )}

        {page === 2 && (
          <motion.div
            key="page-2"
            className="pt-10 flex items-center justify-between min-h-screen flex-col"
            initial={{ y: -1000, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 1000, transition: { ease: "backIn", duration: 0.7 } }}
            transition={{ duration: 1, ease: "backInOut", delay: 0.5 }}
          >
            <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
            className="border-2 rounded-[5px] border-[#6D5C55] text-center sm:text-[16px] text-[10px] sm:px-2 sm:py-4  py-4 px-1 absolute bg-[#F1EDDD] sm:bottom-[44rem]  bottom-[40rem] sm:right-[20rem] right-[0.8rem]">
              The edge of the valley beheld a vista beyond words <br></br> — a
              world painted by a divine hand.
            </motion.div>
            <div className="flex-1 flex items-center justify-center">
              <img
                src="/art-3.png"
                alt="Art 3"
                className="sm:max-w-xl max-w-[350px]"
              />
              <div className="border-2 rounded-[5px] border-[#6D5C55] text-center sm:text-[16px] text-[10px] sm:px-2 sm:py-4  py-4 px-1 absolute bg-[#F1EDDD] sm:bottom-[23rem] bottom-[27rem]  ">
                As the sun peaked above the horizon, casting a golden glow over
                the <br></br> valley, a distant whistle echoed through the air,
                heralding the arrival of a<br></br> cross-country odyssey ..
              </div>
            </div>

            <AnimatePresence>
              {buttonOpacity && (
                <motion.button
                  onClick={() => setPage(3)}
                  className="bg-[#76728B] mt-5 py-2 px-10 text-[#F1EDDD] text-3xl border-[3px] border-[#6D5C55] block m-auto"
                  style={{
                    boxShadow:
                      "#F1EDDD 0px 0px 0px 2px, #6D5C55 0px 0px 0px 4px",
                    WebkitTextStroke: "0.4px #320C0C",
                  }}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 1 }}
                >
                  NEXT
                </motion.button>
              )}
            </AnimatePresence>

            <div className="w-px h-48 bg-[#6D5C55] mx-10 mt-20" />
          </motion.div>
        )}

        {page === 3 && (
         
         
       <>
        <div
        key="page-3"
        >
            <img src="/bg.png" className="w-full"  draggable="false" />
            </div>
          <div
            key="page-3"
            className="pt-10 flex items-center justify-between min-h-screen flex-col"
           
          >
            <div className="flex-1 flex items-center justify-center">
              <img
                src="/placeholder.png"
                alt="placeholder"
                className="sm:w-[1100px] w-[300px]"
              />
            </div>
            <div className="sm:flex space-y-10 gap-12">
              <div className="mt-10">
                <div className="font-Neela sm:text-[55px]">
                  LOREM IPSUM<br></br> DOLOR
                </div>
                <div>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                  <br></br> sed do eiusmod tempor incididunt ut labore et dolore
                  <br></br> magna aliqua. Ut enim ad minim veniam, quis nostrud
                  <br></br> exercitation ullamco laboris nisi ut aliquip ex ea
                  <br></br> commodo consequat. Duis aute irure dolor in<br></br>{" "}
                  reprehenderit in voluptate velit esse cillum dolore eu{" "}
                  <br></br>fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat<br></br> non proident, sunt in culpa qui officia
                  deserunt mollit<br></br> anim id est laborum.
                </div>

                <div className="mt-4">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                  <br></br> sed do eiusmod tempor incididunt ut labore et dolore
                  <br></br> magna aliqua. Ut enim ad minim veniam, quis nostrud
                  <br></br> exercitation ullamco laboris nisi ut aliquip ex ea
                  <br></br> commodo consequat.
                </div>
              </div>
              <div>
                <img src="/placeholde-rec.png" />
              </div>
            </div>

            <div className="mt-10">
              <img src="/placeholderbox.png" />
            </div>

            <Faq />
          </div>
          </>
        )}
      </AnimatePresence>
    </main>
  );
}
