"use client";
import React, { useState, useEffect, useRef } from 'react';
import './aa.css';

const CountUpAnimation = ({ title, target }) => {
  const [count, setCount] = useState(0);
  const [resetCount, setResetCount] = useState(false);
  const countRef = useRef(null);

  useEffect(() => {
    let currentCount = 0;
    let timer;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          if (resetCount) {
            setCount(0);
            setResetCount(false);
          }
          timer = setInterval(() => {
            if (currentCount < target) {
              setCount(currentCount + 1);
              currentCount++;
            } else {
              clearInterval(timer);
            }
          }, 0.1);
        } else {
          setResetCount(true);
          clearInterval(timer);
        }
      },
      { threshold: 1 }
    );

    if (countRef.current) {
      observer.observe(countRef.current);
    }

    return () => {
      if (countRef.current) {
        observer.unobserve(countRef.current);
      }
      clearInterval(timer);
    };
  }, [target, resetCount]);

  return (
    <div className="text-center mt-4 sm:mt-6" ref={countRef}>
      <h2 className="text-lg sm:text-2xl font-bold text-black mb-2 sm:mb-4">{title}</h2>
      <div className="text-xl sm:text-3xl font-bold" style={{ color: '#4361EE' }}>
        {count}+
      </div>
    </div>
  );
};
const CountUpGroup = () => {
  return (
    <div className="flex flex-col sm:flex-row justify-center sm:justify-evenly mt-4 sm:mt-8">
      <CountUpAnimation title="EVENTS" target={35} />
      <CountUpAnimation title="COLLEGES" target={170} />
      <CountUpAnimation title="FOOTFALL" target={25000} />
    </div>
  );
};

export default CountUpGroup;