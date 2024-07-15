
import aboutImg from "../assets/cc.jpeg";
import { motion } from "framer-motion";
import { PiArrowLineDown } from "react-icons/pi";

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

const About = () => {
  return (
    <div>
      <div className="border-b border-neutral-900 pb-4">
        <motion.h1
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: -100 }}
          transition={{ duration: 1.5 }}
          className="text-4xl my-5 text-center"
        >
          About <span className="text-neutral-500">Me</span>
        </motion.h1>

        <section className="lg:pl-24 lg:pr-24">
          <div className="container flex flex-col justify-center p-0 lg:p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row ">
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
              className="flex  items-center justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128 lg:pt-10 lg:mr-10 "
            >
              <motion.div
                variants={iconVariants(2.5)}
                initial="initial"
                animate="animate"
              >
                <div className="relative">
                  <img
                    src={aboutImg}
                    alt=""
                    className=" object-contain h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128 rounded-2xl lg:mt-16 shadow-2xl shadow-purple-600  "
                  />
                  <div className="bg-gradient-to-t from-black/50 to-black/5 w-full h-full absolute top-0 rounded-2xl text-white flex justify-center md:justify-start"></div>
                </div>
              </motion.div>
            </motion.div>

            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: 100 }}
              transition={{ duration: 0.5 }}
              className="flex flex-col justify-center p-6 text-center rounded-sm lg:w-full xl:max-w-3xl lg:text-left mt-10 lg:mt-0 lg:border-l-2 lg:border-dashed border-neutral-500 "
            >
              <p className=" font-light tracking-tighter text-lg lg:text-xl ">
                {/* {ABOUT_TEXT} */}I am a dedicated Junior web developer with a
                strong proficiency in a wide range of technologies essential for
                modern web development. My skill set includes HTML, CSS,
                JavaScript, Tailwind CSS for responsive design, and a robust
                backend stack comprising Node.js, Express.js, and MongoDB for
                server-side logic and database management.
              </p>
              <br />
              <p className=" font-light tracking-tighter text-lg lg:text-xl ">
                I recently completed the Programming Hero web development
                course, where I gained practical experience and earned a
                certificate to validate my skills.
              </p>
              <br />
              <p className=" font-light tracking-tighter text-lg lg:text-xl ">
                I am passionate about crafting user-friendly interfaces and
                scalable web applications that merge functionality with
                aesthetic appeal. With a keen interest in leveraging emerging
                technologies and best practices, I am committed to continuous
                learning and growth within the dynamic field of web development.
              </p>
              <br />
              <a href="../../public/Certificate.pdf" download>
                <motion.button
                  variants={iconVariants(5)}
                  initial="initial"
                  animate="animate"
                  className="bg-gray-400 text-black font-bold text-base btn w-44 lg:mx-0 mx-auto"
                >
                  Download CV{" "}
                  <span>
                    <PiArrowLineDown />
                  </span>
                </motion.button>
              </a>
            </motion.div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;
