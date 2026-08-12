import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Navbar from './components/Navbar/navbar'
import Hero from './components/sections/hero/Hero'
import SideButtons from './components/slideButton'
import Features from './components/sections/features/Features'
import Sharing from './components/sections/sharing/Sharing'
import Testimonials from './components/sections/testimonials/Testimonials'
import Work from './components/sections/work/Work'
import Skills from './components/sections/skills/Skills'
import Counters from './components/sections/Counters/Counters'
import Team from './components/sections/Team/Team'
import Products from './components/sections/Products/Products'
import Tweets from './components/sections/Tweets/Tweets'
import Clients from './components/sections/Clients/Clients'
import Solutions from './components/sections/Solutions/Solutions'
import Footer from './components/Footer/Footer'
function App() {
 

  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {

    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };

  }, []);
  return (
  <div>
    <Navbar scrolled={scrolled}/>
    <SideButtons scrolled={scrolled} />
    <Hero/>
    <Features/>
    <Sharing/>
    <Testimonials/>
     <Skills/>
    <Work/>
   <Counters/>
   <Team/>
   <Products/>
   <Tweets/>
   <Clients/>
   <Solutions/>
   <Footer/>

  </div>
  )
}

export default App
// import ParallaxBackground from "./components/parallax/ParallaxBackground";
// import par from "./assets/img1.jpg";
// function App() {
//   return (
//     <div
//       style={{
//         position: "relative",
//         height: "800px",
//         overflow: "hidden",
//       }}
//     >
//       <ParallaxBackground
//         image={par}
//         speed={0.15}
//       />

//       <div
//         style={{
//           position: "relative",
//           zIndex: 2,
//           color: "white",
//           textAlign: "center",
//           paddingTop: "300px",
//           fontSize: "50px",
//         }}
//       >
//         TEST PARALLAX
//       </div>
//     </div>
//   );
// }

// export default App;