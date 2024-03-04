"use client";
import React, { useState } from "react";
import "./W.css";
import WorkshopForm from "../RegiForms/WorkshopForm";
import { useEffect } from "react";
import Header from "../../components/Header";
import GoToTopButton from "../../components/GoToTop/Go";

const PostCard = ({ title, date, imageSrc, description, id }) => {
  const [showForm, setShowForm] = useState(false);
  const [dbUser, setDbUser] = useState({});
  const openForm = () => {
    setShowForm(true);
    document.body.style.overflow = "hidden";
  };

  const closeForm = () => {
    setShowForm(false);
    document.body.style.overflow = "auto";
  };

  useEffect(() => {
    const checkProfile = async () => {
      try {
        const res = await fetch("/api/getProfile", {
          method: "GET",
        });

        if (res.status === 200) {
          const data = await res.json();
          const User = data.user;
          setDbUser(User);
        }
      } catch (error) {
        console.log("Error ", error);
      }
    };

    checkProfile();
  }, []);

  return (
  
      <div className="transition-shadow duration-300 bg-transparent rounded shadow-lg">
        {showForm && (
          <div className="fixed top-0 left-0 pt-20 w-full h-full flex items-center justify-center bg-gray-900 bg-opacity-95 z-50 overflow-y-auto">
            <div className="max-w-md w-full bg-transparent p-8 rounded-md shadow-lg">
              <button
                onClick={closeForm}
                className="absolute top-4 right-4 text-white hover:text-gray-800"
              >
                <svg
                  className="w-8 h-8 mr-6 mt-8 backdrop:blur-md"
                  fill="black"
                  stroke="white"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  ></path>
                </svg>
              </button>
              <WorkshopForm id={id} title={title} user={dbUser} />
            </div>
          </div>
        )}
        <img src={imageSrc} alt="" className="object-cover w-full h-64" />
        <div className="p-5 border-t-0">
          <p className="mb-2 text-center text-lg font-semibold tracking-wide uppercase">
            <a
              href="/"
              className="transition-colors duration-200 text-white hover:text-deep-purple-accent-700"
              aria-label="Category"
              title="traveling"
            >
              {title}
            </a>
            <br></br>
            <span className="text-gray-600"> {date}</span>
          </p>
          <p className="mb-1 text-gray-200 text-center">{description}</p>
          <div className="flex flex-row justify-between rounded-md">
            <button onClick={openForm} className="button-wrapper">
              <div class="back">
                <div class="button_base b03_skewed_slide_in rounded-md">
                  <div>Register Now!</div>
                  <div></div>
                  <div>Register Now!</div>
                </div>
              </div>
            </button>
            <button onClick={openForm} className="button-wrapper pr-12">
              <div class="back">
                <div class="button_base b03_skewed_slide_in rounded-md">
                  <div>Know More...</div>
                  <div></div>
                  <div>Know More...</div>
                </div>
              </div>
            </button>
          </div>
        </div>
      </div>
  );
};

export default function Index() {
  const [events, setEvents] = useState({});
  const [loading, setLoading] = useState(true);
  const cat = "Workshop";
  useEffect(() => {
    async function fetchEvents() {
      try {
        const response = await fetch("/api/getEvents", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            "event-type": 2,
            category: cat,
          },
        });

        if (!response.ok) {
          throw new Error("Failed to fetch events");
        }

        const eventsData = await response.json();
        setEvents(eventsData);
      } catch (error) {
        console.log("Error fetching events:", error);
      }
    }

    fetchEvents();
  }, []);

  const Events = events && events.events;
  useEffect(() => {
    if (Object.keys(events).length > 0) {
      setLoading(false);
    }
  }, [events]);

  return (
    <>
      {loading ? (
        <div className="loader-container">
          <div className="loader"></div>
        </div>
      ) : (
        <>
          <Header show={true} />
          <div className=" bg-cover bg-fixed bg-center w-full" style={{ backgroundImage: "url('/images/teambg.png')" }}>
          <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
            <div className="grid gap-8 lg:grid-cols-3 sm:max-w-sm sm:mx-auto lg:max-w-full">
              {Events &&
                Events.map((event, index) => (
                  <PostCard
                    id={event._id}
                    key={index}
                    title={event.evename}
                    date={event.date}
                    imageSrc={event.img1}
                    description={event.desc}
                  />
                ))}
            </div>
          </div>

          <footer class="bg-gray-700 bg-opacity-50">
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
              href="/"
              class="text-sm text-gray-600 transition-colors duration-300 dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400"
            >
              Events
            </a>

            <a
              href="/"
              class="text-sm text-gray-600 transition-colors duration-300 dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400"
            >
              Sponsers
            </a>

            <a
              href="/"
              class="text-sm text-gray-600 transition-colors duration-300 dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400"
            >
              Workshops
            </a>
          </div>

          <p class="mt-6 text-sm text-gray-500 lg:mt-0 dark:text-gray-400">
            © Copyright 2024. All Rights Reserved.
          </p>
        </div>
          </footer>

          <GoToTopButton />
          </div>
        </>
      )}
    </>
  );
}
