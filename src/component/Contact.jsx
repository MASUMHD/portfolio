import { motion } from "framer-motion";

const Contact = () => {
  return (
    <div id="contact" className="border-b border-neutral-900 pb-20">
      <section className="py-6 mt-10">
        <div className="text-center mb-20">
          <motion.h1i
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: -100 }}
            transition={{ duration: 1.5 }}
            className="text-4xl "
          >
            Contact
          </motion.h1i>
        </div>
        <div className="grid max-w-6xl grid-cols-1 px-6 mx-auto lg:px-8 md:grid-cols-2 ">
          <div className="py-6 md:py-0 md:px-6">
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -100 }}
              transition={{ duration: 1 }}
              className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-1 gap-5"
            >
              <div className="lg:w-96 min-h-32 border-2  shadow-lg rounded-lg p-5">
                <div>
                  <img
                    className="ml-5 pt-2 pb-3"
                    src="https://i.postimg.cc/x82nrSSc/Group-1171275317.png"
                    alt=""
                  />
                </div>
                <h3 className="ml-5 ">
                  <p className="text-base font-medium">Phone Number :</p>
                  <h4 className=" mt-2 text-base md:text-lg lg:text-xl font-extrabold">
                    (+880) <span className="hover:underline">01865455901</span>
                  </h4>
                </h3>
              </div>
              <div className="lg:w-96 min-h-32 border-2 p-5 shadow-lg rounded-lg">
                <div>
                  <img
                    className="ml-5 pt-2 pb-3"
                    src="https://i.postimg.cc/Wbpc08pL/Group-1171275318.png"
                    alt=""
                  />
                </div>
                <h3 className="ml-5 ">
                  <p className="text-base font-medium">Email :</p>
                  <h4 className=" mt-2 text-base md:text-lg lg:text-xl font-extrabold hover:underline">
                    mrmasum2k4@gmail.com
                  </h4>
                </h3>
              </div>
              <div className="lg:w-96 min-h-32 border-2 p-5 shadow-lg rounded-lg">
                <div>
                  <img
                    className="ml-5 pt-2 pb-3"
                    src="https://i.postimg.cc/wvYSMc4r/Group-1171275321.png"
                    alt=""
                  />
                </div>
                <h3 className="ml-5 ">
                  <p className="text-base font-medium">Location :</p>
                  <h4 className=" mt-2 text-base md:text-lg lg:text-xl font-extrabold">
                    khulna , Bangladesh
                  </h4>
                </h3>
              </div>

            </motion.div>
          </div>
          {/* Contact form */}
          <div className="mt-16 lg:mt-0 pt-3">
            <motion.div
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: -100 }}
              transition={{ duration: 1.5 }}
              className="text-center mb-5 lg:mb-14"
            >
              <h1 className="text-4xl font-bold">Get in touch</h1>
              <p className="pt-2 pb-4">
                Fill in the form to start a conversation
              </p>
            </motion.div>
            <motion.form
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: 100 }}
              transition={{ duration: 1 }}
              action="https://api.web3forms.com/submit"
              method="POST"
              className="flex flex-col py-6 space-y-6 md:py-0 md:px-6 "
            >
              <label className="block">
                <span className="mb-1 ">Full name</span>
                <input
                  type="hidden"
                  name="access_key"
                  value="e76285be-36f6-46b7-b67c-c5d7c3b2fb7f"
                ></input>
                <input
                  type="text"
                  name="name"
                  placeholder="Type your full name"
                  className="block w-full mt-1 text-black rounded-md shadow-sm p-2 focus:ring focus:ring-opacity-75 focus:dark:ring-default-600 dark:bg-gray-100"
                />
              </label>
              <label className="block">
                <span className="mb-1">Email address</span>
                <input
                  type="email"
                  name="email"
                  placeholder="Type your email"
                  className="block w-full mt-1 rounded-md shadow-sm p-2 focus:ring focus:ring-opacity-75 focus:dark:ring-default-600 text-black"
                />
              </label>
              <label className="block">
                <span className="mb-1">Message</span>
                <textarea
                  rows="3"
                  name="message"
                  placeholder="Type your message..."
                  className="block list mt-1 w-full text-black rounded-md focus:ring p-2 focus:ring-opacity-75 focus:dark:ring-default-600 dark:bg-gray-100"
                ></textarea>
              </label>
              <input
                className="self-start btn w-1/3 text-lg text-center btn-outline btn-primary text-white "
                type="submit"
                value="Submit"
              />
            </motion.form>
          </div>
        </div>
      </section>
      <div>
        <button></button>
      </div>
    </div>
  );
};

export default Contact;
