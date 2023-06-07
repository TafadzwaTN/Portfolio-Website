import React, { useState, useEffect } from "react";
import { Events, scrollSpy } from "react-scroll";
import Logo from '../../assets/logo2-removebg-preview.png'

const ActiveLogo = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    Events.scrollEvent.register("begin", () => {});
    Events.scrollEvent.register("end", () => {});

    scrollSpy.update();

    return () => {
      Events.scrollEvent.remove("begin");
      Events.scrollEvent.remove("end");
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0 && !isScrolled) {
        setIsScrolled(true);
      } else if (window.scrollY === 0 && isScrolled) {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isScrolled]);

  return (
    <div
      className={`scrollable-div ${isScrolled ? "scrolled" : ""}`}
      style={{
        transition: "all 1s",
        position: isScrolled ? "fixed" : "absolute",
        right: isScrolled ? "2vw" : "calc(50% - 25vw)",
        top: isScrolled ? "2vw" : "auto",
        width: isScrolled ? "10vw" : "50vw",
        height: "fit-content",
      }}
    >
    <img src={Logo} alt="Me" />  
    </div>
  );
};

export default ActiveLogo;
