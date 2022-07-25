import React from "react";
import { AiOutlineArrowRight } from "react-icons/ai";
import { AiOutlineArrowDown } from "react-icons/ai";
import { Link } from "react-scroll";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import ScrollToTop from "react-scroll-to-top";

const Home = () => {
  const particlesInit = async (main) => {
    console.log(main);

    await loadFull(main);
  };

  const particlesLoaded = (container) => {
    console.log(container);
  };
  const active = "h-96";
  return (
    <>
      <Particles
        id="tsparticles"
        init={particlesInit}
        loaded={particlesLoaded}
        height={active}
        options={{
          background: {
            color: {},
          },
          fpsLimit: 120,
          interactivity: {
            events: {
              onClick: {
                enable: true,
                mode: "push",
              },
              onHover: {
                enable: true,
                mode: "repulse",
              },
              resize: true,
            },
            modes: {
              push: {
                quantity: 4,
              },
              repulse: {
                distance: 200,
                duration: 0.4,
              },
            },
          },
          particles: {
            color: {
              value: "#E31B6D",
            },
            links: {
              color: "#ffffff",
              distance: 150,
              enable: true,
              opacity: 0.5,
              width: 1,
            },
            collisions: {
              enable: true,
            },
            move: {
              direction: "none",
              enable: true,
              outModes: {
                default: "bounce",
              },
              random: false,
              speed: 2,
              straight: false,
            },
            number: {
              density: {
                enable: true,
                area: 800,
              },
              value: 80,
            },
            opacity: {
              value: 0.5,
            },
            shape: {
              type: ["circle", "triangle", "image"],
            },
            size: {
              value: { min: 1, max: 5 },
            },
          },
          detectRetina: true,
        }}
      />

      <div
        id="/"
        className="  h-screen flex items-center justify-center bg-[#252934] text-white tracking-[3px]"
      >
        <div>
          <h1 className="text-center text-[25px] lg:text-[38px] leading-[50px] font-bold">
            Hello, I`m
            <span className="text-secondary ml-3 ">Abdul Dulal</span>
          </h1>
          <p className="text-center text-[25px] lg:text-[38px] leading-[42px] font-bold">
            I`m Front-End Developer
          </p>
          <Link
            to="portfolio"
            className="flex items-center  cursor-pointer border-[3px] ml-16 mt-6 lg:ml-24  text-[20px] border-white px-4 py-3 w-[250px] my-3 hover:bg-[#04C2C9] hover:border-[3px] hover:border-[#04C2C9] hover:text-white "
            spy={true}
            smooth={true}
            offset={50}
            duration={500}
            style={{}}
          >
            View my work
            {/* <span className="ml-3 ">
              <AiOutlineArrowRight />
            </span> */}
            <span className="ml-3 ">
              <AiOutlineArrowDown />
            </span>
          </Link>
        </div>
      </div>
      <ScrollToTop
        viewBox="0 0 175 256"
        smooth={true}
        top={20}
        color="#E31B6D"
      />
    </>
  );
};

export default Home;
