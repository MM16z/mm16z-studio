import {
  useEffect,
  forwardRef,
  useImperativeHandle,
  useState,
  useRef,
} from "react";
import Scrollbar from "smooth-scrollbar";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import OverscrollPlugin from "smooth-scrollbar/plugins/overscroll";

// var overscrollOption = {
//   enable: true,
//   effect: "glow",
//   damping: 0.5,
//   maxOverscroll: 150,
// };

const SmoothScroller = forwardRef((probs, ref) => {
  const [scrollbarstate, setscrollbarstate] = useState();
  let scrollbar;
  useEffect(() => {
    // Scrollbar.use(OverscrollPlugin);
    scrollbar = Scrollbar.init(
      document.querySelector(".smoothscroller-warper"),
      {
        damping: 0.06,
        renderByPixels: true,
        thumbMinSize: 1,
        plugin: {
          // overscroll: { ...overscrollOption },
        },
      }
    );
    ScrollTrigger.scrollerProxy("body", {
      scrollTop(value) {
        if (arguments.length) {
          scrollbar.scrollTop = value;
        }
        return scrollbar.scrollTop;
      },
    });
    scrollbar.addListener(ScrollTrigger.update);
    setscrollbarstate(scrollbar);
  }, []);
  useImperativeHandle(ref, () => ({
    torainbowsection() {
      scrollbarstate.scrollTo(0, 4750, 4000);
    },
    torainbowsectiononback() {

      scrollbarstate.scrollTo(0, 3050, 2000);
    },
  }));
  return null;
});

export default SmoothScroller;
