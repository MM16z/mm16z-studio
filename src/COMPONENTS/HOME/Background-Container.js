import { forwardRef, useRef } from "react";
import "../../SASS/HOME/background-container.scss";

const BackgroundContainer = forwardRef(
  (
    probs,
    { clipshape1, clipshape2, clipshape3, clipshape4, leftsidebg, framebg }
  ) => {
    return (
      <div className="background-container">
        <section className="bg-leftside">
          <div id="leftsiderectangle" ref={leftsidebg}></div>
        </section>
        <section className="bg-rightside">
          <div id="clip-shape-1" ref={clipshape1}></div>
          <div id="clip-shape-2" ref={clipshape2}></div>
          <div id="clip-shape-3" ref={clipshape3}></div>
          <div id="clip-shape-4" ref={clipshape4}></div>
        </section>
        <section className="bg-frame" ref={framebg}></section>
      </div>
    );
  }
);

export default BackgroundContainer;
