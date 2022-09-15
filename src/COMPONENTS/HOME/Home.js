import "../../SASS/HOME/home.scss";
import "../../SASS/HOME/first-section.scss";
import "../../SASS/HOME/second-section.scss";
import "../../SASS/HOME/third-section.scss";
import "../../SASS/HOME/four-section.scss";
//
import SmoothScroller from "../../HOOKS/Smoothscroller";
import BackgroundContainer from "./Background-Container";
//
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ReactPlayer from "react-player";

gsap.registerPlugin(ScrollTrigger);

function Home() {
  const clipshape1 = useRef();
  const clipshape2 = useRef();
  const clipshape3 = useRef();
  const clipshape4 = useRef();
  const leftsidebg = useRef();
  const framebg = useRef();
  const circle1 = useRef();
  const circle2 = useRef();
  const pageoverallwarperRef = useRef();
  const scrollbarstate = useRef();
  const loadingpage = useRef();

  const [isShown, setIsShown] = useState(true);
  const [isplayervisible, setVolume] = useState();
  const [loadstate, setLoadstate] = useState(0);
  const [loadedfilecount, setIsloadedfilecount] = useState(null);
  const [isloaded, setIsloaded] = useState(false);

  const [isimageloaded, setIsimageLoaded] = useState({
    img1: null,
    img2: null,
    img3: null,
    img4: null,
    img5: null,
    img6: null,
    img7: null,
    video1: null,
  });

  const handleClick = () => {
    scrollbarstate.current.torainbowsection();
    setVolume(0);
  };

  const handleClick2 = () => {
    scrollbarstate.current.torainbowsectiononback();
    setIsShown(!isShown);
  };
  //Gsap firstSection
  useEffect(() => {
    gsap.to(clipshape1.current, {
      scrollTrigger: {
        trigger: ".home-second-section",
        start: "top 100%",
        end: "top 0%",
        onEnter: () => {
          "play";
        },
        onEnterBack: () => {
          "reverse";
        },
        scrub: 1,
      },
      keyframes: {
        "0%": { "clip-path": "polygon(0 0, 25.1% 0, 25.1% 75%, 0% 100%)" },
        "75%": { "clip-path": "polygon(0 75%, 25.1% 75%, 25.1% 75%, 0% 100%)" },
        "100%": { "clip-path": "polygon(0 100%, 0% 100%, 0% 100%, 0% 100%)" },
        easeEach: "none",
      },
      duration: 3,
    });
    gsap.to(clipshape2.current, {
      scrollTrigger: {
        trigger: ".home-second-section",
        start: "top 100%",
        end: "top 0%",
        onEnter: () => {
          "play";
        },
        onEnterBack: () => {
          "reverse";
        },
        scrub: 1,
      },
      keyframes: {
        "0%": {
          "clip-path": "polygon(25% 0%, 100% 0%, 100% 0, 25% 75%)",
        },
        " 100%": {
          "clip-path": "polygon(25% 0%, 25% 0%, 25% 75%, 25% 75%)",
        },
        easeEach: "none",
      },
      duration: 3,
    });
    gsap.to(clipshape3.current, {
      scrollTrigger: {
        trigger: ".home-second-section",
        start: "top 100%",
        end: "top 0%",
        onEnter: () => {
          "play";
        },
        onEnterBack: () => {
          "reverse";
        },
        scrub: 1,
      },
      keyframes: {
        "0%": {
          "clip-path": "polygon(0% 99.9%, 50% 49%, 50% 100%, 0 100%)",
        },
        " 100%": {
          "clip-path": "polygon(50% 49.8%, 50% 49.9%, 50% 100%, 50% 100%)",
        },
        easeEach: "none",
      },
      duration: 3,
    });
    gsap.to(clipshape4.current, {
      scrollTrigger: {
        trigger: ".home-second-section",
        start: "top 100%",
        end: "top 0%",
        onEnter: () => {
          "play";
        },
        onEnterBack: () => {
          "reverse";
        },
        scrub: 1,
      },
      keyframes: {
        "0%": {
          "clip-path":
            "polygon(49.4% 49.7%, 100% -0.3%, 100% 100%, 49.5% 100%)",
        },
        "50%": {
          "clip-path": "polygon(49.9% 49.9%, 100% -0.1%, 100% 50%, 49.9% 50%)",
        },
        "100%": {
          "clip-path": "polygon(100% 0%, 100% 0%, 100% 0%, 100% 0%)",
        },
        easeEach: "none",
      },
      duration: 3,
    });
    gsap.to(leftsidebg.current, {
      marginTop: "0%",
      scrollTrigger: {
        trigger: ".home-second-section",
        start: "top 80%",
        end: "top 0%",
        onEnter: () => {
          "play";
        },
        onEnterBack: () => {
          "reverse";
        },
        scrub: 1,
      },
    });
    gsap.to(framebg.current, {
      scrollTrigger: {
        trigger: ".home-second-section",
        start: "top 95%",
        end: "top 0%",
        onEnter: () => {
          "play";
        },
        onEnterBack: () => {
          "reverse";
        },
        scrub: 1,
      },
      keyframes: {
        "0%": {
          "clip-path":
            "polygon(0% 0%, 0% 100%, 1% 98%, 1% 2%, 99% 2%, 99% 98%, 0% 98%, 0 100%, 100% 100%, 100% 0%)",
        },
        "100%": {
          "clip-path":
            "polygon(0% 0%, 0% 100%, 0 100%, 0 0, 100% 0, 100% 100%, 0 100%, 0 100%, 100% 100%, 100% 0%)",
        },
        easeEach: "none",
      },
      duration: 3,
    });
    gsap.to(circle1.current, {
      rotation: -360,
      scrollTrigger: {
        trigger: ".home-second-section",
        start: "top 100%",
        end: "top 0%",
        onEnter: () => {
          "play";
        },
        onEnterBack: () => {
          "reverse";
        },
        scrub: 1,
      },
    });
    gsap.to(circle2.current, {
      rotation: -360,
      scrollTrigger: {
        trigger: ".home-second-section",
        start: "top 100%",
        end: "top 0%",
        onEnter: () => {
          "play";
        },
        onEnterBack: () => {
          "reverse";
        },
        scrub: 1,
      },
    });
    gsap.to("#text-bg-layer-text1", {
      opacity: 0,
      scrollTrigger: {
        trigger: ".home-second-section",
        start: "top 15%",
        end: "top 0%",
        onEnter: () => {
          "play";
        },
        onEnterBack: () => {
          "reverse";
        },
        scrub: 1,
      },
    });
    gsap.to("#text-bg-layer-text1", {
      opacity: 0,
      scrollTrigger: {
        trigger: ".home-second-section",
        start: "top 20%",
        end: "top 5%",
        onEnter: () => {
          "play";
        },
        onEnterBack: () => {
          "reverse";
        },
        scrub: 1,
      },
    });
    gsap.to("#text-bg-layer-text1_1", {
      y: "160vh",
      scrollTrigger: {
        trigger: ".home-second-section",
        start: "top 40%",
        end: "top 0%",
        onEnter: () => {
          "play";
        },
        onEnterBack: () => {
          "reverse";
        },
        scrub: 10,
      },
    });
    gsap.to("#text-bg-layer-text1_2", {
      y: "160vh",
      scrollTrigger: {
        trigger: ".home-second-section",
        start: "top 30%",
        end: "top 0%",
        onEnter: () => {
          "play";
        },
        onEnterBack: () => {
          "reverse";
        },
        scrub: 10,
      },
    });
    gsap.to("#text-bg-layer-text2", {
      fontSize: "80vw",
      marginTop: "-30vw",
      left: "-150vw",
      opacity: 0,
      scrollTrigger: {
        trigger: ".home-second-section",
        start: "top 100%",
        end: "top 0%",
        onEnter: () => {
          "play";
        },
        onEnterBack: () => {
          "reverse";
        },
        scrub: 1,
      },
    });
    gsap.to(".fixed-first-section-lines", {
      marginLeft: "-100%",
      scrollTrigger: {
        trigger: ".home-first-section",
        start: "bottom 100%",
        end: "bottom 90%",
        onEnter: () => {
          "play";
        },
        onEnterBack: () => {
          "reverse";
        },
        scrub: 1,
      },
    });
    gsap.to("#first-section-text1", {
      opacity: 0,
      scrollTrigger: {
        trigger: ".home-first-section",
        start: "bottom 0%",
        toggleActions: "play none none reset",
      },
    });
  }, []);
  //Gsap secondSection
  useEffect(() => {
    gsap.to("#mm16z", {
      opacity: 1,
      fontSize: "3vw",
      transition: 0.5,
      scrollTrigger: {
        trigger: ".home-second-section",
        start: "top 0%",
        end: "top 0%",
        onEnter: () => {
          "play";
        },
        onEnterBack: () => {
          "reverse";
        },
        scrub: 1,
      },
    });
    gsap.to(".loading-screen", {
      display: "none",
      scrollTrigger: {
        trigger: ".home-second-section",
        start: "top 90%",
      },
    });
    gsap.to("#mm16z-z_letter", {
      fontSize: "2vw",
      transition: 0.5,
      transitionDelay: 0.5,
      scrollTrigger: {
        trigger: ".home-second-section",
        start: "top 0%",
        end: "top 0%",
        onEnter: () => {
          "play";
        },
        onEnterBack: () => {
          "reverse";
        },
        scrub: 1,
      },
    });
    gsap.to("#mm16z-studio_letter", {
      opacity: 1,
      transition: 3,
      scrollTrigger: {
        trigger: ".home-second-section",
        start: "top 0%",
        end: "top 0%",
        onEnter: () => {
          "play";
        },
        onEnterBack: () => {
          "reverse";
        },
        scrub: 1,
      },
    });
    gsap.to("#second-section-text1", {
      xPercent: -50,
      ease: "none",
      repeat: -1,
      duration: 200,
      scrollTrigger: {
        trigger: ".home-second-section",
        start: "bottom 120%",
        end: "bottom -10%",
        toggleActions: "play reset play reset",
      },
    });
    gsap.to("#second-section-text2", {
      xPercent: 50,
      ease: "none",
      repeat: -1,
      duration: 320,
      scrollTrigger: {
        trigger: ".home-second-section",
        start: "bottom 120%",
        end: "bottom -10%",
        toggleActions: "play reset play reset",
      },
    });
    gsap.to("#fixed-third-section-images1", {
      width: "100vw",
      height: "100vh",
      left: "0vw",
      top: "0vh",
      opacity: 1,
      scrollTrigger: {
        trigger: ".home-second-section",
        start: "bottom 30%",
        end: "bottom -20%",
        onEnter: () => {
          "play";
        },
        onEnterBack: () => {
          "reverse";
        },
        scrub: 0,
      },
    });
    gsap.to("#fixed-third-section-images1", {
      marginLeft: "-100vw",
      scrollTrigger: {
        trigger: ".home-second-section",
        start: "bottom -20%",
        end: "bottom -120%",
        onEnter: () => {
          "play";
        },
        onEnterBack: () => {
          "reverse";
        },
        scrub: 0,
      },
    });
    gsap.to("#fixed-third-section-images2", {
      marginLeft: "-200.5vw",
      top: "30vh",
      width: "35vw",
      height: "35vh",
      scrollTrigger: {
        trigger: ".home-second-section",
        start: "bottom -20%",
        end: "bottom -260%",
        onEnter: () => {
          "play";
        },
        onEnterBack: () => {
          "reverse";
        },
        scrub: 0,
      },
    });
    gsap.to("#fixed-third-section-images3", {
      marginLeft: "-320vw",
      scrollTrigger: {
        trigger: ".home-second-section",
        start: "bottom -20%",
        end: "bottom -323%",
        onEnter: () => {
          "play";
        },
        onEnterBack: () => {
          "reverse";
        },
        scrub: 2,
      },
    });
    gsap.to("#fixed-third-section-images4", {
      marginLeft: "-310vw",
      scrollTrigger: {
        trigger: ".home-second-section",
        start: "bottom -20%",
        end: "bottom -322%",
        onEnter: () => {
          "play";
        },
        onEnterBack: () => {
          "reverse";
        },
        scrub: 3,
      },
    });
    gsap.to("#fixed-third-section-images5", {
      marginLeft: "-315vw",
      scrollTrigger: {
        trigger: ".home-second-section",
        start: "bottom -20%",
        end: "bottom -321%",
        onEnter: () => {
          "play";
        },
        onEnterBack: () => {
          "reverse";
        },
        scrub: 2,
      },
    });
    gsap.to("#fixed-third-section-images6", {
      marginLeft: "-300vw",
      scrollTrigger: {
        trigger: ".home-second-section",
        start: "bottom -20%",
        end: "bottom -325%",
        onEnter: () => {
          "play";
        },
        onEnterBack: () => {
          "reverse";
        },
        scrub: 1,
      },
    });
    gsap.to("#fixed-third-section-images7", {
      marginLeft: "-310vw",
      scrollTrigger: {
        trigger: ".home-second-section",
        start: "bottom -20%",
        end: "bottom -322%",
        onEnter: () => {
          "play";
        },
        onEnterBack: () => {
          "reverse";
        },
        scrub: 2,
      },
    });
  }, []);
  //Gsap thirdSection
  useEffect(() => {
    gsap.to("#rainbow-wrapper", {
      opacity: 1,
      display: "block",
      transition: 0.5,
      scrollTrigger: {
        trigger: ".home-third-section",
        start: "bottom 170%",
        end: "bottom 120%",
        onEnter: () => {
          "play";
        },
        onEnterBack: () => {
          "reverse";
        },
        scrub: 1,
      },
    });
    gsap.to(".background-container", {
      opacity: 0,
      display: "none",
      scrollTrigger: {
        trigger: ".home-third-section",
        start: "bottom 110%",
        toggleActions: "play none none reverse",
      },
    });
    gsap.to(".bg-frame", {
      opacity: 0,
      display: "none",
      scrollTrigger: {
        trigger: ".home-third-section",
        start: "bottom 110%",
        toggleActions: "play reverse play reverse",
      },
    });
    gsap.to("#mm16z-showreel", {
      display: "block",
      scrollTrigger: {
        trigger: ".home-third-section",
        start: "bottom 130%",
        end: "bottom 50%",
        toggleActions: "play reverse play reverse",
      },
      keyframes: {
        "0%": { "clip-path": "circle(0% at 50% 50%)" },
        "100%": { "clip-path": "circle(70.7% at 50% 50%)" },
      },
      duration: 2,
      ease: "bounce.inOut",
    });
    gsap.to("#bglayer1", {
      display: "block",
      scrollTrigger: {
        trigger: ".home-third-section",
        start: "bottom 130%",
        end: "bottom 50%",
        toggleActions: "play reverse play reverse",
      },
      keyframes: {
        "0%": { "clip-path": "polygon(0 0, 0 0, 0 100%, 0 100%)" },
        "100%": { "clip-path": "polygon(100% 0, 0 0, 0 100%, 100% 100%)" },
      },
      duration: 1,
      delay: 1.5,
    });
    gsap.to("#bglayer2", {
      display: "block",
      opacity: 1,
      transition: 0.5,
      scrollTrigger: {
        trigger: ".home-third-section",
        start: "bottom 130%",
        end: "bottom 50%",
        toggleActions: "play reverse play reverse",
      },
      duration: 2,
      delay: 2,
    });
    gsap.to("#cancelplayer", {
      display: "block",
      opacity: 1,
      transition: 0.5,
      scrollTrigger: {
        trigger: ".home-third-section",
        start: "bottom 120%",
        end: "bottom 15%",
        toggleActions: "play reverse none reverse",
      },
    });
    gsap.to("#cancelplayeronback", {
      display: "block",
      opacity: 1,
      transition: 0.5,
      scrollTrigger: {
        trigger: ".home-third-section",
        start: "bottom 15%",
        toggleActions: "reset none none play",
      },
    });
    gsap.to("#rainbow-wrapper", {
      scrollTrigger: {
        trigger: ".home-four-section",
        start: "top 20%",
        end: "top -30%",
        onEnter: () => {
          "play";
        },
        onEnterBack: () => {
          "reverse";
        },
        scrub: 1,
      },
      keyframes: {
        "0%": { "clip-path": "polygon(100% 0, 100% 100%, 0 100%, 0 0)" },
        "50%": { "clip-path": "polygon(29% 6%, 90% 27%, 70% 100%, 0 70%)" },
        "100%": { "clip-path": "polygon(50% 50%, 50% 50%, 50% 50%, 50% 50%)" },
      },
    });
    gsap.to("#mm16z-showreel", {
      scrollTrigger: {
        trigger: ".home-four-section",
        start: "top 20%",
        end: "top 0%",
        onEnter: () => {
          "play";
        },
        onEnterBack: () => {
          "reverse";
        },
        scrub: 1,
      },
      keyframes: {
        "0%": { "clip-path": "circle(50% at 50% 50%)" },
        "50%": { "clip-path": "circle(27.9% at 50% 50%)" },
        "100%": { "clip-path": "circle(0% at 50% 50%)" },
      },
    });
    gsap.to("#bglayer1", {
      scrollTrigger: {
        trigger: ".home-four-section",
        start: "top 20%",
        end: "top 0%",
        onEnter: () => {
          "play";
        },
        onEnterBack: () => {
          "reverse";
        },
        scrub: 1,
      },
      keyframes: {
        "0%": { "clip-path": "polygon(100% 0, 100% 100%, 0 100%, 0 0)" },
        "50%": { "clip-path": "polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)" },
        "100%": { "clip-path": "polygon(50% 50%, 50% 50%, 50% 50%, 50% 50%)" },
      },
    });
    gsap.to("#bglayer2", {
      opacity: 0,
      scrollTrigger: {
        trigger: ".home-four-section",
        start: "top 20%",
        end: "top 0%",
        toggleActions: "play none none reverse",
      },
    });
  }, []);
  //Gsap fourSection
  useEffect(() => {
    gsap.to("#rainbowrainbowxD", {
      opacity: 1,
      transition: 2,
      scrollTrigger: {
        trigger: ".home-four-section",
        start: "top 0%",
        end: "top 50%",
        onEnter: () => {
          "play";
        },
        onEnterBack: () => {
          "reverse";
        },
        scrub: 1,
      },
    });
    gsap.to(".section-four-pageoverallwarper", {
      opacity: 1,
      transition: 2,
      scrollTrigger: {
        trigger: ".home-four-section",
        start: "top 0%",
        end: "top 50%",
        onEnter: () => {
          "play";
        },
        onEnterBack: () => {
          "reverse";
        },
        scrub: 1,
      },
    });
  }, []);
  useEffect(() => {
          console.log("meow");
    const count = Object.values(isimageloaded).filter(
      (item) => item === true
    ).length;
    setIsloadedfilecount(count);
    if (loadedfilecount >= 6) {
      loadingpage.current.classList.add("loaded");
    }
    if (loadedfilecount === 0) {
      setLoadstate(16.6);
    } else if (loadedfilecount === 1) {
      setLoadstate(25);
    } else if (loadedfilecount === 2) {
      setLoadstate(37.2);
    } else if (loadedfilecount === 3) {
      setLoadstate(55);
    } else if (loadedfilecount === 4) {
      setLoadstate(68.7);
    } else if (loadedfilecount === 5) {
      setLoadstate(74.2);
    } else if (loadedfilecount === 6) {
      setLoadstate(89);
    } else if (loadedfilecount === 7) {
      setLoadstate(100);
    }
    if (loadedfilecount >= 7) {
      loadingpage.current.classList.add("active");
    } else {
      loadingpage.current.classList.add("active");
    }
  }, [isimageloaded]);
  //
  return (
    <div className="home-container">
      <div className="loading-screen" ref={loadingpage}>
        <img src={require("../../IMAGES/catloadingbymm16zcat.gif")}></img>
        <img src={require("../../IMAGES/catloadingbymm16ztext.gif")}></img>
        <div id="loadstate">{loadstate}</div>
      </div>
      <div className="smoothscroller-warper">
        <SmoothScroller ref={scrollbarstate} />
        <section className="home-first-section">
          <div className="circles">
            <div className="circle1-warper" ref={circle1}>
              <div className="circle-1"></div>
            </div>
            <div className="circle2-warper" ref={circle2}>
              <div className="circle-2"></div>
            </div>
          </div>
          <div
            id="responsiveprogress"
            style={{
              position: "absolute",
              top: "3vh",
              left: "42.5vw",
              fontSize: "1.2vw",
              fontFamily: "Chakra Petch, sans-serif",
            }}
          >
            Responsive in progress (70%)
          </div>
          <div id="thaialphabet">
            ก ข ฃ ค ฅ ฆ ง จ ฉ ช ซ ฌ ญ ฎ ฏ ฐ ฑ ฒ ณ ด ต ถ ท ธ น บ ป ผ ฝ พ ฟ ภ ม ย
            ร ล ว ศ ษ ส ห ฬ อ ฮ
          </div>
        </section>
        <section className="home-second-section">
          <div className="second-section-texts">
            <div className="second-section-texts-warpper">
              <div id="second-section-text1">
                <span>
                  เบื่อหน้าเว็บไซต์เดิมๆเเล้วหรือยัง?
                  เบื่อหน้าเว็บไซต์เดิมๆเเล้วหรือยัง?
                  เบื่อหน้าเว็บไซต์เดิมๆเเล้วหรือยัง?
                  เบื่อหน้าเว็บไซต์เดิมๆเเล้วหรือยัง?
                  เบื่อหน้าเว็บไซต์เดิมๆเเล้วหรือยัง?
                  เบื่อหน้าเว็บไซต์เดิมๆเเล้วหรือยัง?
                  เบื่อหน้าเว็บไซต์เดิมๆเเล้วหรือยัง?
                  เบื่อหน้าเว็บไซต์เดิมๆเเล้วหรือยัง?
                  เบื่อหน้าเว็บไซต์เดิมๆเเล้วหรือยัง?
                  เบื่อหน้าเว็บไซต์เดิมๆเเล้วหรือยัง?
                  เบื่อหน้าเว็บไซต์เดิมๆเเล้วหรือยัง?
                  เบื่อหน้าเว็บไซต์เดิมๆเเล้วหรือยัง?
                  เบื่อหน้าเว็บไซต์เดิมๆเเล้วหรือยัง?
                  เบื่อหน้าเว็บไซต์เดิมๆเเล้วหรือยัง?
                  เบื่อหน้าเว็บไซต์เดิมๆเเล้วหรือยัง?
                  เบื่อหน้าเว็บไซต์เดิมๆเเล้วหรือยัง?
                  เบื่อหน้าเว็บไซต์เดิมๆเเล้วหรือยัง?
                  เบื่อหน้าเว็บไซต์เดิมๆเเล้วหรือยัง?
                  เบื่อหน้าเว็บไซต์เดิมๆเเล้วหรือยัง?
                  เบื่อหน้าเว็บไซต์เดิมๆเเล้วหรือยัง?
                  เบื่อหน้าเว็บไซต์เดิมๆเเล้วหรือยัง?
                  เบื่อหน้าเว็บไซต์เดิมๆเเล้วหรือยัง?
                  เบื่อหน้าเว็บไซต์เดิมๆเเล้วหรือยัง?
                  เบื่อหน้าเว็บไซต์เดิมๆเเล้วหรือยัง?
                  เบื่อหน้าเว็บไซต์เดิมๆเเล้วหรือยัง?
                  เบื่อหน้าเว็บไซต์เดิมๆเเล้วหรือยัง?
                  เบื่อหน้าเว็บไซต์เดิมๆเเล้วหรือยัง?
                  เบื่อหน้าเว็บไซต์เดิมๆเเล้วหรือยัง?
                  เบื่อหน้าเว็บไซต์เดิมๆเเล้วหรือยัง?
                  เบื่อหน้าเว็บไซต์เดิมๆเเล้วหรือยัง?
                  เบื่อหน้าเว็บไซต์เดิมๆเเล้วหรือยัง?
                  เบื่อหน้าเว็บไซต์เดิมๆเเล้วหรือยัง?
                  เบื่อหน้าเว็บไซต์เดิมๆเเล้วหรือยัง?
                  เบื่อหน้าเว็บไซต์เดิมๆเเล้วหรือยัง?
                  เบื่อหน้าเว็บไซต์เดิมๆเเล้วหรือยัง?
                  เบื่อหน้าเว็บไซต์เดิมๆเเล้วหรือยัง?
                  เบื่อหน้าเว็บไซต์เดิมๆเเล้วหรือยัง?
                </span>
              </div>
              <div id="second-section-text2">
                <span>
                  ที่นี่... ให้คุณมากกว่าคำว่าดีไซน์ ที่นี่...
                  ให้คุณมากกว่าคำว่าดีไซน์ ที่นี่... ให้คุณมากกว่าคำว่าดีไซน์
                  ที่นี่... ให้คุณมากกว่าคำว่าดีไซน์ ที่นี่...
                  ให้คุณมากกว่าคำว่าดีไซน์ ที่นี่... ให้คุณมากกว่าคำว่าดีไซน์
                  ที่นี่... ให้คุณมากกว่าคำว่าดีไซน์ ที่นี่...
                  ให้คุณมากกว่าคำว่าดีไซน์ ที่นี่... ให้คุณมากกว่าคำว่าดีไซน์
                  ที่นี่... ให้คุณมากกว่าคำว่าดีไซน์ ที่นี่...
                  ให้คุณมากกว่าคำว่าดีไซน์ ที่นี่... ให้คุณมากกว่าคำว่าดีไซน์
                  ที่นี่... ให้คุณมากกว่าคำว่าดีไซน์ ที่นี่...
                  ให้คุณมากกว่าคำว่าดีไซน์ ที่นี่... ให้คุณมากกว่าคำว่าดีไซน์
                  ที่นี่... ให้คุณมากกว่าคำว่าดีไซน์ ที่นี่...
                  ให้คุณมากกว่าคำว่าดีไซน์ ที่นี่... ให้คุณมากกว่าคำว่าดีไซน์
                  ที่นี่... ให้คุณมากกว่าคำว่าดีไซน์ ที่นี่...
                  ให้คุณมากกว่าคำว่าดีไซน์ ที่นี่... ให้คุณมากกว่าคำว่าดีไซน์
                  ที่นี่... ให้คุณมากกว่าคำว่าดีไซน์ ที่นี่...
                  ให้คุณมากกว่าคำว่าดีไซน์ ที่นี่... ให้คุณมากกว่าคำว่าดีไซน์
                  ที่นี่... ให้คุณมากกว่าคำว่าดีไซน์ ที่นี่...
                  ให้คุณมากกว่าคำว่าดีไซน์ ที่นี่... ให้คุณมากกว่าคำว่าดีไซน์
                  ที่นี่... ให้คุณมากกว่าคำว่าดีไซน์ ที่นี่...
                  ให้คุณมากกว่าคำว่าดีไซน์ ที่นี่... ให้คุณมากกว่าคำว่าดีไซน์
                  ที่นี่... ให้คุณมากกว่าคำว่าดีไซน์ ที่นี่...
                  ให้คุณมากกว่าคำว่าดีไซน์ ที่นี่... ให้คุณมากกว่าคำว่าดีไซน์
                  ที่นี่... ให้คุณมากกว่าคำว่าดีไซน์ ที่นี่...
                  ให้คุณมากกว่าคำว่าดีไซน์ ที่นี่... ให้คุณมากกว่าคำว่าดีไซน์
                  ที่นี่... ให้คุณมากกว่าคำว่าดีไซน์ ที่นี่...
                  ให้คุณมากกว่าคำว่าดีไซน์ ที่นี่... ให้คุณมากกว่าคำว่าดีไซน์
                  ที่นี่... ให้คุณมากกว่าคำว่าดีไซน์ ที่นี่...
                  ให้คุณมากกว่าคำว่าดีไซน์ ที่นี่... ให้คุณมากกว่าคำว่าดีไซน์
                  ที่นี่... ให้คุณมากกว่าคำว่าดีไซน์ ที่นี่...
                  ให้คุณมากกว่าคำว่าดีไซน์ ที่นี่... ให้คุณมากกว่าคำว่าดีไซน์
                  ที่นี่... ให้คุณมากกว่าคำว่าดีไซน์ ที่นี่...
                  ให้คุณมากกว่าคำว่าดีไซน์ ที่นี่... ให้คุณมากกว่าคำว่าดีไซน์
                  ที่นี่... ให้คุณมากกว่าคำว่าดีไซน์ ที่นี่...
                  ให้คุณมากกว่าคำว่าดีไซน์ ที่นี่... ให้คุณมากกว่าคำว่าดีไซน์
                  ที่นี่... ให้คุณมากกว่าคำว่าดีไซน์ ที่นี่...
                  ให้คุณมากกว่าคำว่าดีไซน์ ที่นี่... ให้คุณมากกว่าคำว่าดีไซน์
                  ที่นี่... ให้คุณมากกว่าคำว่าดีไซน์ ที่นี่...
                  ให้คุณมากกว่าคำว่าดีไซน์
                </span>
              </div>
            </div>
          </div>
        </section>
        <section className="home-third-section"></section>
        <section className="home-four-section">
          <div id="rainbowrainbowxD"></div>
          <div className="section-four-pageoverallwarper">
            <div id="section-four-overall-nav">
              <span id="overall-nav-id1" ref={pageoverallwarperRef}>
                MM16zสตูดิโอ
              </span>
              <span>
                |<span className="overall-nav-texts">หน้าเเรก</span>
              </span>
              <span>
                |<span className="overall-nav-texts">Faq</span>
              </span>
              <span>
                |<span className="overall-nav-texts">MM16zPORTFOLIO</span>
              </span>
              <span>
                |<span className="overall-nav-texts">เกี่ยวกับเรา</span>
              </span>
              <span>
                |<span className="overall-nav-texts">ติดต่อเรา</span>
              </span>
            </div>
            <div className="section-four-overall-contents">
              <div id="overall-contents-loginbox">
                <div style={{ height: "5vh", background: "#1e3518" }}></div>
                <p
                  style={{
                    color: "white",
                    marginTop: "-5vh",
                    textAlign: "center",
                    fontSize: "1.8vw",
                    marginBottom: "2vh",
                  }}
                >
                  เข้าสู่ระบบ admin
                </p>
                <span style={{ fontWeight: "bolder" }}>
                  <span style={{ opacity: 0.25, marginLeft: "7vw" }}>
                    hint: admin:1234
                  </span>
                  <br></br>
                  &nbsp;&nbsp;&nbsp;ยูซเซอร์ :{" "}
                </span>
                <input type="text"></input>
                <p></p>
                <span style={{ fontWeight: "bolder" }}>
                  &nbsp;&nbsp;&nbsp;พาสเวิรด์ :{" "}
                </span>
                <input type="password"></input>
                <p></p>
                <span style={{ fontWeight: "bolder" }}>
                  &nbsp;&nbsp;&nbsp;ยอมรับ
                </span>
                <input type="checkbox" style={{ marginLeft: "8px" }}></input>
                <p></p>
                <input
                  type="button"
                  style={{
                    width: "90%",
                    height: "20%",
                    marginLeft: "1vw",
                    fontWeight: "bolder",
                    fontSize: "20px",
                  }}
                  value="LOGIN"
                ></input>
              </div>
              <div className="fakebanners">
                <div id="fakebannerxD">
                  <span style={{ fontSize: "0.8vw", opacity: 0.7 }}>
                    (ใส่เพื่อเเสดงเท่านั้น (Fakebanner))
                  </span>
                  <p style={{ marginBottom: "-1.8vw" }}></p>
                  เเบนเนอร์โฆษณา
                  <br></br>
                  150x150
                  <br></br>
                  16บาท/เดือน
                  <br></br>
                  <span style={{ textDecoration: "underline" }}>
                    คลิกเพื่อดูรายละเอียด
                  </span>
                </div>
                <div id="fakebanner1">
                  <p style={{ marginBottom: "-0.6vw" }}></p>
                  เเบนเนอร์โฆษณา
                  <br></br>
                  70x150
                  <br></br>
                  16บาท/เดือน
                  <br></br>
                  <span style={{ textDecoration: "underline" }}>
                    คลิกเพื่อดูรายละเอียด
                  </span>
                </div>
                <div id="fakebanner2">
                  <p style={{ marginBottom: "-0.6vw" }}></p>
                  เเบนเนอร์โฆษณา
                  <br></br>
                  70x150
                  <br></br>
                  16บาท/เดือน
                  <br></br>
                  <span style={{ textDecoration: "underline" }}>
                    คลิกเพื่อดูรายละเอียด
                  </span>
                </div>
              </div>
            </div>
            <div className="leftsidecontentbox">
              <span id="lsctb-id1">
                <span
                  style={{
                    position: "absolute",
                    top: "-0.8vw",
                    left: "0.2vw",
                    fontSize: "2.3vw",
                    color: "white",
                  }}
                >
                  &#10157;
                </span>
                <span
                  style={{
                    fontSize: "1.3vw",
                    color: "white",
                    marginLeft: "2.2vw",
                  }}
                >
                  สำรวจ / ค้นหา
                </span>
              </span>
              <span id="lsctb-id2">
                <div className="lsctb-id2-icons">
                  <span
                    style={{
                      position: "absolute",
                      top: "6vh",
                      left: "0vw",
                      fontSize: "15px",
                      color: "white",
                      backgroundColor: "red",
                      padding: "1.5px",
                      borderRadius: "10px",
                      lineHeight: "12px",
                    }}
                  >
                    hot !
                  </span>
                  <span
                    style={{
                      position: "absolute",
                      top: "10.5vh",
                      left: "0vw",
                      fontSize: "15px",
                      color: "white",
                      backgroundColor: "green",
                      padding: "2.5px",
                      borderRadius: "10px",
                      lineHeight: "12px",
                    }}
                  >
                    new
                  </span>
                  <span
                    style={{
                      position: "absolute",
                      top: "15vh",
                      left: "0vw",
                      fontSize: "15px",
                      color: "white",
                      backgroundColor: "green",
                      padding: "2.5px",
                      borderRadius: "10px",
                      lineHeight: "12px",
                    }}
                  >
                    new
                  </span>
                  <span
                    style={{
                      position: "absolute",
                      top: "24vh",
                      left: "0vw",
                      fontSize: "15px",
                      color: "white",
                      backgroundColor: "green",
                      padding: "2.5px",
                      borderRadius: "10px",
                      lineHeight: "12px",
                    }}
                  >
                    new
                  </span>
                  <span
                    style={{
                      position: "absolute",
                      top: "19.5vh",
                      left: "0vw",
                      fontSize: "15px",
                      color: "white",
                      backgroundColor: "red",
                      padding: "1.5px",
                      borderRadius: "10px",
                      lineHeight: "12px",
                    }}
                  >
                    hot !
                  </span>
                  <span
                    style={{
                      position: "absolute",
                      top: "28.5vh",
                      left: "0vw",
                      fontSize: "15px",
                      color: "white",
                      backgroundColor: "red",
                      padding: "1.5px",
                      borderRadius: "10px",
                      lineHeight: "12px",
                    }}
                  >
                    hot !
                  </span>
                </div>
                <span
                  className="lsctb-id2-textcontents"
                  style={{
                    top: "5.8vh",
                  }}
                >
                  เว็บไซต์ใหม่!
                </span>
                <span
                  className="lsctb-id2-textcontents"
                  style={{
                    top: "10vh",
                    fontSize: "0.7vw",
                  }}
                >
                  วิธีกำหนด ขนาด หน้าต่างตามประเภท<br></br>
                  เเละเงื่อนไขที่เเตกต่าง
                </span>
                <span
                  className="lsctb-id2-textcontents"
                  style={{
                    top: "15.2vh",
                  }}
                >
                  UX over UI lesson 101
                </span>
                <span
                  className="lsctb-id2-textcontents"
                  style={{
                    top: "19.3vh",
                  }}
                >
                  ข่าวดราม่าเเรงๆมากๆวันนี้
                </span>
                <span
                  className="lsctb-id2-textcontents"
                  style={{
                    top: "24vh",
                    fontSize: "0.8vw",
                  }}
                >
                  รูปธรรมชาติ / Nature and Mountain
                </span>
                <span
                  className="lsctb-id2-textcontents"
                  style={{
                    top: "28vh",
                  }}
                >
                  รูปเเมวน่ารักๆ!
                </span>
              </span>
            </div>
            <div className="centercontent">
              <div className="centercontent-box1">
                <div
                  id="centercontent-box1-header"
                  style={{
                    background: "#e1e1e1",
                    width: "100%",
                    height: "5vh",
                  }}
                >
                  <span
                    style={{
                      position: "absolute",
                      fontSize: "1.5vw",
                      width: "100%",
                      fontFamily: "Chakra Petch, sans-serif",
                      fontWeight: "bold",
                      textAlign: "center",
                      marginTop: "0.5vh",
                      textDecoration: "underline",
                      textDecorationStyle: "double",
                    }}
                  >
                    คำถามที่พบบ่อย =
                  </span>
                </div>
                <div
                  id="centercontent-box1-body"
                  style={{
                    background: "blue",
                    width: "100%",
                    height: "100%",
                    marginTop: 0,
                  }}
                >
                  <div
                    className="price"
                    style={{
                      position: "relative",
                      width: "20vw",
                      height: "100%",
                    }}
                  >
                    <span
                      style={{
                        color: "white",
                        textDecoration: "underline",
                        textDecorationStyle: "double",
                        fontSize: "1.5vw",
                        marginLeft: "1vw",
                        fontFamily: "Chakra Petch, sans-serif",
                      }}
                    >
                      &#x2022; ราคางาน
                    </span>
                    <br></br>
                    <span
                      style={{
                        position: "absolute",
                        color: "white",
                        fontSize: "0.9vw",
                        marginLeft: "1vw",
                        marginTop: "0.2vw",
                        fontFamily: "Chakra Petch, sans-serif",
                        lineHeight: "3.5vh",
                      }}
                    >
                      - งานของเรานั้นราคา{" "}
                      <span style={{ fontWeight: "bold", fontStyle: "italic" }}>
                        ไม่ตายตัว
                      </span>{" "}
                      <br></br>
                      ซึ่งองค์ประกอบของราคาโดยประมาณอยู่ที่<br></br>
                      1.สเกลงาน <br></br>2.Requestment <br></br>
                      3.ระยะเวลาทำงานตามหน้างานโดยประมาณ <br></br>4.ค่าบริการ
                      Webhost,Domain หาก<br></br>ลูกค้าให้ทางเรา Setup/เช่า ให้
                      <br></br>
                      <p style={{ marginBottom: "3vh" }}></p>
                      <span
                        style={{
                          fontSize: "0.7vw",
                          display: "inline-block",
                          inlineSize: "17vw",
                          color: "white",
                          marginTop: "-2.3vh",
                          lineHeight: "1vw",
                        }}
                      >
                        **¹ (Extra Option เเยก) คือการปรับ Theme
                        ให้เข้ากับองค์กรโดยมากที่สุด โดยการวิเคราะห์จากภาพรวม
                        product ของลูกค้า, ฐานลูกค้า มาเป็น Design
                      </span>
                    </span>
                  </div>
                  <div
                    className="ETC"
                    style={{
                      zIndex: 3,
                      position: "relative",
                      width: "20vw",
                      height: "100%",
                      top: "-99%",
                      left: "17.5vw",
                    }}
                  >
                    <span
                      style={{
                        color: "white",
                        textDecoration: "underline",
                        textDecorationStyle: "double",
                        fontSize: "1.5vw",
                        marginLeft: "1vw",
                        fontFamily: "Chakra Petch, sans-serif",
                      }}
                    >
                      &#x2022; ระยะเวลาทำงาน
                    </span>
                    <br></br>
                    <span
                      style={{
                        position: "absolute",
                        color: "white",
                        fontSize: "0.75vw",
                        marginLeft: "1vw",
                        marginTop: "0.2vw",
                        fontFamily: "Chakra Petch, sans-serif",
                        // lineHeight: "3.2vh",
                      }}
                    >
                      - คำนวณระยะเวลาโดยประมาณจาก
                      <p></p>
                      1.Scale & Webflow (สเกลของงาน)<p></p> 2.Web Animation
                      (ต้องการอนิเมชั่นเท่าไหร่ (Fixed option) มี Scale
                      ให้เลือก)<p></p> 3.Interaction
                      (ต้องการการปฏิสัมพันธ์เท่าไหร่ (Fixed option) มี Scale
                      ให้เลือก)<p></p>
                      4.**¹ (Extra Option ให้เลือกเเยก/เพิ่ม) การปรับ Theme
                      ให้เข้ากับองค์กรโดยมากที่สุด โดยคิดเเละออกเเบบจาก Base &
                      Design จาก องค์กรของลูกค้า (ระยะเวลาการทำงานมากขึ้น)
                    </span>
                  </div>
                  <div
                    className="ETC2"
                    style={{
                      zIndex: 3,
                      position: "relative",
                      width: "20vw",
                      height: "100%",
                      top: "-198%",
                      left: "37.5vw",
                    }}
                  >
                    <span
                      style={{
                        color: "white",
                        textDecoration: "underline",
                        textDecorationStyle: "double",
                        fontSize: "1.5vw",
                        marginLeft: "1vw",
                        fontFamily: "Chakra Petch, sans-serif",
                      }}
                    >
                      &#x2022; สิ่งที่ต้องเตรียม
                    </span>
                    <br></br>
                    <span
                      style={{
                        position: "absolute",
                        color: "white",
                        fontSize: "0.8vw",
                        marginLeft: "1vw",
                        marginTop: "0.2vw",
                        fontFamily: "Chakra Petch, sans-serif",
                        // lineHeight: "3vh",
                      }}
                    >
                      - สิ่งที่ลูกค้าต้องเตรียม
                      <p></p>
                      1.requestment โดยคร่าวๆ
                      <p></p>
                      2. <span style={{ fontWeight: "bolder" }}>
                        (สำคัญ)
                      </span>{" "}
                      ไฟล์ เช่น ไฟล์ภาพ ,วิดีโอ ,<br></br>เสียง ,info หรืออื่นๆ
                      ขององค์กร
                      <p></p>
                      3.การเลือก Option นี้เพิ่ม **¹(Extra Option เเยก)
                      <br></br>การปรับ Theme ให้เข้ากับองค์กรโดยมากที่สุด
                      <br></br>
                      ทางองค์กรต้องมี ตัวอย่างสินค้า หรือ Product มาก่อน
                      <br></br> หรือ การจะ Design ขึ้นมา ใหม่โดยใช้ Option นี้
                      <br></br> ต้องมี WebSample เเนบมาด้วย
                      <p style={{ marginBottom: "-2vh" }}></p>
                      <br></br>4.เงื่อนไขเเละข้อตกลงทางกฎหมาย จะเเนบ<br></br>
                      อยู่ในใบเสนอราคา
                    </span>
                  </div>
                </div>
              </div>
              <div className="centercontent-box2">
                <span
                  style={{
                    position: "absolute",
                    border: "2px solid black",
                    textAlign: "center",
                    width: "28vw",
                    lineHeight: "5vh",
                    fontSize: "1.7vw",
                    fontFamily: "Chakra Petch, sans-serif",
                    fontWeight: "bolder",
                  }}
                >
                  Ourteam (ทีมงานของเรา)
                </span>
                <div className="teams">
                  <div
                    style={{
                      border: "2px solid black",
                      position: "relative",
                      width: "9.33vw",
                      height: "100%",
                    }}
                  >
                    <span
                      style={{
                        position: "absolute",
                        textAlign: "center",
                        width: "9.13vw",
                        fontSize: "1.5vw",
                        fontFamily: "Silkscreen, cursive",
                      }}
                    >
                      MM16z
                    </span>
                    <img
                      src={require("../../IMAGES/mm16z.png")}
                      style={{
                        width: "6vw",
                        height: "auto",
                        position: "absolute",
                        top: "2.1vw",
                        left: "1.3vw",
                      }}
                    ></img>
                    <div
                      style={{
                        marginTop: "8vw",
                        textAlign: "center",
                        fontFamily: "Chakra Petch, sans-serif",
                        lineHeight: "15px",
                        fontWeight: "bold",
                        fontSize: "0.8vw",
                      }}
                    >
                      i'm doing everything at now xP
                      <p style={{ marginBottom: "-0.5vw" }}></p>
                      Programmer ,UX/UI ,Designer
                      <p style={{ marginBottom: "-0.5vw" }}></p>
                      I'm also looking for team :)
                    </div>
                  </div>
                  <div
                    style={{
                      border: "2px solid black",
                      position: "relative",
                      width: "9.33vw",
                      height: "100%",
                    }}
                  ></div>
                  <div
                    style={{
                      border: "2px solid black",
                      position: "relative",
                      width: "9.33vw",
                      height: "100%",
                    }}
                  ></div>
                </div>
              </div>
            </div>
            <img
              id="catto"
              src="https://media.giphy.com/media/lJNoBCvQYp7nq/giphy.gif"
              style={{
                zIndex: 2,
                position: "absolute",
                right: "1vw",
                bottom: "17vh",
                width: "20vw",
                height: "auto",
                opacity: 0.93,
              }}
            ></img>
            <div id="section-four-overall-bg">
              <span id="section-four-overall-bg_1">:P</span>
            </div>
            <div id="section-four-overall-footer">
              <div className="footertexts">
                <div>หน้าเเรก</div>
                <div>บริการของเรา</div>
                <div>ผลงานของเรา</div>
                <div>ข้อกำหนด & เงื่อนไข</div>
                <div>เกี่ยวกับเรา</div>
                <div>Partner with us</div>
                <div>ติดต่อเรา</div>
                <div>Cookie Statement</div>
              </div>
              <div className="socials">
                <img id="" src={require("../../IMAGES/facebook.png")}></img>
                <img id="" src={require("../../IMAGES/instagram.png")}></img>
                <img id="" src={require("../../IMAGES/twitter.png")}></img>
                <img id="" src={require("../../IMAGES/telegram.png")}></img>
              </div>
              <div
                id="cssline"
                style={{
                  zIndex: 1,
                  position: "absolute",
                  width: "2px",
                  height: "80%",
                  background: "white",
                  top: "0.8vw",
                  left: "21.5vw",
                  borderRadius: "5px",
                }}
              ></div>
              <a
                id="portfoliolink"
                href="https://mm16-portfolio.web.app/"
                target="_blank"
                style={{
                  position: "absolute",
                  fontSize: "1.2vw",
                  top: "10vh",
                  left: "23vw",
                  cursor: "pointer",
                  zIndex: 1,
                }}
              >
                https://mm16-portfolio.web.app/
              </a>
              <a
                id="allright"
                style={{
                  zIndex: 1,
                  position: "absolute",
                  bottom: "1vh",
                  right: "1vw",
                  fontSize: "20px",
                  fontFamily: "Chakra Petch , sans-serif",
                }}
              >
                © 2022 MM16z. All rights reserved.
              </a>
              <div
                id="overlaybg"
                style={{
                  pointerEvents: "none",
                  zIndex: 0,
                  opacity: 0.2,
                  position: "absolute",
                  background: "rgb(97, 226, 38)",
                  width: "70%",
                  height: "75%",
                  bottom: 0,
                  right: 0,
                  borderTopLeftRadius: "50px",
                }}
              ></div>
              <div
                id="cssline"
                style={{
                  zIndex: 1,
                  position: "absolute",
                  width: "2px",
                  height: "80%",
                  background: "white",
                  top: "0.8vw",
                  left: "39.5vw",
                  borderRadius: "5px",
                }}
              ></div>
              <div id="aboutus">
                <img src={require("../../IMAGES/info.png")}></img>เกี่ยวกับเรา
                <br></br>
                <span
                  style={{
                    position: "absolute",
                    bottom: 0,
                    marginTop: "1.5vw",
                    fontSize: "0.9vw",
                  }}
                >
                  MM16ZSTUDIO รับทำเว็บไซต์ LandingPage เพื่อเสนอ Product หรือ
                  Brand ของคุณ ให้มี{" "}
                  <span
                    style={{
                      fontWeight: "bolder",
                      fontStyle: "italic",
                      color: "rgb(244, 244, 244)",
                    }}
                  >
                    Impact
                  </span>{" "}
                  ในโลกออนไลน์ให้
                  <span
                    style={{
                      fontWeight: "bolder",
                      fontStyle: "italic",
                      color: "rgb(244, 244, 244)",
                    }}
                  >
                    มากขึ้น{" "}
                  </span>
                  ด้วยการออกเเบบที่
                  <span
                    style={{
                      fontWeight: "bolder",
                      fontStyle: "italic",
                      color: "rgb(244, 244, 244)",
                    }}
                  >
                    แปลกใหม่
                  </span>{" "}
                  เเละการปรับรูปเเบบ Theme ให้เข้ากับองค์กรของคุณ
                </span>
              </div>
              <div id="contactus">
                <img src={require("../../IMAGES/contact-mail.png")}></img>
                ติดต่อเรา
                <br></br>
                <span>Tel : +66 961304785</span>
                <br></br>
                <span>
                  FB :{" "}
                  <a
                    href="https://www.facebook.com/itmemor.awesome/"
                    target="_blank"
                  >
                    /itmemor.awesome
                  </a>
                </span>
                <br></br>
                <span>
                  Gamil : <a href="mailto:imm0rz55160@gmail.com">Contact</a>
                </span>
              </div>
              <div
                id="cssline"
                style={{
                  zIndex: 1,
                  position: "absolute",
                  width: "2px",
                  height: "80%",
                  background: "white",
                  top: "0.8vw",
                  left: "73.5vw",
                  borderRadius: "5px",
                }}
              ></div>
              <div
                id="wutfooter"
                style={{
                  position: "absolute",
                  right: 0,
                  top: 0,
                  opacity: 0.5,
                  fontStyle: "italic",
                }}
              >
                maybe a simple footer ;)
              </div>
            </div>
          </div>
        </section>
      </div>
      <section className="fixed-section">
        <section className="fixed-first-section">
          <div className="fixed-first-section-text-bg-layer">
            <div id="text-bg-layer-text1">z61MM</div>
            <div id="text-bg-layer-text1_1">O I DUTS</div>
            <div id="text-bg-layer-text1_2"> ( สตู ดิ โอ )</div>
            <div id="text-bg-layer-text2">
              ยินดีต้อนรับ.
              <div id="text-bg-layer-text2_1">ขอให้เป็นวันที่ดี (:</div>
            </div>
            <div id="first-section-text1">
              No._____<p>Date : ________</p>
            </div>
          </div>
          <div className="fixed-first-section-lines">
            <div id="line"></div>
            <div id="line"></div>
            <div id="line"></div>
            <div id="line"></div>
            <div id="line"></div>
          </div>
        </section>
        <section className="fixed-second-section">
          <div className="fixed-second-section-texts">
            <div className="warper_mm16z">
              <div id="mm16z">
                MM16
                <span id="mm16z-z_letter" style={{ fontSize: "4vw" }}>
                  z
                </span>
              </div>
              <div id="mm16z-studio_letter">Studio</div>
            </div>
          </div>
        </section>
        <section className="fixed-third-section">
          <div className="fixed-third-section-images">
            <img
              id="fixed-third-section-images1"
              src={require("../../IMAGES/webshowcase3.png")}
              onLoad={() => {
                setIsimageLoaded((prev) => ({ ...prev, img1: true }));
              }}
            ></img>
            <img
              id="fixed-third-section-images2"
              src={require("../../IMAGES/webshowcase4.png")}
              onLoad={() => {
                setIsimageLoaded((prev) => ({ ...prev, img2: true }));
              }}
            ></img>

            <img
              id="fixed-third-section-images3"
              src={require("../../IMAGES/webshowcase1.png")}
              onLoad={() => {
                setIsimageLoaded((prev) => ({ ...prev, img3: true }));
              }}
            ></img>
            <img
              id="fixed-third-section-images4"
              src={require("../../IMAGES/webshowcase2.png")}
              onLoad={() => {
                setIsimageLoaded((prev) => ({ ...prev, img4: true }));
              }}
            ></img>
            <img
              id="fixed-third-section-images5"
              src={require("../../IMAGES/webshowcase5.png")}
              onLoad={() => {
                setIsimageLoaded((prev) => ({ ...prev, img5: true }));
              }}
            ></img>
            <img
              id="fixed-third-section-images6"
              src={require("../../IMAGES/webshowcase6.png")}
              onLoad={() => {
                setIsimageLoaded((prev) => ({ ...prev, img6: true }));
              }}
            ></img>
            <img
              id="fixed-third-section-images7"
              src={require("../../IMAGES/webshowcase7.png")}
              onLoad={() => {
                setIsimageLoaded((prev) => ({ ...prev, img7: true }));
              }}
            ></img>
          </div>
          <div className="fixed-third-section-new-theme">
            <img
              id="cancelplayer"
              src={require("../../IMAGES/close.png")}
              onClick={handleClick}
            ></img>
            <img
              id="cancelplayeronback"
              src={require("../../IMAGES/close.png")}
              onClick={handleClick2}
              style={{ display: isShown ? "" : "none" }}
            ></img>
            <ReactPlayer
              id="mm16z-showreel"
              url={require("../../IMAGES/MM16ZSTUDIOv2audiov2.mp4")}
              playing={false}
              width="70vw"
              height="auto"
              controls={true}
              volume={isplayervisible}
              style={{
                display: isShown ? "" : "none",
              }}
              onReady={() => {
                setIsimageLoaded((prev) => ({ ...prev, video1: true }));
              }}
            ></ReactPlayer>
            <img
              id="bglayer1"
              src={require("../../IMAGES/bglayer.png")}
              style={{
                display: isShown ? "" : "none",
              }}
            ></img>
            <img
              id="bglayer2"
              src={require("../../IMAGES/bglayer2-1080.png")}
            ></img>
            <div id="rainbow-wrapper"></div>
          </div>
        </section>
        <section className="fixed-four-section"></section>
      </section>
      <BackgroundContainer
        ref={{
          clipshape1,
          clipshape2,
          clipshape3,
          clipshape4,
          leftsidebg,
          framebg,
        }}
      />
    </div>
  );
}

export default Home;
