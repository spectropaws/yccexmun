import React, { useEffect, useRef } from "react";

const InitialLoader = () => {
  const loader = useRef(null);
  const loaderContainer = useRef(null);

  useEffect(() => {
    if (loader.current && loaderContainer.current) {
      loader.current.style.transform = "scale(1)";
      loader.current.style.opacity = "1";

      const timer = setTimeout(() => {
        loader.current.style.transform = "scale(10)";
        loader.current.style.opacity = "0";

        setTimeout(() => {
          if (loader.current && loaderContainer.current) {
            loader.current.style.display = "none";
            loaderContainer.current.style.display = "none";
          }
        }, 300);
      }, 1000);

      return () => clearTimeout(timer);
    }
  }, []);
  return (
    <div
      ref={loaderContainer}
      className="w-full h-screen grid place-items-center overflow-hidden fixed top-0 left-0 bg-[#EFE7E4] z-50"
    >
      <div className="w-40 h-40  animate-pulse">
        <img
          ref={loader}
          src="logo.png"
          alt="logo"
          className="w-40 h-40 transition-all duration-300 ease-in-out"
        />
      </div>
    </div>
  );
};

export default InitialLoader;
