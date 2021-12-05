import { useState, useEffect } from "react";
import { SCREEN_MOBILE_SIZE } from "../constants";

//hook used to change between mobile and desktop
const useWindowSize = () => {
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
  });

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    function handleResize() {
      setWindowSize({
        width:
          window.screen.width > 0 && window.screen.width < window.innerWidth
            ? window.screen.width
            : window.innerWidth,
      });
    }
    window.addEventListener("resize", handleResize);
    handleResize();
    // Remove event listener on cleanup
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    setIsMobile((windowSize?.width || 0) <= SCREEN_MOBILE_SIZE);
  }, [windowSize]);

  return [isMobile];
};
export default useWindowSize;
