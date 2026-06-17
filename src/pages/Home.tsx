import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import Topbar from "../components/shared/Topbar";

import mboto from "../../public/assets/bi.jpg";
import fisa from "../../public/assets/z.jpg";
import task from "../../public/assets/by.jpg";
import safi from "../../public/assets/bt.jpg";
import car from "../../public/assets/bq.jpg";
import buby from "../../public/assets/zizo.jpg";
import ScrollVelocity from "../components/ScrollVelocity";
import TiltedCard from "../components/TiltedCard";

import london from "../../public/assets/merch2.png"
import nairobi from "../../public/assets/merch6.png"
import kampala from "../../public/assets/merc1.png"
import cairo from "../../public/assets/merch7.png"
import lagos from "../../public/assets/merch4.png"
import dodoma from "../../public/assets/merch5.png"


const images =[car, task, buby , fisa , mboto, safi];

const Home = () => {
  const [index, setIndex] = useState(0);
  const [active, setActive] = useState("contact");

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 14000);

    return () => clearInterval(interval);
  }, []);

  //console handle
const handleAnimationComplete = () => {
  console.log('All letters have animated!');
};


  return (
    
    <>
      <Topbar />

      <div className="home-con">
        <div className="bastad overflow-hidden rounded-xl relative w-full h-[400px]">
          
          <AnimatePresence mode="wait">
            <div className="onyi">

              {/* TAB HEADER BOX */}
              <div className="flex bg-black rounded-xl p-1 gap-1 shadow-lg">

                <button
                  onClick={() => setActive("catalogue")}
                  className={`px-6 py-2 rounded-lg transition-all gin ${
                    active === "book"
                      ? "bg-white text-black"
                      : "text-white hover:bg-white/10"
                  }`}
                >
                  Catalogue
                </button>

                <button
                  onClick={() => setActive("bith")}
                  className={`px-6 py-2 rounded-lg transition-all gin ${
                    active === "about"
                      ? "bg-white text-black"
                      : "text-white hover:bg-white/10"
                  }`}
                >
                  BITH
                </button>

              </div>

              {/* TAB CONTENT */}
              <div className="mt-6 text-white text-center cman">

                {active === "catalogue" && (
                  <div>
                    <h2 className="text-xl font-bold">Catalogue</h2>
                    <p>Purchase BITH Merch today.</p>
                  </div>
                )}

                {active === "bith" && (
                  <div>
                    <h2 className="text-xl font-bold">About Boyz In The Hood</h2>
                    <p>About our brand.</p>
                  </div>
                )}

              </div>

            </div>

            <motion.img
              key={images[index]}
              src={images[index]}
              alt="Volfreda"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1.0 }}
              exit={{ opacity: 0, scale: 1.02 }}
              transition={{
                duration: 1.2,
                ease: "easeInOut",
              }}
              className="mboto"
            />
            
          </AnimatePresence>

        </div>
        
           {/*Blur text 
            <BlurText
              text="Purchae"
              delay={30}
              animateBy="letters"
              direction="top"
              onAnimationComplete={handleAnimationComplete}
              className="text-2xl mb-8"
            />

          */}


            {/*Tilted card */}
          <div className="bithd nzakwa">
              <TiltedCard
                imageSrc={london}
                altText="Kendrick Lamar - GNX Album Cover"
                captionText="Kendrick Lamar - GNX"
                containerHeight="300px"
                containerWidth="300px"
                imageHeight="310px"
                imageWidth="300px"
                rotateAmplitude={12}
                scaleOnHover={1.1}
                showMobileWarning={false}
                showTooltip={false}
                displayOverlayContent={false}
                overlayContent={
                  <p className="tilted-card-demo-text">
                    Kendrick Lamar - GNX
                  </p>
                }
              />

              <div className="slim">
                {/*Scroll Vellocity*/}
                <ScrollVelocity
                  texts={['Boyz In Te Hood T-shirt ', 'White & Blue']} 
                  velocity={50}
                  className="custom-scroll-text "
                  numCopies={4}
                  damping={70}
                  stiffness={750}
                />

                <button className="btn-grad whiteblue">
                  Place order
                </button>
              </div>
          </div>

          <div className="bithd mbwexe">
              <TiltedCard
                imageSrc={nairobi}
                altText="Kendrick Lamar - GNX Album Cover"
                captionText="Kendrick Lamar - GNX"
                containerHeight="300px"
                containerWidth="300px"
                imageHeight="310px"
                imageWidth="300px"
                rotateAmplitude={12}
                scaleOnHover={1.1}
                showMobileWarning={false}
                showTooltip={false}
                displayOverlayContent={false}
                overlayContent={
                  <p className="tilted-card-demo-text">
                   BITH MERCHENDISE
                  </p>
                }
              />

              <div className="slim">
                 {/*Scroll Vellocity*/}
                <ScrollVelocity
                  texts={['Boyz In Te Hood T-shirt ', 'Black & Red']} 
                  velocity={50}
                  className="custom-scroll-text "
                  numCopies={4}
                  damping={70}
                  stiffness={750}
                />

                <button className="btn-grad blackred">
                  Place order
                </button>

              </div>
          </div>

          <div className="bithd utat">
              <TiltedCard
                imageSrc={kampala}
                altText="Kendrick Lamar - GNX Album Cover"
                captionText="Kendrick Lamar - GNX"
                containerHeight="300px"
                containerWidth="300px"
                imageHeight="310px"
                imageWidth="300px"
                rotateAmplitude={12}
                scaleOnHover={1.1}
                showMobileWarning={false}
                showTooltip={false}
                displayOverlayContent={false}
                overlayContent={
                  <p className="tilted-card-demo-text">
                    BITH MERCHENDISE
                  </p>
                }
              />

              <div className="slim">
                  {/*Scroll Vellocity*/}
                <ScrollVelocity
                  texts={['Boyz In Te Hood T-shirt ', 'White & Black']} 
                  velocity={50}
                  className="custom-scroll-text "
                  numCopies={4}
                  damping={70}
                  stiffness={750}
                />

                <button className="btn-grad blackwhite">
                  Place order
                </button>

              </div>
          </div>

          <div className="bithd nei">
              <TiltedCard
                imageSrc={cairo}
                altText="Kendrick Lamar - GNX Album Cover"
                captionText="Kendrick Lamar - GNX"
                containerHeight="300px"
                containerWidth="300px"
                imageHeight="310px"
                imageWidth="300px"
                rotateAmplitude={12}
                scaleOnHover={1.1}
                showMobileWarning={false}
                showTooltip={false}
                displayOverlayContent={false}
                overlayContent={
                  <p className="tilted-card-demo-text">
                   BITH MERCHENDISE
                  </p>
                }
              />

              <div className="slim">
                  {/*Scroll Vellocity*/}
                <ScrollVelocity
                  texts={['Boyz In Te Hood T-shirt ', 'Black & Green']} 
                  velocity={50}
                  className="custom-scroll-text "
                  numCopies={4}
                  damping={70}
                  stiffness={750}
                />

                <button className="btn-grad blackgreen">
                  Place order
                </button>
              </div>
          </div>

          <div className="bithd ngovo">
              <TiltedCard
                imageSrc={lagos}
                altText="Kendrick Lamar - GNX Album Cover"
                captionText="Kendrick Lamar - GNX"
                containerHeight="300px"
                containerWidth="300px"
                imageHeight="310px"
                imageWidth="300px"
                rotateAmplitude={12}
                scaleOnHover={1.1}
                showMobileWarning={false}
                showTooltip={false}
                displayOverlayContent={false}
                overlayContent={
                  <p className="tilted-card-demo-text">
                    Kendrick Lamar - GNX
                  </p>
                }
              />

              <div className="slim">
                  {/*Scroll Vellocity*/}
                <ScrollVelocity
                  texts={['Boyz In Te Hood T-shirt ', 'White & Red']} 
                  velocity={50}
                  className="custom-scroll-text "
                  numCopies={4}
                  damping={70}
                  stiffness={750}
                />

                <button className="btn-grad whitered">
                  Place order
                </button>

              </div>
          </div>

          <div className="bithd usit">
              <TiltedCard
                imageSrc={dodoma}
                altText="Kendrick Lamar - GNX Album Cover"
                captionText="Kendrick Lamar - GNX"
                containerHeight="300px"
                containerWidth="300px"
                imageHeight="310px"
                imageWidth="300px"
                rotateAmplitude={12}
                scaleOnHover={1.1}
                showMobileWarning={false}
                showTooltip={false}
                displayOverlayContent={false}
                overlayContent={
                  <p className="tilted-card-demo-text">
                    BITH MERCHENDISE
                  </p>
                }
              />

              <div className="slim">
                  {/*Scroll Vellocity*/}
                <ScrollVelocity
                  texts={['Boyz In Te Hood T-shirt ', 'Black & White']} 
                  velocity={50}
                  className="custom-scroll-text "
                  numCopies={4}
                  damping={70}
                  stiffness={750}
                />

                <button className="btn-grad blackwhite">
                  Place order
                </button>
              </div>
          </div>



      </div>
    </>
  );
};

export default Home;