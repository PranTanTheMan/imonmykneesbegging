<svg
  xmlns="http://www.w3.org/2000/svg"
  fill="none"
  viewBox="0 0 24 24"
  strokeWidth={1.5}
  stroke="currentColor"
  className="w-6 h-6"
>
  <path
    strokeLinecap="round"
    strokeLinejoin="round"
    d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
  />
</svg>;

import { motion } from "framer-motion";

const Loader = () => {
  return (
    <div className="grid place-content-center h-screen overflow-hidden bg-[#ffbad0] px-4 py-36">
      <Ping />
    </div>
  );
};

const LOOP_DURATION = 4;

const Ping = () => {
  return (
    <div className="relative">
      <Logo />
      <Band delay={0} />
      <Band delay={LOOP_DURATION * 0.25} />
      <Band delay={LOOP_DURATION * 0.5} />
      <Band delay={LOOP_DURATION * 0.75} />
    </div>
  );
};

const Logo = () => {
  return (
    <motion.svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      strokeWidth={0.2}
      stroke="#0000004c"
      className="relative z-10 fill-[#ffbad0] w-12 h-12"
      initial={{ opacity: 1, scale: 0.85 }}
      animate={{
        opacity: 1,
        scale: [1, 1.2, 1, 1.2, 1],
      }}
      transition={{
        repeat: Infinity,
        repeatType: "loop",
        times: [0, 0.25, 0.5, 0.75, 1],
        duration: 1.2,
        ease: "easeInOut",
      }}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
      />
    </motion.svg>
  );
};

const Band = ({ delay }: { delay: number }) => {
  return (
    <motion.span
      style={{
        translateX: "-50%",
        translateY: "-50%",
      }}
      initial={{
        opacity: 0,
        scale: 0.25,
      }}
      animate={{
        opacity: [0, 1, 1, 0],
        scale: 1,
      }}
      transition={{
        repeat: Infinity,
        repeatType: "loop",
        times: [0, 0.5, 0.75, 1],
        duration: LOOP_DURATION,
        ease: "linear",
        delay,
      }}
      className="absolute left-[50%] top-[50%] z-0 h-96 w-96 rounded-full border-[1px] border-[#eb3069] bg-gradient-to-br from-[#eb3069]/50 to-[#eb3069]/20 shadow-xl shadow-[#eb3069]/40"
    />
  );
};

export default Loader;
