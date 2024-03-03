import { useRef, useLayoutEffect, useState, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { slideUp } from "./animation";
import { motion } from "framer-motion";
import Header from '../Header';

export default function Home() {
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 500);
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);
  const videoRef = useRef(null);

  const slider = useRef(null);
  let direction = -1;

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.to(slider.current, {
      scrollTrigger: {
        trigger: document.documentElement,
        scrub: 0.25,
        start: 0,
        end: window.innerHeight,
        onUpdate: (e) => (direction = e.direction * -1),
      },
      x: "-500px",
    });
  }, []);

  return (
    <>
      <Header show={true} />

      <div>
        <div className={isSmallScreen ? "hidden sm:block" : "block"}>
          <motion.main
            variants={slideUp}
            initial="initial"
            animate="enter"
            className="flex "
          >
            <div className="relative items-center w-full h-full">
              <div className="absolute left-0 pl-14 text-white z-10 w-2/3 top-9">
                <br />
                <br />
                <br />
                <br />
                <img
                  src="/images/axis24ogocenter.png"
                  alt="Image"
                  className="w-full h-full pb-14 pr-10"
                />
              </div>
              <div
                className="relative w-full"
                style={{ paddingBottom: "56.25%" }}
              >
                <video
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="absolute w-full h-auto object-cover z-0"
                >
                  <source src="/video/bgvideo1.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
            </div>
          </motion.main>
        </div>

        <div className={isSmallScreen ? "block" : "hidden sm:hidden"}>
          <motion.main
            variants={slideUp}
            initial="initial"
            animate="enter"
            className="flex "
          >
            <div className="relative items-center w-full h-full">
              <div className="absolute left-0 pl-14 text-white z-10 w-full top-9">
                <br />
                <br />
                <br />
                <br />
                <img
                  src="/images/axis24ogocenter.png"
                  alt="Image"
                  className="w-screen h-auto md:w-full md:h-full mt-16 pr-10"
                />
              </div>
              <div
                className="relative w-full"
                style={{ paddingBottom: "180.25%" }}
              >
                <video
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="absolute w-full h-auto object-cover z-0"
                >
                  <source src="/video/bgvideo.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
            </div>
          </motion.main>
        </div>
      </div>
    </>
  );
}
