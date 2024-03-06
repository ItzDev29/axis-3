'use client';
import styles from './page.module.scss'
import { useEffect, useState } from 'react'
import { AnimatePresence } from 'framer-motion';
import Preloader from '../components/Preloader';
import Landing from '../components/Landing';
import Projects from '../components/Projects';
import SlidingImages from '../components/SlidingImages';
import Contact from '../components/Contact';
import GoToTopButton from '../components/GoToTop/Go';
import Director from '../components/Director/Director';
import Count from '../components/Count/page';
import Line from '../components/Line/page';
import Speaker from '../components/Speakers/Speaker';
import Theme from '../components/Themevideo/page';
import { signOut, useSession } from "next-auth/react";

export default function App(){
  const [isLoading, setIsLoading] = useState(true);
 const { data: session, status } = useSession();
  const userId = session?.user;
  useEffect( () => {
    (
      async () => {
          const LocomotiveScroll = (await import('locomotive-scroll')).default
          const locomotiveScroll = new LocomotiveScroll();
if(status != "loading"){
          setTimeout( () => {
            setIsLoading(false);
            document.body.style.cursor = 'default'
            window.scrollTo(0,0);
          }, 3000)
        }
      }
    )()
  }, [status])

  return (
    <main className={styles.main} >
      <AnimatePresence mode='wait'>
        {isLoading && <Preloader />}
      </AnimatePresence>
      <Landing />
      <Count/>
      <Director/>
      <Line/>
      <Theme/>
      <Projects />
      <Speaker/>
      <SlidingImages />
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <GoToTopButton/>
      <Contact />
    </main>
  )
}
