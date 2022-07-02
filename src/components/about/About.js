import React from "react";
import responsvie from "../../assets/icon/responsive.png";
import fast from "../../assets/icon/fast.png";
import inutive from "../../assets/icon/inn.png";
import dynamic from "../../assets/icon/dynamic.png";
import AboutChild from "./AboutChild";
import myImage from "../../assets/myImage.jpg";

const About = () => {
  return (
    <>
      <div id="about" className="text-center py-10">
        <h4 className=" text-primary text-4xl z-0  relative  inline-block px-1 font-semibold uppercase after:absolute after:-bottom-6 after:right-0 after:-z-10 after:h-1 after:w-16 after:mr-9 after:-translate-y-2 after:bg-primary after:content-['']">
          About
        </h4>
      </div>
      <div className="grid sm:grid-cols-3 lg:grid-cols-4 gap-6 md:grid-cols-2  lg:px-48">
        <AboutChild
          img={fast}
          title="fast"
          subTitle="Fast load times and lag free interaction, my highest priority."
        />
        <AboutChild
          img={responsvie}
          title="Responsive"
          subTitle="My layouts will work on any device, big or small."
        />
        <AboutChild
          img={inutive}
          title="Intuitive"
          subTitle="Strong preference for easy to use, intuitive UX/UI."
        />
        <AboutChild
          img={dynamic}
          title="Dynamic"
          subTitle="Websites don't have to be static, I love making pages come to life."
        />
      </div>
      <div className="grid lg:grid-cols-2 gap-4 lg:px-48">
        <div>
          <div class="avatar flex justify-center mt-6">
            <div class="w-[300px] mask mask-hexagon ">
              <img src={myImage} alt="" />
            </div>
          </div>
          <div className="text-center ">
            <h1 className="text-3xl font-bold text-primary py-4 ">
              Who's this guy?
            </h1>
            <p className="text-[18px]">
              I'm a Front-End Developer. I have serious passion for UI effects,
              <br /> animations and creating intuitive, dynamic user
              experiences. <br />
              <span className="text-[#00A1A7] font-bold">
                Let's make something special.
              </span>
            </p>
          </div>
        </div>
        <div className=" flex  items-center px-4 lg:px-0">
          <div>
            <h1 className="text-3xl font-bold  lg:text-primary">Skills</h1>
            <div className="mt-2">
              <h1 className="text-xl font-bold text-primary  mb-2">
                Front-End
              </h1>
              <div className="">
                <ul className="flex flex-col lg:flex-row  my-2 gap-3">
                  <li className="bg-secondary text-white ml-2 px-4 py-0 overflow-hidden">
                    HTML
                  </li>
                  <li>
                    <li className="bg-secondary text-white px-4 py-0 ml-2">
                      CSS
                    </li>
                  </li>
                  <li className="bg-secondary text-white px-4 py-0 ml-2">
                    Tailwind
                  </li>
                  <li className="bg-secondary text-white px-4 py-0 ml-2">
                    Bootstrap
                  </li>
                  <li className="bg-secondary text-white px-4 py-0 ml-2">
                    JavaScript
                  </li>
                  <li className="bg-secondary text-white px-4 py-0 ml-2 ">
                    React
                  </li>
                </ul>
              </div>
            </div>
            <div className="mt-2">
              <h1 className="text-xl font-bold text-primary  mb-2">Back-End</h1>
              <div className="">
                <ul className="flex flex-col lg:flex-row  my-2 gap-3">
                  <li className="bg-secondary text-white ml-2 px-4 py-0 overflow-hidden">
                    Node Js
                  </li>
                  <li className="bg-secondary text-white px-4 py-0 ml-2">
                    Express Js
                  </li>
                  <li className="bg-secondary text-white px-4 py-0 ml-2">
                    MongoDb
                  </li>
                  <li className="bg-secondary text-white px-4 py-0 ml-2">
                    Firebase Authentication
                  </li>
                </ul>
              </div>
            </div>
            <div className="mt-2">
              <h1 className="text-xl font-bold text-primary  mb-2">Tools</h1>
              <div className="">
                <ul className="flex flex-col lg:flex-row  my-2 gap-3">
                  <li className="ml-2 bg-secondary text-white px-4 py-0 overflow-hidden">
                    Vs Code
                  </li>
                  <li className="bg-secondary text-white px-2 py-0 ml-2">
                    Git
                  </li>
                  <li className="bg-secondary text-white px-2 py-0 ml-2">
                    Chroome Dev Tools
                  </li>
                  <li className="bg-secondary text-white px-2 py-0 ml-2">
                    Firebase
                  </li>
                  <li className="bg-secondary text-white px-2 py-0 ml-2">
                    Netlify
                  </li>
                  <li className="bg-secondary text-white  py-0 ml-2">Heroku</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
