
// import { useEffect, useRef } from 'react';
// import AvatarGenerator from './Sections/AvatarGenerator'
// import Exercise from './Sections/Exercise'
// import HomePage from './Sections/HomePage'
// import gsap from 'gsap';
// import { ScrollTrigger } from 'gsap/ScrollTrigger';
// import LocomotiveScroll from 'locomotive-scroll';
// function App() {

//   const mainRef = useRef(null);
  
//   useEffect(() => {
//     const locoScroll = new LocomotiveScroll({
//       el: mainRef.current,
//       smooth: true, // Enables smooth scrolling
//       lerp: 0.1, // Adjust scrolling smoothness
//       multiplier: 1, // Speed control
//     });

//     locoScroll.on('scroll', ScrollTrigger.update);

//     ScrollTrigger.scrollerProxy(mainRef.current, {
//       scrollTop(value) {
//         return arguments.length
//           ? locoScroll.scrollTo(value, 0, 0)
//           : locoScroll.scroll.instance.scroll.y;
//       },
//       getBoundingClientRect() {
//         return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
//       },
//     });

//     ScrollTrigger.addEventListener('refresh', () => locoScroll.update());
//     ScrollTrigger.refresh();

//     return () => {
//       ScrollTrigger.removeEventListener('refresh', () => locoScroll.update());
//       locoScroll.destroy();
//     };
//   }, []);
  
//   return (
    
//     <main  ref={mainRef} >
//       <HomePage />
//       <AvatarGenerator />
//       <Exercise />
      
//     </main>
//   )
// }

// export default App

import { useEffect, useRef } from 'react';
import AvatarGenerator from './Sections/AvatarGenerator';
import Exercise from './Sections/Exercise';
import HomePage from './Sections/HomePage';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import LocomotiveScroll from 'locomotive-scroll';

gsap.registerPlugin(ScrollTrigger); // Make sure ScrollTrigger is registered

function App() {
  const mainRef = useRef(null);

  useEffect(() => {
    if (!mainRef.current) return; // Ensure mainRef is not null

    const locoScroll = new LocomotiveScroll({
      el: mainRef.current,
      smooth: true, 
      lerp: 0.1, 
      multiplier: 1,
    });

    locoScroll.on('scroll', ScrollTrigger.update);

    ScrollTrigger.scrollerProxy(mainRef.current, {
      scrollTop(value) {
        return arguments.length
          ? locoScroll.scrollTo(value, 0, 0)
          : locoScroll.scroll.instance?.scroll.y || 0;
      },
      getBoundingClientRect() {
        return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
      },
    });

    ScrollTrigger.addEventListener('refresh', () => locoScroll.update());
    ScrollTrigger.refresh();

    return () => {
      ScrollTrigger.removeEventListener('refresh', () => locoScroll.update());
      locoScroll.destroy();
    };
  }, []);

  return (
    <main ref={mainRef}>
      <HomePage />
      <AvatarGenerator />
      <Exercise />
    </main>
  );
}

export default App;
