import React, { useState } from "react";
import Particles from "../../components/magicui/particles";
import BlurIn from "../../components/magicui/blur-in";
import FlipText from "../../components/magicui/flip-text";
import ShinyButton from "../../components/magicui/shiny-button";
import { useNavigate } from "react-router-dom";
import "../../App.css";

export default function Landing() {
  const [buttonTimer, setButtonTimer] = useState(false);
  const navigate = useNavigate();

  function handleExplore() {
    navigate("/todo");
  }

  React.useEffect(() => {
    setTimeout(() => {
      setButtonTimer(true);
    }, 3000);
  }, []);
  return (
    <>
      <div className="flex justify-center items-center min-h-[100vh] overflow-hidden">
        <div className="flex flex-col justify-center items-center gap-[100px]">
          <div>
            <Particles
              className="absolute inset-0"
              quantity={400}
              ease={80}
              refresh
            />
            <BlurIn word={"Welcome to Space X"}></BlurIn>
            <FlipText
              className="text-[18px] font-poppins pt-10 font-bold  text-black dark:text-white  md:leading-[5rem]"
              word="A safe workspace just for you!"
            />
          </div>
          {buttonTimer && (
            <div className="fade-in">
              <ShinyButton onClick={handleExplore} text="Explore..." />
            </div>
          )}
        </div>
      </div>
    </>
  );
}
