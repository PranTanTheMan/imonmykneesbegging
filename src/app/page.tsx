"use client";
import { useState, useEffect } from "react";
import Loader from "@/components/Loader";
import { motion } from "framer-motion";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const [isYesButtonClicked, setIsYesButtonClicked] = useState(false);
  const [noButtonPosition, setNoButtonPosition] = useState({ x: 0, y: 0 });
  const [noButtonInteractionCount, setNoButtonInteractionCount] = useState(0);

  const getRandomThreshold = () => {
    const thresholds = [2, 3, 4];
    return thresholds[Math.floor(Math.random() * thresholds.length)];
  };

  const [nextAlertThreshold, setNextAlertThreshold] = useState(
    getRandomThreshold()
  );

  const alertMessages = [
    "Playing hard to get, huh?",
    "PLEASE PLEASE PLEASE just say yes already!",
    "cmon please, im begging you 🙏",
    "I'm begging, on my knees, please say yes! 🥺",
  ];

  const handleNoButtonHover = () => {
    const randomX = Math.floor(Math.random() * 301);
    const randomY = Math.floor(Math.random() * 301);
    setNoButtonPosition({ x: randomX, y: randomY });

    setNoButtonInteractionCount((prevCount) => prevCount + 1);

    if (noButtonInteractionCount + 1 === nextAlertThreshold) {
      const alertIndex = Math.floor(Math.random() * alertMessages.length);

      alert(alertMessages[alertIndex]);

      setNextAlertThreshold(
        noButtonInteractionCount + 1 + getRandomThreshold()
      );
    }
  };

  const handleYesButtonClick = () => {
    setIsYesButtonClicked(true);

    const audio = new Audio("/rizz.mp3");
    audio.play();
  };

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : isYesButtonClicked ? (
        <>
          <div className="h-screen flex flex-col bg-[#ffbad0] w-full justify-start py-10 items-center">
            <h1 className="text-5xl font-medium">
              Hit me up bbg,{" "}
              <span className="text-[#eb3069] font-black">srik_the_pal</span> on
              insta
            </h1>
            <motion.img
              src="/srikarMog.png"
              alt="instagram"
              className="h-[56rem] mt-10"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.2, ease: "easeIn" }}
            />
          </div>
        </>
      ) : (
        <>
          <div className="bg-[#ffbad0] flex flex-col items-center justify-start pt-16 h-screen">
            <h1 className="text-7xl max-w-6xl leading-snug text-center text-[#eb3069] font-bold mb-8">
              Can I have the privilege of getting to know you?
            </h1>
            <div className="flex space-x-4">
              <RoundedSlideButton text="Yes" onClick={handleYesButtonClick} />
              <motion.div
                onHoverStart={handleNoButtonHover}
                onTapStart={handleNoButtonHover}
                initial={{ x: 0, y: 0 }}
                animate={{ x: noButtonPosition.x, y: noButtonPosition.y }}
                transition={{ type: "spring", stiffness: 100 }}
              >
                <RoundedSlideButton text="No" onClick={() => {}} />
              </motion.div>
            </div>
          </div>
        </>
      )}
    </>
  );
}

const RoundedSlideButton = ({
  text,
  onClick,
}: {
  text: string;
  onClick: () => void;
}) => {
  return (
    <button
      onClick={onClick}
      className={`
        relative z-0 flex items-center gap-2 overflow-hidden rounded-lg border-[1px] 
        border-[#E5537F] px-16 py-3 font-semibold
        uppercase text-[#E5537F] transition-all duration-500
        
        before:absolute before:inset-0
        before:-z-10 before:translate-x-[150%]
        before:translate-y-[150%] before:scale-[2.5]
        before:rounded-[100%] before:bg-[#E5537F]
        before:transition-transform before:duration-1000
        before:content-[""]

        hover:scale-105 hover:text-neutral-900
        hover:before:translate-x-[0%]
        hover:before:translate-y-[0%]
        active:scale-95`}
    >
      <span>{text}</span>
    </button>
  );
};
