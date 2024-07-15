import { HERO_CONTENT } from "../constants";
// import profilePic from "../assets/kevinRushProfile.png";
import profilePic from "../assets/b.jpeg";
// import profilePic from "../assets/masumabut.jpeg";
import { motion } from "framer-motion";

const container = (delay) => ({
  hidden: { x: -100, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      delay: delay,
    },
  },
});

const iconVariants = (duration) => ({
  initial: { y: -10 },
  animate: {
    y: [15, -10],
    transition: {
      duration: duration,
      ease: "linear",
      repeat: Infinity,
      repeatType: "reverse",
    },
  },
});

const Hero = () => {
  return (
    <>
      {/* <div className="border-b border-neutral-900 pb-4 lg:mb-32">
        <div className="flex flex-wrap">
          <div className="w-full lg:h-1/2">
            <div className="flex flex-col items-center lg:items-start">
              <h1 className="pb-16 text-6xl font-thin tracking-tight lg:mt-16 lg:text-7xl">
                Hi, I'm Masum
              </h1>
              <span className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-transparent tracking-tight text-4xl">
                Front-End Developer
              </span>
              <p className="my-2 max-w-xl py-6 font-light tracking-tighter">
                {HERO_CONTENT}
              </p>
            </div>
          </div>
          <div className="w-full lg:h-1/2 lg:p-8">
            <div className="flex justify-center">
              <img src={profilePic} alt="" />
            </div>
          </div>
        </div>
      </div> */}

      <div className="lg:-mt-16 lg:pl-14 lg:pr-14">
        <section className="border-b border-neutral-900 pb-24 lg:pb-4 lg:mb-32">
          <div className="container flex flex-col justify-center p-0 lg:p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between">
            <div className="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left lg:ml-[2%]">
              <motion.h1
                variants={container(0)}
                initial="hidden"
                animate="visible"
                className="text-5xl font-thin tracking-tight leading-none sm:text-7xl"
              >
                Hi, I'm Masum
              </motion.h1>
              <motion.span
                variants={container(0.5)}
                initial="hidden"
                animate="visible"
                className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-transparent tracking-tight text-4xl mt-10"
              >
                Front-End Developer
              </motion.span>
              {/* from-green-500 via-slate-500 to-rose-500 bg-clip-text text-transparent */}
              <motion.p
                variants={container(1)}
                initial="hidden"
                animate="visible"
                className="my-2 max-w-xl py-6 font-light tracking-tighter text-lg bg-gradient-to-r "
              >
                <i>{HERO_CONTENT}</i>
              </motion.p>
              <div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
                <motion.a
                  variants={container(1.5)}
                  initial="hidden"
                  animate="visible"
                  rel="noopener noreferrer"
                  href="#"
                  className="px-8 py-3 text-lg font-semibold rounded dark:bg-default-600 dark:text-gray-50"
                >
                  Resumen
                </motion.a>
                <motion.a
                  variants={container(2)}
                  initial="hidden"
                  animate="visible"
                  rel="noopener noreferrer"
                  href="#"
                  className="px-8 py-3 text-lg font-semibold border rounded dark:border-gray-800"
                >
                  Contact
                </motion.a>
              </div>
            </div>
            <div className="flex items-center pt-0 lg:pt-40  justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
              <motion.div
                variants={iconVariants(2.5)}
                initial="initial"
                animate="animate"
                className="lg:-ml-[30%]"
              >
                <motion.img
                  initial={{ x: 100, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 1, delay: 1.2 }}
                  src={profilePic}
                  alt=""
                  className="object-contain h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128 rounded-2xl shadow-2xl shadow-purple-800 "
                />
              </motion.div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Hero;
