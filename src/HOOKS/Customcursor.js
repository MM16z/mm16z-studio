import "./Custom_Cursor.scss";

import Kinet from "kinet";

import { useEffect, forwardRef } from "react";

const CustomCursor = forwardRef((probs, circleRef) => {
  const customCursor = () => {
    var kinet = new Kinet({
      acceleration: 0.06,
      friction: 0.2,
      names: ["x", "y"],
    });

    var circle = document.getElementById("circle");

    kinet.on("tick", function (instances) {
      circle.style.transform = `translate3d(${instances.x.current}px, ${
        instances.y.current
      }px, 0) rotateX(${instances.x.velocity / 2}deg) rotateY(${
        instances.y.velocity / 2
      }deg)`;
    });

    document.addEventListener("mousemove", function (event) {
      kinet.animate("x", event.clientX - window.innerWidth / 2);
      kinet.animate("y", event.clientY - window.innerHeight / 2);
    });
  };

  useEffect(() => {
    customCursor();
  }, []);

  return <div id="circle" className="circle" ref={circleRef}></div>;
});

export default CustomCursor;
