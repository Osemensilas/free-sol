import Flip from "@/components/comonent/flip";
import Advert from "../components/comonent/Advert";
import Cleanup from "../components/comonent/Cleanup";
import Machine from "../components/comonent/Machine";
import { usePathname, useSearchParams } from 'next/navigation';
import { useState } from "react";
import FlipCOnnect from "@/components/comonent/FlipConnect";

export default function Home() {

  const pathName = usePathname();

  const [homeContainer, setHomeContainer] = useState('home-page-container');
  const [flipContainer, setFlipContainer] = useState('flip-page-container');

  const flipClicked = () => {
    window.history.pushState({}, '', '/flip');
    setFlipContainer("flip-page-container active");
    setHomeContainer("home-page-container active");
  }


  return (
    <>
    <div className={homeContainer}>
      <div className="home-page">
        <div className="home-content">
          <button onClick={flipClicked} className="advert">
              <div className="advert-img-conteiner">
                  <img src="spin.gif" alt="advert img" />
              </div>
              <div className="advert-text">
                  <img src="pointing-right.png" alt="advert img" />
                  <p>Click me to double your free sol</p>
                  <img src="pointing-right.png" className="last" alt="advert img" />
              </div>
              <div className="advert-img-conteiner">
                  <img src="spin.gif" alt="advert img" />
              </div>
          </button>
          <Machine />
          <Cleanup />
        </div>
      </div>
    </div>
    <div className={flipContainer}>
      <FlipCOnnect />        
    </div>
    </>
  );
}
