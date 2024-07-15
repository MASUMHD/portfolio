const Education = () => {
  return (
    <div className="border-b border-neutral-900 pb-20 mt-16">
      <div className="text-center mb-10">
        <h1 className="text-4xl">Qualifications</h1>
        <p className="text-base mt-2">My Personal Journey</p>
        <div className="lg:flex-row text-center justify-center mt-10 text-2xl">
          <button className="btn text-2xl lg:mr-5">
            <img
              className="w-9 h-9"
              src="../../public/mortarboard.png"
              alt=""
            />
            <span>Education</span>
          </button>
          <button className="btn text-2xl mt-5 lg:mt-0 lg:ml-5">
            <img className="w-8 h-8" src="../../public/suitcase.png" />
            <span>Experience </span>
          </button>
        </div>
      </div>
      <ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical">
        <li>
          <div className="timeline-middle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="h-5 w-5"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <div className="timeline-start mb-10 md:text-end">
            <div className="text-lg font-black">
              Computer Science and Technology (CST)
            </div>
            City Polytechnic Institute, khulna <br />
            <time className="font-mono italic">2022-Present</time>
          </div>
          <hr />
        </li>
        <li>
          <hr />
          <div className="timeline-middle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="h-5 w-5"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <div className="timeline-end mb-10">
            <div className="text-lg font-black">Web Development Projects</div>
            Programming Hero
            <br />
            <time className="font-mono italic">2024</time>
          </div>
          <hr />
        </li>
        <li>
          <hr />
          <div className="timeline-middle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="h-5 w-5"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <div className="timeline-start mb-10 md:text-end">
            
            <div className="text-lg font-black">
              Secondary School Certificate (SSC)
            </div>
            Jhaudanga Secondary School, Satkhira
            <br />
            <time className="font-mono italic">2019-2020</time>
          </div>
          <hr />
        </li>
      </ul>
    </div>
  );
};

export default Education;
