import React from "react";
import GoToTopButton from "../../components/GoToTop/Go";
import Header from "../../components/Header/page";

export default function Sponsors() {

  const headings = ["TITLE SPONSER", "Our Supporters", "Our Contributors"];

  const sponsorsData = [
    [
      { src:  "/images/HCL.png", alt: "Logo 1", text: "", link: "https://example.com/company-a" },
      { src: "/images/HCL1.png", alt: "Logo 2", text: "", link: "https://example.com/company-b" },
    ],
    [
      { src: "/images/HCL.png", alt: "Logo 3", text: "", link: "https://example.com/company-c" },
      { src: "/images/HCL1.png", alt: "Logo 4", text: "", link: "https://example.com/company-d" },
    ],
    [
      { src: "/images/HCL1.png", alt: "Another Logo", text: "", link: "https://example.com/company-e" },
    ]
  ];

  return (
    <>
      <Header show={true} />
      <div
        className="bg-cover bg-fixed bg-center w-full"
        style={{ backgroundImage: "url('/images/teambg.png')" }}
      >
          <div className="py-10">
          <div className="max-w-screen-xl mx-auto px-4 md:px-8">
            <h1 className="mt-4 mb-10 text-white text-center text-4xl">
              Sponsors
            </h1>
            <h3 className="font-semibold text-sm text-gray-600 text-center">
              TRUSTED BY TEAMS FROM AROUND THE WORLD
            </h3>
            {/* Map over headings array to render headings dynamically */}
            {headings.map((heading, index) => (
              <div key={index}>
                <h2 className="text-2xl text-white text-center mt-12">{heading}</h2>
                <div className="mt-10">
                  <ul className="flex gap-y-6 flex-wrap items-center justify-center [&>*]:px-12 lg:divide-x">
                    {/* Use map to render UI elements dynamically */}
                    {sponsorsData[index].map((sponsor, sponsorIndex) => (
                      <li key={sponsorIndex} className="flex-none text-center">
                        <a href={sponsor.link} target="_blank" rel="noopener noreferrer">
                          <div>
                            <img src={sponsor.src} className="w-56 h-56" alt={sponsor.alt} />
                            <p className="text-white inline-flex">{sponsor.text}</p>
                          </div>
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>

        <footer class="bg-gray-700 w-full min-h-max bg-opacity-50">
          <div class="container flex flex-col items-center justify-between px-6 py-2 mx-auto lg:flex-row">
            <a href="/">
              <img
                className="w-28 h-18 md:w-32 md:h-22"
                src="/images/axislogo.png"
                alt=""
              />
            </a>

            <div class="flex flex-wrap items-center justify-center gap-3 mt-2 lg:gap-6 lg:mt-0">
              <a
                href="/Events"
                class="text-sm text-gray-600 transition-colors duration-300 dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400"
              >
                Events
              </a>

              <a
                href="/Workshop"
                class="text-sm text-gray-600 transition-colors duration-300 dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400"
              >
                Workshops
              </a>

              <a
                href="/Team"
                class="text-sm text-gray-600 transition-colors duration-300 dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400"
              >
                Teams
              </a>
            </div>

            <p class="mt-6 text-sm text-gray-500 lg:mt-0 dark:text-gray-400">
              © Copyright 2024. All Rights Reserved.
            </p>
          </div>
          <GoToTopButton />
        </footer>
        <GoToTopButton />
      </div>
    </>
  );
}
