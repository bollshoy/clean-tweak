import React, { useEffect } from "react";

import Conclusion from "@/components/Conclusion/Conclusion.jsx";
import Libraries from "@/components/Libraries/Libraries.jsx";
import Windows from "@/components/Windows/Windows.jsx";
import Drivers from "@/components/Drivers/Drivers.jsx";
import About from "@/components/About/About.jsx";

const Tips = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <section className="tips" id="tips">
        <About />
        <Windows />
        <Drivers />
        <Libraries />
        <Conclusion />
      </section>
    </>
  );
};

export default Tips;
